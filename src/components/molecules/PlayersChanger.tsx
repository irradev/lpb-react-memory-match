import { useEffect, useState } from 'react';
import { selectPlayerById } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { Changer, ChangerItemProps } from '../atoms';

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
      setHorizontalItems(
         players.map((player) => ({
            value: player.id,
            content: (
               <div
                  className={`
                     flex
                     flex-center
                     items-center
                     w-full
                     h-6
            `}
               >
                  {player.name}
               </div>
            ),
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
      <div className="mb-4 w-full">
         <Changer
            direction="horizontal"
            items={horizontalItems}
            onSelect={setSelectedItem}
         />
      </div>
   );
};
