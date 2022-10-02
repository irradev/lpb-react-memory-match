import tw from 'tailwind-styled-components';
import { PlayersOrganism } from '../components/organisms';

const Container = tw.div`

   flex
   justify-center
   items-center
   w-full
   h-full
`;

export const PlayersPage = () => {
   return (
      <Container>
         <PlayersOrganism />
      </Container>
   );
};
