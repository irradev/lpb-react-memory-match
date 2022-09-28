import tw from 'tailwind-styled-components';
import { GameWindow } from '../components/atoms';
// import { GameOrganism } from '../components/organisms';

const FixContainer = tw.div`
   fixed
   top-0 lef-0
   w-full h-full
`;

const MaxWidthContainer = tw.div`
   max-w-screen-2xl
   bg-slate-900
   m-auto
   flex
   justify-center
   items-center
   p-4
   h-full
   relative
`;

const FlexContainer = tw.div`
   flex
   flex-col
   gap-5
   bg-yellow-400
   w-full
   h-full
   relative
`;

const TitleContainer = tw.div`
   flex-shrink-0
   h-20
   bg-red-200
`;

const BodyContainer = tw.div`
   flex-grow
   bg-blue-400
   flex
   justify-between
   items-center
   gap-5
   h-2/4
   
   border-4
   border-red-500
   p-4
   relative
   
`;

const AsideContainer = tw.div`
   flex-shrink
   flex flex-col
   items-start
   bg-orange-300
   w-72

   max-h-full
   overflow-auto
`;

const OutletContainer = tw.div`
   flex-grow   
bg-green-300
flex
justify-center
items-center
   p-4
   h-full
   max-h-full
   relative
   overflow-hidden
`;

export const HomePage = () => {
   return (
      // <Container>
      //    <GameOrganism />
      // </Container>
      <FixContainer>
         <MaxWidthContainer>
            <FlexContainer>
               <TitleContainer>Title</TitleContainer>
               <BodyContainer>
                  <AsideContainer>
                     <AsideOne />
                     menu <br /> menu
                  </AsideContainer>
                  <OutletContainer>
                     <Outlet />
                  </OutletContainer>
                  <AsideContainer>
                     aside
                     <br />
                     otra cosa
                  </AsideContainer>
               </BodyContainer>
            </FlexContainer>
         </MaxWidthContainer>
      </FixContainer>
   );
};

const AsideOne = () => {
   const array = Array(50).fill(1);
   return (
      <>
         INICIO
         {array.map((a, index) => (
            <div key={'list_desktop_' + index}>
               {index} - hola
               <br />
            </div>
         ))}
         FIN
      </>
   );
};

const GameOrganism = tw.div`
   inline-flex
   flex-col
   justify-center
   
   gap-3
   w-full
   h-full
   max-h-full
   bg-cyan-300
   p-4
`;

const GameFlex = tw.div`
   flex-grow
   flex
   justify-between
   items-center
   gap-3
   p-4
   bg-purple-700
   max-h-full
   relative
`;

const GameWindowContainer = tw.div`
   flex-grow
   flex
   flex-col
   justify-center
   items-center
   gap-3
   bg-stone-800
   border-4
   border-primary
   p-4
   h-full
   w-full
   overflow-hidden

`;

const ContentGameWindow = tw.div`
   border
   border-pink-400
   p-2
   w-full
   max-h-full
   overflow-hidden
`;

const CardsContainer = tw.div`
   bg-white
`;

const LeftChanger = tw.div`
   w-10
   h-20
   max-h-full
   bg-red-400
`;

const BottomChanger = tw.div`
   flex-shrink-0
   bg-pink-500
   h-8
   max-h-full
`;

const Outlet = () => {
   return (
      <GameOrganism>
         <GameFlex>
            <LeftChanger>L</LeftChanger>
            <GameWindowContainer>
               <GameWindow>
                  <CardsContainer>
                     <AsideOne />
                     hola
                  </CardsContainer>
               </GameWindow>

               <BottomChanger>botom changer</BottomChanger>
            </GameWindowContainer>
         </GameFlex>
      </GameOrganism>
   );
};
