import {
   BackgroundChanger,
   CollectionsChanger,
   Game,
   PrintInfo,
} from '../molecules';

// Todo FIX ERROR uncaught RandomGameCards, on change page before load all images.

export const GameOrganism = () => {
   return (
      <div
         className={`
            inline-flex
            flex-col
            justify-center
            gap-3
            w-full h-full
            max-h-full
      `}
      >
         <div
            className={`
               flex-grow
               flex
               justify-between
               items-center
               gap-3
               max-h-full
               relative
         `}
         >
            {/* <BackgroundChanger /> */}
            <div
               className={`
                  flex-grow
                  flex flex-col
                  justify-center items-center
                  gap-3
                  h-full
                  w-full
                  overflow-hidden
            `}
            >
               {/* <CollectionsChanger /> */}
               <PrintInfo type="PLAYER" />
               <Game />
               {/* <CollectionsChanger /> */}

               <PrintInfo type="COLLECTION" />
            </div>
         </div>
      </div>
   );
};
