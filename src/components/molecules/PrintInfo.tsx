import tw from 'tailwind-styled-components';
import { useAppSelector } from '../../hooks';
import { PlayerStrikes } from './PlayerStrikes';

const CollectionName = tw.span`
   text-2xl
`;

interface PrintInfoProps {
   type: 'PLAYER' | 'COLLECTION';
}

export const PrintInfo = ({ type }: PrintInfoProps) => {
   return (
      <div className="flex justify-center items-center w-full">
         {type === 'PLAYER' && <PlayerInfo />}
         {type === 'COLLECTION' && <CollectionInfo />}
      </div>
   );
};

const PlayerInfo = () => {
   const { selectedPlayer } = useAppSelector((state) => state.players);

   return (
      <div className="flex justify-around items-center w-full">
         <span>{`Player: ${selectedPlayer?.name}`}</span>
         <div className="flex justify-center items-center gap-1">
            <span>Strikes: </span>
            <PlayerStrikes />
         </div>
      </div>
   );
};

const CollectionInfo = () => {
   const { selectedCollection } = useAppSelector((state) => state.cards);
   return <CollectionName>{selectedCollection?.name}</CollectionName>;
};
