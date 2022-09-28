import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { Changer, ChangerItemProps } from '../atoms';

const ItemBox = tw.div`
   flex
   flex-center items-center
   w-12 h-22
   p-2
   overflow-hidden
   rounded-lg
   shadow-md
   bg-stone-700
`;

export const BackgroundChanger = () => {
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

   const [verticalItems, setVerticalItems] = useState<ChangerItemProps[]>([]);
   const [selectedItem, setSelectedItem] = useState<string | number>(
      items[0].value
   );

   useEffect(() => {
      console.log('useEffect background changer');
      setVerticalItems(
         items.map((item) => ({
            value: item.value,
            content: <ItemBox>{item.content}</ItemBox>,
         }))
      );
   }, []);

   useEffect(() => {
      console.log('useEffect selected vertical item', selectedItem);
   }, [selectedItem]);

   return (
      <Changer
         direction="vertical"
         items={verticalItems}
         onSelect={setSelectedItem}
      />
   );
};
