import { CSSProperties, useEffect, useState } from 'react';

import { SvgIcon } from './SvgIcon';

// transition-opacity delay-1000 ease

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
      <div
         style={styles ? { ...styles } : {}}
         className={`
            opacity-0
            ${isWinner ? 'animate-appear' : ''}
            bg-white
            rounded-full
            shadow-lg
         `}
      >
         <SvgIcon name="check-circle" color="GREEN" />
      </div>
   );
};
