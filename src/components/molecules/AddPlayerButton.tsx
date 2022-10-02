import { useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { Button, Modal, SvgIcon } from '../atoms';
import { AddPlayerForm } from './AddPlayerForm';

export const AddPlayerButton = () => {
   const [isActive, setIsActive] = useState(false);

   const handleClick = () => {
      setIsActive(true);
   };

   return (
      <>
         <Button styleType="SUCCESS" onClick={handleClick}>
            <span>new player</span>
            <SvgIcon name="user-add" color="WHITE" />
         </Button>
         <Modal isActive={isActive} onClose={setIsActive}>
            <AddPlayerForm isActive={isActive} closeModal={setIsActive} />
         </Modal>
      </>
   );
};
