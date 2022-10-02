import tw from 'tailwind-styled-components';
import { SvgIcon } from './SvgIcon';

interface ButtonStyleProps {
   $direction: 'LEFT' | 'RIGHT';
   $isActive: boolean;
}
const Button = tw.button<ButtonStyleProps>`
   flex
   justify-center
   items-center

   ${(props) => props.$direction === 'LEFT' && 'transform: -rotate-90'}
   ${(props) => props.$direction === 'RIGHT' && 'transform: rotate-90'}
   
   transition-transform duration-500 ease-in-out
   
   ${(props) =>
      props.$isActive &&
      `
      ${props.$direction === 'LEFT' && 'transform: rotate-90'}
      ${props.$direction === 'RIGHT' && 'transform: -rotate-90'}
   `}

   bg-primary
   w-10 h-8
   rounded-full
   
`;

interface ToggleAsideButtonProps {
   onClick: () => void;
   direction: 'LEFT' | 'RIGHT';
   isActive: boolean;
}

export const ToggleAsideButton = ({
   onClick,
   direction,
   isActive,
}: ToggleAsideButtonProps) => {
   return (
      <Button onClick={onClick} $direction={direction} $isActive={isActive}>
         <SvgIcon name="chevron-down" color="TERTIARY" />
      </Button>
   );
};
