import tw from 'tailwind-styled-components';
import { BackgroundChanger, CollectionsChanger, Game } from '../molecules';

const Container = tw.div`
   inline-flex
   flex-col
   justify-center
   gap-3
   w-full h-full
   max-h-full

`;

const GameFlex = tw.div`
   flex-grow
   flex
   justify-between
   items-center
   gap-3
   max-h-full
   relative
`;

const GameWindowContainer = tw.div`
   flex-grow
   flex flex-col
   justify-center items-center
   gap-3
   h-full
   w-full
   overflow-hidden
`;

export const GameOrganism = () => {
   return (
      <Container>
         <GameFlex>
            <BackgroundChanger />
            <GameWindowContainer>
               <CollectionsChanger />
               <Game />
               <CollectionsChanger />
            </GameWindowContainer>
         </GameFlex>
      </Container>
   );
};
