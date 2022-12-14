import { Dispatch, SetStateAction } from 'react';
import tw from 'tailwind-styled-components';
import { AlertType } from '../../pages';
import { Modal, Button } from '../atoms';

interface ModalResetGame {
   resetGame: boolean;
   setStartGame: Dispatch<SetStateAction<boolean>>;
   setResetGame: Dispatch<SetStateAction<boolean>>;
   setAlertType: Dispatch<SetStateAction<AlertType>>;
   setActiveModal: Dispatch<SetStateAction<boolean>>;
}

export const ModalResetGame = ({
   resetGame,
   setStartGame,
   setResetGame,
   setAlertType,
   setActiveModal,
}: ModalResetGame) => {
   const handleCancelResetGame = () => {
      setResetGame(false);
   };

   const handleStartNewGame = () => {
      setResetGame(false);
      setTimeout(() => {
         setStartGame(false);
         setAlertType('select-user-collection');
         setActiveModal(true);
      }, 500);
   };

   const onCloseModal = () => {
      setActiveModal(false);
      setTimeout(() => {
         setAlertType(null);
      }, 500);

      setTimeout(() => {
         setStartGame(true);
      }, 1000);
   };

   return (
      <Modal isActive={resetGame} onClose={() => onCloseModal()}>
         <div
            className={`
               flex
               flex-col
               justify-center
               items-center
               gap-5
               text-2xl
         `}
         >
            <span>¿Start a new game?</span>
            <div className="flex justify-between items-center w-full gap-5">
               <Button onClick={handleCancelResetGame} styleType="DANGER">
                  cancel
               </Button>
               <Button onClick={handleStartNewGame} styleType="SUCCESS">
                  new game
               </Button>
            </div>
         </div>
      </Modal>
   );
};
