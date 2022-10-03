import { useRef, useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { numberStringWithZero, shuffleArray } from '../../utils';
import { useAppDispatch, useAppSelector, useOnLoadImages } from '../../hooks';
import { GameCard, WinnerCheckIcon } from '../atoms';
import {
   selectCardById,
   showAsideInfo,
   updateWinScoreToSelectedPlayer,
} from '../../store';

// grid grid grid-cols-4 grid-flow-row

const TopInfoContainer = styled.div<{ isShowingInfo: boolean }>`
   width: 100%;
   height: 50px;
   max-height: ${(props) => (props.isShowingInfo ? '50px' : '0px')};
   transition: max-height 0.3s ease;
   position: relative;
`;

const InfoText = tw.div<{ $isRendering: boolean; $isActive: boolean }>`
   flex
   justify-center
   items-center
   ${(props) => (props.$isRendering ? 'animate-bounce' : '')}
   ${(props) => (props.$isActive ? 'opacity-100' : 'opacity-0')}
   transition-opacity ease-out delay-300
   w-full
   h-full
   absolute
   top-0
   left-0
`;

export interface ICardInGame {
   id: string;
   index: number;
}

export interface IGameCard {
   id: string;
   imageUrl: string;
}

interface RandomCardsProps {
   cards: IGameCard[];
   onGoodMatch: (CardId: string) => void;
   onBadMatch: () => void;
}

export const RandomGameCards = ({
   cards,
   onGoodMatch,
   onBadMatch,
}: RandomCardsProps) => {
   const dispatch = useAppDispatch();
   const { selectedPlayer } = useAppSelector((state) => state.players);

   const { isLoaded, checkImages } = useOnLoadImages();
   const secondsToMemorize = 5;

   const [gameCards, setGameCards] = useState<IGameCard[]>([]);
   const [selectedCards, setSelectedCards] = useState<ICardInGame[]>([]);
   const [winnerCards, setWinnerCards] = useState<ICardInGame[]>([]);
   const [winnerCardIds, setWinnerCardIds] = useState<string[]>([]);

   const [showImagesFirsTime, setShowImagesFirsTime] = useState<boolean>(true);
   const [showCountdown, setShowCountdown] = useState<boolean>(false);

   const $containerRef = useRef<HTMLDivElement>(null);
   const $timerTextRef = useRef<HTMLSpanElement>(null);

   const handleSelectCard = (id: string, index: number) => {
      if (selectedCards.length < 2 && !showCountdown && isLoaded) {
         if (
            !winnerCardIds.includes(id) &&
            !selectedCards
               .map((selectedCard) => selectedCard.index)
               .includes(index)
         ) {
            setSelectedCards([...selectedCards, { id, index }]);
         } else if (winnerCardIds.includes(id)) {
            dispatch(selectCardById(id));
            dispatch(showAsideInfo(true));
         }
      }
   };

   const checkIfActive = (card: IGameCard, index: number) => {
      if (!showImagesFirsTime) {
         let isActive = false;
         [...selectedCards, ...winnerCards].every((selected) => {
            isActive = selected.id === card.id && selected.index == index;
            if (isActive) {
               return false;
            }
            return true;
         });

         return isActive;
      } else {
         return true;
      }
   };

   const checkIfWinnerCard = (id: string) => {
      return winnerCardIds.includes(id);
   };

   useEffect(() => {
      if (winnerCardIds.length > 0 && gameCards.length > 0) {
         if (winnerCardIds.length === gameCards.length / 2) {
            dispatch(
               updateWinScoreToSelectedPlayer(selectedPlayer!.score.wins + 1)
            );
         }
      }
   }, [winnerCardIds]);

   useEffect(() => {
      if (gameCards.length > 0) {
         checkImages($containerRef);
      }
   }, [gameCards]);

   useEffect(() => {
      setGameCards(shuffleArray([...cards, ...cards]));
   }, [cards]);

   useEffect(() => {
      // console.log('useEffect of imagesLoaded', isLoaded);

      if (isLoaded) {
         setShowCountdown(true);
         setTimeout(() => {
            setShowImagesFirsTime(false);
            setShowCountdown(false);
         }, secondsToMemorize * 1000);
      }
   }, [isLoaded]);

   useEffect(() => {
      if (showCountdown && $timerTextRef.current) {
         let seconds = secondsToMemorize;
         $timerTextRef.current.innerText = numberStringWithZero(seconds);
         let timer = setInterval(() => {
            seconds -= 1;
            $timerTextRef.current!.innerText = numberStringWithZero(seconds);
            if (seconds <= 0) clearInterval(timer);
         }, 1000);
      }
   }, [showCountdown]);

   useEffect(() => {
      if (selectedCards.length >= 2) {
         if (selectedCards[0].id === selectedCards[1].id) {
            setWinnerCards([
               ...winnerCards,
               selectedCards[0],
               selectedCards[1],
            ]);
            setWinnerCardIds([...winnerCardIds, selectedCards[0].id]);
            onGoodMatch(selectedCards[0].id);
            setSelectedCards([]);
         } else {
            onBadMatch();
            setTimeout(() => {
               setSelectedCards([]);
            }, 1200);
         }
      }
   }, [selectedCards]);
   return (
      <>
         <TopInfoContainer isShowingInfo={!isLoaded || showCountdown}>
            <InfoText $isRendering={true} $isActive={!isLoaded}>
               Loading Images
            </InfoText>

            <div
               className={`
                  flex
                  justify-center
                  items-center
                  ${showCountdown ? 'opacity-100' : 'opacity-0'}
                  transition-opacity ease-out delay-300
                  w-full
                  h-full
                  absolute
                  top-0
                  left-0
               `}
            >
               Memorize Now!{' '}
               <span ref={$timerTextRef} style={{ marginLeft: '12px' }}></span>
            </div>
         </TopInfoContainer>

         <div
            ref={$containerRef}
            className={`
               flex
               flex-wrap
               justify-center
               align-start
               gap-2
            `}
         >
            {gameCards.map((card, index) => (
               <div
                  key={'card_game_' + card.id + '_' + index}
                  onClick={() => handleSelectCard(card.id, index)}
                  className="relative"
               >
                  <GameCard
                     imageUrl={card.imageUrl}
                     isActive={checkIfActive(card, index)}
                  />

                  <WinnerCheckIcon
                     isWinner={checkIfWinnerCard(card.id)}
                     styles={{ position: 'absolute', top: '3px', right: '3px' }}
                  />
               </div>
            ))}
         </div>
      </>
   );
};
