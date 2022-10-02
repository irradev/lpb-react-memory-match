import { ReactNode } from 'react';
import tw from 'tailwind-styled-components';

const FixContainer = tw.div<{ $isActive: boolean }>`
   flex
   justify-center
   items-center
   bg-transparent
   ${(props) => (props.$isActive ? 'opacity-100' : 'opacity-0')}
   ${(props) =>
      props.$isActive ? 'pointer-events-auto' : 'pointer-events-none'}
         
   transition-all duration-300 ease-out
   w-full h-full
   fixed top-0 left-0
    
`;

const BackgroundContainer = tw.div<{ $isActive: boolean }>`

   ${(props) => (props.$isActive ? 'bg-stone-700' : 'bg-transparent')}
   
   transition-all duration-300 ease-out
   
   opacity-70
   w-full h-full
   absolute top-0 left-0
   -z-10
`;

const Container = tw.div<{ $isActive: boolean }>`
      flex
      justify-center
      items-center
      w-full h-full
      z-10
      transition-all duration-500 ease-out
      relative

   ${(props) =>
      props.$isActive
         ? 'transform: translate-y-0'
         : 'transform:  -translate-y-1/4'}
         
      pointer-events-none
`;

const ChildContainer = tw.div`
      width-auto
      height-auto
      z-20
      pointer-events-auto
`;

interface ModalProps {
   isActive: boolean;
   onClose: (value: false) => void;
   children: ReactNode;
}

export const Modal = ({ isActive, children, onClose }: ModalProps) => {
   return (
      <FixContainer $isActive={isActive}>
         <BackgroundContainer
            $isActive={isActive}
            onClick={() => onClose(false)}
         />
         <Container $isActive={isActive}>
            <ChildContainer onClick={(e) => e.stopPropagation()}>
               {children}
            </ChildContainer>
         </Container>
      </FixContainer>
   );
};
