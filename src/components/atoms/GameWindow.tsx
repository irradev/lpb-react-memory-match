import { ReactNode } from 'react';
import tw from 'tailwind-styled-components';

const Container = tw.div`
   bg-window
   rounded-md
   border
   border-primary
   p-2
   w-full
   max-h-full
   overflow-hidden
`;

const Content = tw.div`
   max-h-full
   overflow-auto
`;

interface GameWindowProps {
   children: ReactNode;
}

export const GameWindow = ({ children }: GameWindowProps) => {
   return (
      <Container>
         <Content>{children}</Content>
      </Container>
   );
};
