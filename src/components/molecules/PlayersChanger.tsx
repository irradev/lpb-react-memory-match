import { useEffect, useState } from 'react';
import { selectPlayerById } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import tw from 'tailwind-styled-components';
import { Changer, ChangerItemProps } from '../atoms';

const Container = tw.div`
   mb-4
   w-full
`;

const ItemBox = tw.div`
   flex
   flex-center
   items-center
   w-full
   h-6
`;

export const PlayersChanger = () => {
   const dispatch = useAppDispatch();
   const { players } = useAppSelector((state) => state.players);

   const [horizontalItems, setHorizontalItems] = useState<ChangerItemProps[]>(
      []
   );
   const [selectedItem, setSelectedItem] = useState<string | number | null>(
      null
   );

   useEffect(() => {
      console.log('useEffect collections changer');
      setHorizontalItems(
         players.map((player) => ({
            value: player.id,
            content: <ItemBox>{player.name}</ItemBox>,
         }))
      );
   }, [players]);

   useEffect(() => {
      if (horizontalItems.length > 0) {
         setSelectedItem(horizontalItems[0].value);
      }
   }, [horizontalItems]);

   useEffect(() => {
      if (selectedItem) {
         dispatch(selectPlayerById(selectedItem.toString()));
      }
   }, [selectedItem]);

   return (
      <Container>
         <Changer
            direction="horizontal"
            items={horizontalItems}
            onSelect={setSelectedItem}
         />
      </Container>
   );
};
