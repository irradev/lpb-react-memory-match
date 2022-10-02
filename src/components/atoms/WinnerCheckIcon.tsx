import { CSSProperties, useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

import { SvgIcon } from './SvgIcon';

// transition-opacity delay-1000 ease
const Container = tw.div<{ $isWinner: boolean }>`
   opacity-0
   ${(props) => (props.$isWinner ? 'animate-appear' : '')}
   bg-white
   rounded-full
   shadow-lg
`;

interface WinnerCheckIconProps {
   isWinner: boolean;
   styles?: CSSProperties;
}

export const WinnerCheckIcon = ({ isWinner, styles }: WinnerCheckIconProps) => {
   const [winner, setWinner] = useState(false);

   useEffect(() => {
      if (isWinner) {
         setTimeout(() => {
            setWinner(true);
         }, 600);
      }
   }, [isWinner]);

   return (
      <Container $isWinner={winner} style={styles ? { ...styles } : {}}>
         <SvgIcon name="check-circle" color="GREEN" />
      </Container>
   );
};
