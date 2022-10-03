import tw from 'tailwind-styled-components';
import { useAppSelector } from '../../hooks';
import { SvgIcon } from '../atoms';

export const PlayerStrikes = () => {
   const { strikes } = useAppSelector((state) => state.players);

   return (
      <div className="inline-flex justify-center items-center gap-1">
         {[...Array(strikes.total).keys()].map((strike, index) =>
            strikes.current > index ? (
               <SvgIcon key={'bad_strike_' + index} name="close" color="RED" />
            ) : (
               <SvgIcon
                  key={'good_strike_' + index}
                  name="shape-circle"
                  color="GREEN BOLD"
               />
            )
         )}
      </div>
   );
};
