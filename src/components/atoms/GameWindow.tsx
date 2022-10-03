import { ReactNode } from 'react';
import tw from 'tailwind-styled-components';

const Content = tw.div`
   max-h-full
   overflow-auto
`;

interface GameWindowProps {
   children: ReactNode;
}

export const GameWindow = ({ children }: GameWindowProps) => {
   return (
      <div
         className={`
            bg-window
            rounded-md
            border
            border-primary
            p-2
            w-full
            max-h-full
            overflow-hidden
      `}
      >
         <Content>{children}</Content>
      </div>
   );
};
