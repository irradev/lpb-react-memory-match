import { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

import svgChevronDown from '../../assets/svg/chevron_down.svg';

type Position = 'TOP' | 'DOWN' | 'LEFT' | 'RIGHT';

interface ChangerStyleProps {
   $direction: 'horizontal' | 'vertical';
}

const Container = styled.div<ChangerStyleProps>`
   display: flex;
   justify-content: center;
   align-items: center;
   ${(props) =>
      props.$direction === 'horizontal'
         ? 'flex-direction: row;'
         : 'flex-direction: column;'}
`;

interface ButtonProps {
   $position: Position;
}

const Button = styled.button<ButtonProps>`
   ${(props) => props.$position === 'TOP' && 'transform: rotate(180deg);'}
   ${(props) => props.$position === 'LEFT' && 'transform: rotate(90deg);'}
   ${(props) => props.$position === 'RIGHT' && 'transform: rotate(-90deg);'}
`;

//filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(203deg) brightness(102%) contrast(102%);
const Img = styled.img`
   filter: invert(95%) sepia(10%) saturate(1724%) hue-rotate(343deg)
      brightness(106%) contrast(96%);
   width: 30px;
`;

const ItemBoxContainer = styled.div`
   flex-grow: 1;
   display: flex;
   justify-content: center;
   align-items: center;
`;
const ItemBox = tw.div<{ $selected: boolean }>`
   ${(props) => (props.$selected ? 'block' : 'hidden')}
`;

export type ChangerItemProps = {
   value: number | string;
   content: ReactNode | string | number;
};

interface ChangerProps {
   direction: 'horizontal' | 'vertical';
   items: ChangerItemProps[];
   onSelect: (value: number | string) => void;
}

export const Changer = ({ direction, items, onSelect }: ChangerProps) => {
   const [selected, setSelected] = useState<number>(0);

   const handleSelect = (position: Position) => {
      if (position === 'LEFT' || position === 'TOP') {
         if (selected === 0) {
            setSelected(items.length - 1);
         } else {
            setSelected(selected - 1);
         }
         // setSelected(selected - 1 || items.length - 1);
      } else if (position === 'RIGHT' || position === 'DOWN') {
         if (selected === items.length - 1) {
            setSelected(0);
         } else {
            setSelected(selected + 1);
         }
      }
   };

   useEffect(() => {
      if (items.length > 0) {
         onSelect(items[selected].value);
      }
   }, [selected]);

   return (
      <Container $direction={direction}>
         <Button
            onClick={() => handleSelect('LEFT')}
            $position={direction === 'horizontal' ? 'LEFT' : 'TOP'}
            className={`
               p-1
               border
               border-primary
               rounded-md
            `}
         >
            <Img src={svgChevronDown} />
         </Button>
         <ItemBoxContainer>
            {items.map((item, index) => (
               <ItemBox
                  key={`item_${direction}_${index}`}
                  $selected={index === selected}
               >
                  {item.content}
               </ItemBox>
            ))}
         </ItemBoxContainer>
         <Button
            onClick={() => handleSelect('RIGHT')}
            $position={direction === 'horizontal' ? 'RIGHT' : 'DOWN'}
            className={`
               p-1
               border
               border-primary
               rounded-md
            `}
         >
            <Img src={svgChevronDown} />
         </Button>
      </Container>
   );
};
