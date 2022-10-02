import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { selectCollectionById } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { Changer, ChangerItemProps } from '../atoms';

const Container = tw.div`
   mb-4
`;

const ItemBox = tw.div`
   flex
   flex-center
   items-center
   w-full
   h-6
`;

export const CollectionsChanger = () => {
   const dispatch = useAppDispatch();
   const { collections } = useAppSelector((state) => state.cards);

   const [horizontalItems, setHorizontalItems] = useState<ChangerItemProps[]>(
      []
   );
   const [selectedItem, setSelectedItem] = useState<string | number | null>(
      null
   );

   useEffect(() => {
      console.log('useEffect collections changer');
      setHorizontalItems(
         collections.map((item) => ({
            value: item.id,
            content: (
               <ItemBox>
                  <span>{item.name}</span>
               </ItemBox>
            ),
         }))
      );
   }, []);

   useEffect(() => {
      if (horizontalItems.length > 0) {
         console.log(horizontalItems);
         setSelectedItem(horizontalItems[0].value);
      }
   }, [horizontalItems]);

   useEffect(() => {
      if (selectedItem) {
         dispatch(selectCollectionById(selectedItem.toString()));
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
