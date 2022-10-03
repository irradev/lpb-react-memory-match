import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
   setCurrentStrikes,
   setReloadGame,
   showAsideInfo,
   showMenu,
   unselectCard,
} from '../store';
import { useAppDispatch, useAppSelector, useTitlePage } from '../hooks';

import { GameOrganism } from '../components/organisms';
import { ModalNewGame, ModalResetGame } from '../components/molecules';

export type AlertType = 'create-user' | 'select-user-collection' | null;

export const HomePage = () => {
   useTitlePage('Game');
   const location = useLocation();
   const dispatch = useAppDispatch();

   const { reloadGame } = useAppSelector((state) => state.players);

   const routeKeyRef = useRef<string>(location.key);
   const [startGame, setStartGame] = useState<boolean>(false);
   const [resetGame, setResetGame] = useState<boolean>(false);
   const [activeModal, setActiveModal] = useState<boolean>(false);
   const [alertType, setAlertType] = useState<AlertType>(null);

   useEffect(() => {
      routeKeyRef.current = location.key;
      return () => {
         dispatch(showAsideInfo(false));
         dispatch(unselectCard());
      };
   }, []);

   useEffect(() => {
      // console.log({ routeKeyRef: routeKeyRef.current, location: location.key });
      if (routeKeyRef.current !== location.key) {
         setResetGame(true);
         dispatch(showAsideInfo(false));
         dispatch(showMenu(false));
      }
   }, [location.key]);

   useEffect(() => {
      if (!startGame) {
         dispatch(showAsideInfo(false));
         dispatch(unselectCard());
         dispatch(setCurrentStrikes(0));
      }
   }, [startGame]);

   useEffect(() => {
      if (reloadGame) {
         setStartGame(false);
         dispatch(setReloadGame(false));
         dispatch(setCurrentStrikes(0));
      }
   }, [reloadGame]);

   return startGame ? (
      <>
         <GameOrganism />
         <ModalResetGame
            resetGame={resetGame}
            setStartGame={setStartGame}
            setResetGame={setResetGame}
            setAlertType={setAlertType}
            setActiveModal={setActiveModal}
         />
      </>
   ) : (
      <ModalNewGame
         activeModal={activeModal}
         alertType={alertType}
         setStartGame={setStartGame}
         setAlertType={setAlertType}
         setActiveModal={setActiveModal}
      />
   );
};
