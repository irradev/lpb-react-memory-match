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

export const ScorePage = () => {
   useTitlePage('Score');

   return (
      <Container>
         <PlayersOrganism />
      </Container>
   );
};
