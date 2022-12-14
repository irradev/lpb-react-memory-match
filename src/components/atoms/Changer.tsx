import { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

import svgChevronDown from '../../assets/svg/chevron_down.svg';

type Position = 'TOP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Direction = 'horizontal' | 'vertical';

interface ChangerStyleProps {
   $direction: Direction;
}

const Container = styled.div<ChangerStyleProps>`
   display: flex;
   justify-content: center;
   align-items: center;
   ${(props) =>
      props.$direction === 'horizontal'
         ? 'flex-direction: row; gap: 12px;'
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
   width: 24px;
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
   direction: Direction;
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
      <>
         {direction === 'horizontal' && (
            <div className="flex flex-col justify-center items-center gap-4">
               <ItemContent
                  items={items}
                  direction={direction}
                  selected={selected}
               />

               <Container $direction={direction}>
                  <ButtonContent
                     onClick={() => handleSelect('LEFT')}
                     position="LEFT"
                  />
                  <ButtonContent
                     onClick={() => handleSelect('RIGHT')}
                     position="RIGHT"
                  />
               </Container>
            </div>
         )}
         {direction === 'vertical' && (
            <Container $direction={direction}>
               <ButtonContent
                  onClick={() => handleSelect('LEFT')}
                  position="TOP"
               />
               <ItemContent
                  items={items}
                  direction={direction}
                  selected={selected}
               />
               <ButtonContent
                  onClick={() => handleSelect('RIGHT')}
                  position="DOWN"
               />
            </Container>
         )}
      </>
   );
};

interface ItemContentProps {
   items: ChangerItemProps[];
   direction: Direction;
   selected: number;
}

const ItemContent = ({ items, direction, selected }: ItemContentProps) => {
   return (
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
   );
};

interface ButtonContentPros {
   onClick: () => void;
   position: Position;
}
const ButtonContent = ({ onClick, position }: ButtonContentPros) => {
   return (
      <Button
         onClick={onClick}
         $position={position}
         className={`
               p-1
               border
               border-primary
               rounded-md
            `}
      >
         <Img src={svgChevronDown} />
      </Button>
   );
};
