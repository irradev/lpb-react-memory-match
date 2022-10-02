import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { GameOrganism } from '../components/organisms';
import { ModalNewGame, ModalResetGame } from '../components/molecules';

export type AlertType = 'create-user' | 'select-user-collection' | null;

export const HomePage = () => {
   const location = useLocation();

   const routeKeyRef = useRef<string>(location.key);
   const [startGame, setStartGame] = useState<boolean>(false);
   const [resetGame, setResetGame] = useState<boolean>(false);
   const [activeModal, setActiveModal] = useState<boolean>(false);
   const [alertType, setAlertType] = useState<AlertType>(null);

   useEffect(() => {
      routeKeyRef.current = location.key;
   }, []);

   useEffect(() => {
      // console.log({ routeKeyRef: routeKeyRef.current, location: location.key });
      if (routeKeyRef.current !== location.key) {
         setResetGame(true);
      }
   }, [location.key]);

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
