import {
   selectCardById,
   setCurrentStrikes,
   setReloadGame,
   showAsideInfo,
   updateLossScoreToSelectedPlayer,
} from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { GameWindow } from '../atoms';
import { RandomGameCards } from './RandomGameCards';
import { useNavigate } from 'react-router-dom';

export const Game = () => {
   const dispatch = useAppDispatch();
   const { selectedCollection } = useAppSelector((state) => state.cards);
   const { strikes, selectedPlayer } = useAppSelector((state) => state.players);

   const onGoodMatch = (cardId: string) => {
      console.log('Correct!', cardId);
      dispatch(selectCardById(cardId));
      dispatch(showAsideInfo(true));
   };

   const onBadMatch = () => {
      console.log('bad match!');
      dispatch(setCurrentStrikes(strikes.current + 1));
      if (strikes.current + 1 >= strikes.total) {
         alert('sorry!');
         dispatch(
            updateLossScoreToSelectedPlayer(selectedPlayer!.score.losses + 1)
         );
         dispatch(setReloadGame(true));
         setTimeout(() => {
            dispatch(setCurrentStrikes(0));
         }, 500);
      }
   };

   return (
      <GameWindow>
         <RandomGameCards
            cards={selectedCollection!.cards}
            onGoodMatch={onGoodMatch}
            onBadMatch={onBadMatch}
         />
      </GameWindow>
   );
};
