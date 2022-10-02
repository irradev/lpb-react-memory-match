import tw from 'tailwind-styled-components';
import { useAppSelector } from '../../hooks';

const Container = tw.div`
  flex flex-col
  justify-center
  items-center
  gap-2
  p-4
`;

const Img = tw.img`

`;

const Title = tw.span`
   text-xl
   text-center
   mt-1
`;
const Info = tw.div`
   font-Poppins
   text-justify
`;

const MoreInfoUrl = tw.a`
   text-left
   text-sm
   break-all
   w-full
   italic
   mt-5

`;

export const AsideInfoCard = () => {
   const { selectedCard } = useAppSelector((state) => state.cards);

   return (
      <Container>
         <Img src={selectedCard?.imageUrl} />
         <Title>{selectedCard?.name}</Title>
         <Info>{selectedCard?.info}</Info>

         {selectedCard?.moreInfoUrl && (
            <MoreInfoUrl href={selectedCard?.moreInfoUrl} target="_blank">
               {selectedCard?.moreInfoUrl}
            </MoreInfoUrl>
         )}
      </Container>
   );
};
