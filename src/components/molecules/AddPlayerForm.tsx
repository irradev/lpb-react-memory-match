import { FormEvent, useEffect, useRef, useState } from 'react';
import { addNewPlayer } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';

import tw from 'tailwind-styled-components';
import { Button, InputText, ModalWindow } from '../atoms';

const Form = tw.form`
   flex
   flex-col
   justify-center
   items-center
   gap-6
   w-full
`;

const ErrorSpan = tw.span<{ $isError: boolean }>`
   !text-red-400
   text-sm
   text-bold
   tracking-normal
   overflow-hidden
   -mt-4
   ${(props) => (props.$isError ? 'max-h-10' : 'max-h-0')}
   transition-all duration-150 ease-in-out
`;

const ActionButtons = tw.div`
   flex
   justify-between
   items-center
   w-full
`;

interface AddPlayerFormProps {
   isActive: boolean;
   closeModal?: (state: false) => void;
}

export const AddPlayerForm = ({
   isActive,
   closeModal = () => null,
}: AddPlayerFormProps) => {
   const dispatch = useAppDispatch();
   const { players } = useAppSelector((state) => state.players);
   const [playerName, setPlayerName] = useState<string>('');
   const [isError, setIsError] = useState<boolean>(false);
   const [errorInfo, setErrorInfo] = useState('');
   const $inputTextRef = useRef<HTMLInputElement | null>(null);

   useEffect(() => {
      if (isActive) {
         $inputTextRef.current?.focus();
      }
   }, [isActive]);

   useEffect(() => {
      if (playerName.trim().length > 1) {
         setIsError(false);
      } else if (playerName.trim().length === 1) {
         setIsError(true);
      }
   }, [playerName]);

   const findPlayerByName = (playerName: string) => {
      return players.some((player) => player.name === playerName);
   };

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setErrorInfo('');
      setIsError(false);

      if (playerName.trim().length <= 1) {
         setIsError(true);
         $inputTextRef.current?.focus();
         return;
      }

      if (findPlayerByName(playerName)) {
         setErrorInfo(
            'Este nombre de jugador ya existe, por favor intenta con otro nombre.'
         );
         setIsError(true);
         $inputTextRef.current?.focus();
         return;
      }

      dispatch(addNewPlayer(playerName));
      setPlayerName('');
      closeModal(false);
   };

   const handleCancel = () => {
      setPlayerName('');
      setIsError(false);
      setErrorInfo('');
      closeModal(false);
   };

   return (
      <ModalWindow>
         <Form onSubmit={handleSubmit}>
            <InputText
               ref={$inputTextRef}
               autoComplete="off"
               type="text"
               name="playerName"
               value={playerName}
               onChange={(e) => setPlayerName(e.target.value)}
               placeholder="New Player Name"
            />
            <ErrorSpan $isError={isError}>
               {errorInfo !== '' ? (
                  errorInfo
               ) : (
                  <>
                     {playerName === ''
                        ? `Introduce el nombre de jugador o presiona el botón cancelar para salir.`
                        : playerName.length < 2
                        ? `El nombre de jugador debe contener más de una letra.`
                        : `Por favor intenta con otro nombre.`}
                  </>
               )}
            </ErrorSpan>
            <ActionButtons>
               <Button onClick={handleCancel} styleType="DANGER">
                  cancel
               </Button>
               <Button type="submit" styleType="SUCCESS">
                  add
               </Button>
               {/* <button type="button" onClick={() => setIsError(!isError)}>
                  toggle
               </button> */}
            </ActionButtons>
         </Form>
      </ModalWindow>
   );
};
