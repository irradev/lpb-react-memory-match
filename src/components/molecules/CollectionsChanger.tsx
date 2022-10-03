import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { selectCollectionById } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { Changer, ChangerItemProps } from '../atoms';

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
               <div
                  className={`
                     flex
                     flex-center
                     items-center
                     w-full
                     h-6
                     text-center
               `}
               >
                  <span>{item.name}</span>
               </div>
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
      <div className="mb-4">
         <Changer
            direction="horizontal"
            items={horizontalItems}
            onSelect={setSelectedItem}
         />
      </div>
   );
};
