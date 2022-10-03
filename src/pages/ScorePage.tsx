import { useTitlePage } from '../hooks';
import { PlayersOrganism } from '../components/organisms';

export const ScorePage = () => {
   useTitlePage('Score');

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
