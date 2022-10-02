import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';
import { useAppSelector } from '../../hooks/useRedux';

import { AddPlayerForm } from './AddPlayerForm';
import { Modal } from '../atoms';
import { AlertType } from '../../pages/HomePage';
import { ModalSelectors } from './ModalSelectors';

// Todo: Fix when creating a new player if none exists

interface ModalNewGame {
   activeModal: boolean;
   alertType: AlertType;
   setStartGame: Dispatch<SetStateAction<boolean>>;
   setAlertType: Dispatch<SetStateAction<AlertType>>;
   setActiveModal: Dispatch<SetStateAction<boolean>>;
}

export const ModalNewGame = ({
   activeModal,
   alertType,
   setStartGame,
   setAlertType,
   setActiveModal,
}: ModalNewGame) => {
   const { players } = useAppSelector((state) => state.players);

   const onCloseModal = () => {
      setActiveModal(false);
      setTimeout(() => {
         if (players.length === 0) {
            alert('Debes de crear un jugador para poder empezar a jugar');

            setActiveModal(true);
            return;
         }

         if (alertType === 'create-user') {
            setAlertType('select-user-collection');
         }

         if (alertType === 'select-user-collection') {
            setAlertType(null);
            setStartGame(true);
         }
      }, 500);
   };

   // const onCloseModal = () => {

   // };

   useEffect(() => {
      if (players.length === 0) {
         setAlertType('create-user');
      } else {
         setAlertType('select-user-collection');
      }
   }, []);

   useEffect(() => {
      if (alertType) {
         setActiveModal(true);
      }
   }, [alertType]);

   return (
      <Modal isActive={activeModal} onClose={() => onCloseModal()}>
         {alertType === 'create-user' && (
            <AddPlayerForm isActive={activeModal} closeModal={onCloseModal} />
         )}
         {alertType === 'select-user-collection' && (
            <ModalSelectors closeModal={onCloseModal} />
         )}
      </Modal>
   );
};
