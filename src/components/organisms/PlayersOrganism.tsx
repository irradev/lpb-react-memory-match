import { useLocation } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { PlayerList, AddPlayerButton } from '../molecules';

const Container = tw.div`
   flex
   flex-col
   items-start
   justify-center
   w-full
   max-h-full
   max-w-full
   relative
   overflow-auto
`;

const ContainerPlayerList = tw.div`
   flex-grow
   w-full
   overflow-auto
`;

const ContainerPlayerButtons = tw.div`
   flex-shrink-0
   flex
   justify-center
   items-center
   p-4
   w-full
`;

export const PlayersOrganism = () => {
   const location = useLocation();

   return (
      <Container>
         <ContainerPlayerList>
            <PlayerList />
         </ContainerPlayerList>
         {location.pathname === '/players' && (
            <ContainerPlayerButtons>
               <AddPlayerButton />
            </ContainerPlayerButtons>
         )}
      </Container>
   );
};
