import tw from 'tailwind-styled-components';
import { useAppSelector } from '../../hooks';
import { Button, ButtonMenu, ModalWindow } from '../atoms';
import { CollectionsChanger } from './CollectionsChanger';
import { PlayersChanger } from './PlayersChanger';

const Img = tw.img``;

const CollectionText = tw.span`
   text-md
   text-center
`;

interface ModalSelectorsProps {
   closeModal: () => void;
}

export const ModalSelectors = ({ closeModal }: ModalSelectorsProps) => {
   const { selectedCollection } = useAppSelector((state) => state.cards);

   const selectorsContainerClassNames = `
      flex
      flex-col
      justify-center
      gap-8
      w-full
      h-full
   `;
   return (
      <ModalWindow>
         <div className="flex flex-col justify-center gap-3">
            <div
               className={`
                  flex
                  justify-center
                  items-center
                  gap-3
                  w-full
            `}
            >
               <div className={selectorsContainerClassNames}>
                  <PlayersChanger />
                  <ButtonMenu text="Players" to="/players" />
               </div>
               <div className={selectorsContainerClassNames}>
                  <div
                     className={`
                        flex flex-col
                        justify-center
                        items-center
                        w-full
                        gap-2
                  `}
                  >
                     <Img src={selectedCollection?.backgroundImage} />
                     <CollectionText>
                        {selectedCollection?.description}
                     </CollectionText>
                  </div>
                  <CollectionsChanger />
                  {/* <ButtonMenu text="Create collection" to="/settings" /> */}
               </div>
            </div>
            <Button onClick={closeModal} styleType="SUCCESS">
               start
            </Button>
         </div>
      </ModalWindow>
   );
};
