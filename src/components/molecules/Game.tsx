import { selectCardById, showAsideInfo } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { GameWindow } from '../atoms';
import { RandomGameCards } from './RandomGameCards';

export const Game = () => {
   //Todo SET colecciones animadas
   const dispatch = useAppDispatch();
   const { selectedCollection } = useAppSelector((state) => state.cards);
   const onGoodMatch = (cardId: string) => {
      console.log('Correct!', cardId);
      dispatch(selectCardById(cardId));
      dispatch(showAsideInfo(true));
   };

   const onBadMatch = () => {
      console.log('bad match!');
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
