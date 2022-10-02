import tw from 'tailwind-styled-components';
import {
   BackgroundChanger,
   CollectionsChanger,
   Game,
   PrintInfo,
} from '../molecules';

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
// Todo FIX ERROR uncaught RandomGameCards, on change page before load all images.

export const GameOrganism = () => {
   return (
      <Container>
         <GameFlex>
            {/* <BackgroundChanger /> */}
            <GameWindowContainer>
               {/* <CollectionsChanger /> */}
               <PrintInfo type="PLAYER" />
               <Game />
               {/* <CollectionsChanger /> */}

               <PrintInfo type="COLLECTION" />
            </GameWindowContainer>
         </GameFlex>
      </Container>
   );
};
