import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { showAsideInfo } from '../../store';
import { ScreenTitle, ToggleAsideButton } from '../atoms';
import { AsideInfoCard, MainMenu } from '../molecules';

export const AppTemplate = () => {
   const dispatch = useAppDispatch();
   const { isShowAsideInfo, pageTitle } = useAppSelector((state) => state.ui);
   const { selectedCard } = useAppSelector((state) => state.cards);

   let isSelectedCard = selectedCard ? 'selected' : 'non-selected';
   const asideLeft = `
      ml-3
      translate-x-0
      left-0
      w-56
   `;

   const asideRight = `
      mr-3
      w-full max-w-sm
      ${isShowAsideInfo ? 'translate-x-0' : 'translate-x-full'}
      absolute
      right-0
      ${isSelectedCard === 'selected' && 'opacity-100'}
      ${isSelectedCard === 'non-selected' && 'opacity-0'}
   `;

   const asideContainerClassName = `
      flex-shrink-0
      flex flex-col
      items-center
      bg-secondary
      border
      border-tertiary
      max-h-full
      
      rounded-md
      mb-4
      relative

      transition-all duration-500 ease-in-out
`;

   return (
      <div
         className={`
            font-JosefinSans
          text-tertiary
          bg-strongBrown
            fixed
            top-0 lef-0
            w-full h-full
      `}
      >
         <div
            className={`
               flex
               justify-center
               items-center
               m-auto
               h-full
               max-w-screen-2xl
               relative
         `}
         >
            <div
               className={`
               flex
               flex-col
               gap-5
               w-full
               h-full
               relative
            `}
            >
               <div
                  className={`
                  flex-shrink-0
                  flex
                  justify-center
                  items-center
                  w-full
                  mt-5
               `}
               >
                  <ScreenTitle text={pageTitle} />
               </div>

               <div
                  className={`
                  flex-grow
                  flex
                  justify-between
                  items-center
                  gap-5
                  h-2/4
                  relative
               `}
               >
                  <div className={`${asideContainerClassName} ${asideLeft}`}>
                     <div className="w-full h-full overflow-auto">
                        <MainMenu />
                     </div>
                  </div>
                  <div
                     className={`
                        flex-grow   
                        flex
                        justify-center
                        items-center
                        h-full
                        max-h-full
                        overflow-hidden
                        relative
                        mr-6
                  `}
                  >
                     <Outlet />
                  </div>
                  <div className={`${asideContainerClassName} ${asideRight}`}>
                     <div className="w-full h-full overflow-auto">
                        <AsideInfoCard />
                     </div>
                     <div
                        className={`
                           flex
                           justify-start items-center   
                           absolute
                           top-0
                           -left-6
                           h-full
                     `}
                     >
                        <ToggleAsideButton
                           isActive={isShowAsideInfo}
                           direction="RIGHT"
                           onClick={() =>
                              dispatch(showAsideInfo(!isShowAsideInfo))
                           }
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
