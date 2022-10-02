import { Outlet } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { useAppSelector } from '../../hooks';
import { ScreenTitle } from '../atoms';
import { AsideInfoCard, MainMenu } from '../molecules';

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
   $isShow: boolean;
   $hiddenDirection: 'LEFT' | 'RIGHT';
   $isFloat?: boolean;
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
   mb-4
   relative

   transition-transform duration-300 ease-in-out
   ${(props) =>
      props.$isShow
         ? `
      translate-x-0
   `
         : `
      ${
         props.$hiddenDirection === 'LEFT'
            ? '-translate-x-full'
            : 'translate-x-full'
      }
   `}

   ${(props) => props.$isFloat && 'absolute'}
   ${(props) => (props.$hiddenDirection === 'LEFT' ? 'left-0' : 'right-0')}

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
   mr-6
   
`;

export const AppTemplate = () => {
   const { isShowAsideInfo } = useAppSelector((state) => state.ui);

   return (
      <FixContainer>
         <MaxWidthContent>
            <FlexContainer>
               <TitleContainer>
                  <ScreenTitle text="--" />
               </TitleContainer>

               <BodyContainer>
                  <AsideContainer
                     $width={'xs'}
                     $margin={'ml-3'}
                     $isShow={true}
                     $hiddenDirection="LEFT"
                  >
                     <MainMenu />
                  </AsideContainer>
                  <OutletContainer>
                     <Outlet />
                  </OutletContainer>
                  <AsideContainer
                     $margin={'mr-3'}
                     $isShow={isShowAsideInfo}
                     $hiddenDirection="RIGHT"
                     $isFloat={true}
                  >
                     <AsideInfoCard />
                     <button>right</button>
                  </AsideContainer>
               </BodyContainer>
            </FlexContainer>
         </MaxWidthContent>
      </FixContainer>
   );
};
