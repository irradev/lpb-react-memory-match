import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { useAppSelector } from '../../hooks';

const ImageContainer = styled.div<{ isActive: boolean }>`
   width: 100%;
   height: 100%;
   position: relative;
   transition: all 0.7s ease-in-out;
   transform-style: preserve-3d;
   backface-visibility: visible;
   transform: ${(props) =>
      props.isActive ? 'rotateY(0)' : 'rotateY(-180deg)'};
`;
const Img = tw.img<{ $isActive: boolean }>`
   ${(props) => (props.$isActive ? 'opacity-100' : 'opacity-0')}
   transition-opacity delay-300 ease-in-out
   w-full
   h-full
   object-cover
   rounded-lg
   absolute
   t-0
   l-0
   
`;

interface GameCardProps {
   imageUrl: string;
   isActive: boolean;
}
export const GameCard = ({ imageUrl, isActive }: GameCardProps) => {
   const { selectedCollection } = useAppSelector((state) => state.cards);

   return (
      <div
         className={`
           w-16 sm:w-24 md:w-36
           h-28 sm:h-36 md:h-48

            rounded-lg
            relative
            cursor-pointer

            hover:border border-tertiary
         `}
      >
         <ImageContainer isActive={isActive}>
            <Img src={imageUrl} $isActive={isActive} />
            <Img
               src={selectedCollection?.backgroundImage}
               $isActive={!isActive}
            />
         </ImageContainer>
      </div>
   );
};
