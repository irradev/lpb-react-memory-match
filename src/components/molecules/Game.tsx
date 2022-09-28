import { useRef, useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { GameWindow } from '../atoms';
import { ICardInGame, IGameCard, RandomGameCards } from './RandomGameCards';

const gameCardsArray: IGameCard[] = [
   {
      id: '1',
      imageUrl:
         'https://www.caras.com.mx/wp-content/uploads/2018/05/El-secreto-mejor-guardado-de-La-noche-estrellada-de-Van-Gogh.jpg',
   },
   {
      id: '2',
      imageUrl:
         'https://upload.wikimedia.org/wikipedia/commons/6/6f/Mural_del_Gernika.jpg',
   },
   {
      id: '3',
      imageUrl:
         'https://upload.wikimedia.org/wikipedia/commons/7/73/Leonardo_da_Vinci_-_Mona_Lisa_%28Louvre%2C_Paris%29.jpg',
   },
   {
      id: '4',
      imageUrl:
         'https://cdn.culturagenial.com/es/imagenes/1-leonardo-da-vinci-last-supper-copy-wga12732-cke.jpg',
   },
   {
      id: '5',
      imageUrl:
         'https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg',
   },
];

export const Game = () => {
   //Todo SET colecciones animadas
   const onGoodMatch = (cardId: string) => {
      console.log('Correct!', cardId);
   };

   const onBadMatch = () => {
      console.log('bad match!');
   };

   return (
      <GameWindow>
         <RandomGameCards
            cards={gameCardsArray}
            onGoodMatch={onGoodMatch}
            onBadMatch={onBadMatch}
         />
      </GameWindow>
   );
};
