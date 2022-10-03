import tw from 'tailwind-styled-components';
import { SvgIcon } from './SvgIcon';

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
      <button
         onClick={onClick}
         className={`
            flex
            justify-center
            items-center

            ${direction === 'LEFT' && 'transform: -rotate-90'}
            ${direction === 'RIGHT' && 'transform: rotate-90'}
            
            transition-transform duration-500 ease-in-out
            
            ${
               isActive &&
               `
               ${direction === 'LEFT' && 'transform: rotate-90'}
               ${direction === 'RIGHT' && 'transform: -rotate-90'}
            `
            }

            bg-primary
            w-10 h-8
            rounded-full
         `}
      >
         <SvgIcon name="chevron-down" color="TERTIARY" />
      </button>
   );
};
