import styled from 'styled-components';
import tw from 'tailwind-styled-components';

interface GameCardStyleProps {
   $width: string;
   $height: string;
}

const Container = tw.div<GameCardStyleProps>`
   ${(props) => `
     ${props.$width} ${props.$height} 
   `}

   rounded-lg
   relative
   cursor-pointer

   hover:border border-tertiary
`;

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
   const backBackgroundCardImage =
      'https://media.timeout.com/images/105798187/750/562/image.jpg';

   const cardSize = {
      width: 'w-36',
      height: 'h-48',
   };
   return (
      <Container $width={cardSize.width} $height={cardSize.height}>
         <ImageContainer isActive={isActive}>
            <Img src={imageUrl} $isActive={isActive} />
            <Img src={backBackgroundCardImage} $isActive={!isActive} />
         </ImageContainer>
      </Container>
   );
};
