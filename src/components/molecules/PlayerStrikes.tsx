import tw from 'tailwind-styled-components';
import { useAppSelector } from '../../hooks';
import { SvgIcon } from '../atoms';

const Container = tw.div`
   inline-flex
   justify-center
   items-center
   gap-1
`;

export const PlayerStrikes = () => {
   const { strikes } = useAppSelector((state) => state.players);

   return (
      <Container>
         {[...Array(strikes.total).keys()].map((strike, index) =>
            strikes.current > index ? (
               <SvgIcon key={'bad_strike_' + index} name="close" color="RED" />
            ) : (
               <SvgIcon
                  key={'googd_strike_' + index}
                  name="shape-circle"
                  color="GREEN BOLD"
               />
            )
         )}
      </Container>
   );
};
