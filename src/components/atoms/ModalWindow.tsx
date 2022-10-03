// import { ReactNode } from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const FullWidth = styled.div`
   width: 100vw;
`;

export const ModalWindow = tw(FullWidth)`
   flex
   justify-center
   items-center
   bg-strongBrown
   border border-tertiary
   p-4
   max-w-xs md:max-w-sm
   rounded-md
`;

// interface ModalWindowProps {
//    children: ReactNode;
// }

// export const ModalWindow = ({ children }: ModalWindowProps) => {
//    return <ModalWindowStyles>{children}</ModalWindowStyles>;
// };
