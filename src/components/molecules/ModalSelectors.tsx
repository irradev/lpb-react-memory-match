import tw from 'tailwind-styled-components';
import { useAppSelector } from '../../hooks';
import { Button, ButtonMenu, ModalWindow } from '../atoms';
import { CollectionsChanger } from './CollectionsChanger';
import { PlayersChanger } from './PlayersChanger';

const Parent = tw.div`
   flex flex-col
   justify-center
   gap-3
`;

const Container = tw.div`
  flex
  justify-center
  items-center
  gap-3
  w-full
`;

const SelectorsContainer = tw.div`
   flex
   flex-col
   justify-center
   gap-8
   w-full
   h-full
`;

const ContainerInfoCollection = tw.div`
   flex flex-col
   justify-center
   items-center
   w-full
   gap-2
`;

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
   return (
      <ModalWindow>
         <Parent>
            <Container>
               <SelectorsContainer>
                  <PlayersChanger />
                  <ButtonMenu text="Players" to="/players" />
               </SelectorsContainer>
               <SelectorsContainer>
                  <ContainerInfoCollection>
                     <Img src={selectedCollection?.backgroundImage} />
                     <CollectionText>
                        {selectedCollection?.description}
                     </CollectionText>
                  </ContainerInfoCollection>
                  <CollectionsChanger />
                  {/* <ButtonMenu text="Create collection" to="/settings" /> */}
               </SelectorsContainer>
            </Container>
            <Button onClick={closeModal} styleType="SUCCESS">
               start
            </Button>
         </Parent>
      </ModalWindow>
   );
};
