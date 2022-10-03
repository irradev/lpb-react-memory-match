import { useTitlePage } from '../hooks';
import { PlayersOrganism } from '../components/organisms';

export const PlayersPage = () => {
   useTitlePage('Players');

   return (
      <div
         className={`
            flex
            justify-center
            items-center
            w-full
            h-full
      `}
      >
         <PlayersOrganism />
      </div>
   );
};
