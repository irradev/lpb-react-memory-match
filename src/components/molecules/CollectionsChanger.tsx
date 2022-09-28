import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
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
   const items = [
      {
         value: 'bg-name-1',
         content: <>bg name 1</>,
      },
      {
         value: 'bg-name-2',
         content: <>bg name 2</>,
      },
      {
         value: 'bg-name-3',
         content: <>bg name 3</>,
      },
   ];

   const [horizontalItems, setHorizontalItems] = useState<ChangerItemProps[]>(
      []
   );
   const [selectedItem, setSelectedItem] = useState<string | number>(
      items[0].value
   );

   useEffect(() => {
      console.log('useEffect collections changer');
      setHorizontalItems(
         items.map((item) => ({
            value: item.value,
            content: <ItemBox>{item.content}</ItemBox>,
         }))
      );
   }, []);

   useEffect(() => {
      console.log('useEffect selected horizontal item', selectedItem);
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
