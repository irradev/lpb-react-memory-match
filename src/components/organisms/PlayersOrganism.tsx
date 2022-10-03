import { useLocation } from 'react-router-dom';
import { PlayerList, AddPlayerButton } from '../molecules';

export const PlayersOrganism = () => {
   const location = useLocation();

   return (
      <div
         className={`
            flex
            flex-col
            items-start
            justify-center
            w-full
            max-h-full
            max-w-full
            relative
            overflow-auto
      `}
      >
         <div
            className={`
               flex-grow
               w-full
               overflow-auto
         `}
         >
            <PlayerList />
         </div>
         {location.pathname === '/players' && (
            <div
               className={`
                  flex-shrink-0
                  flex
                  justify-center
                  items-center
                  p-4
                  w-full
            `}
            >
               <AddPlayerButton />
            </div>
         )}
      </div>
   );
};
