import { ReactNode } from 'react';
import tw from 'tailwind-styled-components';

type ButtonStyleType = 'SUCCESS' | 'WARNING' | 'DANGER';
type FlexDirection = 'COL' | 'ROW';

interface ButtonContainerStyleProps {
   $styleType: ButtonStyleType;
   $flexDirection: FlexDirection;
}

const ButtonContainer = tw.button<ButtonContainerStyleProps>`
   flex
   justify-center
   gap-2
   p-2
   ${(props) =>
      props.$flexDirection === 'COL'
         ? 'flex-col items-center'
         : 'flex-row items-end'}
   ${(props) => props.$styleType === 'SUCCESS' && 'bg-green-500'}
   ${(props) => props.$styleType === 'WARNING' && 'bg-yellow-500'}
   ${(props) => props.$styleType === 'DANGER' && 'bg-red-500'}
   text-white
   text-sm
   font-semibold
   uppercase
   tracking-normal
   rounded-md

`;

interface ButtonProps {
   type?: 'button' | 'submit' | 'reset';
   styleType: ButtonStyleType;
   flexDirection?: FlexDirection;
   onClick?: () => void;
   children: ReactNode;
}

export const Button = ({
   type = 'button',
   styleType,
   flexDirection = 'ROW',
   onClick = () => null,
   children,
}: ButtonProps) => {
   return (
      <ButtonContainer
         type={type}
         $styleType={styleType}
         $flexDirection={flexDirection}
         onClick={onClick}
      >
         {children}
      </ButtonContainer>
   );
};
