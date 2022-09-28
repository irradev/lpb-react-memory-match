import { Outlet } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { ScreenTitle } from '../atoms';
import { MainMenu } from '../molecules';

const FixContainer = tw.div`
   font-JosefinSans
  text-tertiary
  bg-strongBrown
   fixed
   top-0 lef-0
   w-full h-full
`;

const MaxWidthContent = tw.div`
   flex
   justify-center
   items-center
   m-auto
   h-full
   max-w-screen-2xl
   relative
`;

const FlexContainer = tw.div`
   flex
   flex-col
   gap-5
   w-full
   h-full
   relative
`;

const TitleContainer = tw.div`
   flex-shrink-0
   flex
   justify-center
   items-center
   w-full
   mt-5
`;

const BodyContainer = tw.div`
   flex-grow
   flex
   justify-between
   items-center
   gap-5
   h-2/4
   relative
`;

interface AsideContainerStyleProps {
   $width?: string;
   $margin: string;
}
const AsideContainer = tw.div<AsideContainerStyleProps>`
   flex-shrink-0
   flex flex-col
   items-center
   bg-secondary
   border
   border-tertiary
   max-h-full
   overflow-auto
   ${(p) => p.$margin && p.$margin}
   ${(p) => (p.$width ? 'w-56' : `w-full max-w-sm`)}
   rounded-md
`;

const OutletContainer = tw.div`
   flex-grow   
   flex
   justify-center
   items-center
   h-full
   max-h-full
   overflow-hidden
   relative
   
`;

export const AppTemplate = () => {
   return (
      <FixContainer>
         <MaxWidthContent>
            <FlexContainer>
               <TitleContainer>
                  <ScreenTitle text="Player's Game" />
               </TitleContainer>

               <BodyContainer>
                  <AsideContainer $width={'xs'} $margin={'ml-3'}>
                     <MainMenu />
                  </AsideContainer>
                  <OutletContainer>
                     <Outlet />
                  </OutletContainer>
                  <AsideContainer $margin={'mr-3'}>aside</AsideContainer>
               </BodyContainer>
            </FlexContainer>
         </MaxWidthContent>
      </FixContainer>
   );
};
