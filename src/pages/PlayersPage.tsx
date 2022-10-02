import { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { useTitlePage } from '../hooks';
import { PlayersOrganism } from '../components/organisms';

const Container = tw.div`

   flex
   justify-center
   items-center
   w-full
   h-full
`;

export const PlayersPage = () => {
   useTitlePage('Players');

   return (
      <Container>
         <PlayersOrganism />
      </Container>
   );
};
