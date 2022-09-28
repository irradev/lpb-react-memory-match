import { CSSProperties, useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

import svgCheckCircle from '../../assets/svg/check_circle.svg';

// transition-opacity delay-1000 ease
const Container = tw.div<{ $isWinner: boolean }>`
   opacity-0
   ${(props) => (props.$isWinner ? 'animate-appear' : '')}
   bg-white
   rounded-full
   shadow-lg
`;
const Img = styled.img`
   filter: invert(40%) sepia(63%) saturate(3842%) hue-rotate(135deg)
      brightness(105%) contrast(89%);
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
         <Img src={svgCheckCircle} />
      </Container>
   );
};
