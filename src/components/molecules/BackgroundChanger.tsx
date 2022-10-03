import { useEffect, useState } from 'react';
import { Changer, ChangerItemProps } from '../atoms';

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
      setVerticalItems(
         items.map((item) => ({
            value: item.value,
            content: (
               <div
                  className={`
                     flex
                     flex-center items-center
                     w-12 h-22
                     p-2
                     overflow-hidden
                     rounded-lg
                     shadow-md
                     bg-stone-700
            `}
               >
                  {item.content}
               </div>
            ),
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
