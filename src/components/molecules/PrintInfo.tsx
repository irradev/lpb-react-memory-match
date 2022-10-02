import tw from 'tailwind-styled-components';
import { useAppSelector } from '../../hooks';
import { PlayerStrikes } from './PlayerStrikes';

const Container = tw.div`
   flex
   justify-center
   items-center
   w-full
`;

const PlayerInfoContainer = tw.div`
   flex
   justify-around
   items-center
   w-full
`;

const StrikesContainer = tw.div`
   flex
   justify-center
   items-center
   gap-1
`;

const CollectionName = tw.span`
   text-2xl
`;

interface PrintInfoProps {
   type: 'PLAYER' | 'COLLECTION';
}

export const PrintInfo = ({ type }: PrintInfoProps) => {
   return (
      <Container>
         {type === 'PLAYER' && <PlayerInfo />}
         {type === 'COLLECTION' && <CollectionInfo />}
      </Container>
   );
};

const PlayerInfo = () => {
   const { selectedPlayer } = useAppSelector((state) => state.players);

   return (
      <PlayerInfoContainer>
         <span>{`Player: ${selectedPlayer?.name}`}</span>
         <StrikesContainer>
            <span>Strikes: </span>
            <PlayerStrikes />
         </StrikesContainer>
      </PlayerInfoContainer>
   );
};

const CollectionInfo = () => {
   const { selectedCollection } = useAppSelector((state) => state.cards);
   return <CollectionName>{selectedCollection?.name}</CollectionName>;
};
