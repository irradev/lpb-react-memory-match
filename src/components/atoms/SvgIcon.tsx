import styled from 'styled-components';

import svgChevronDown from '../../assets/svg/chevron_down.svg';
import svgCheckCircle from '../../assets/svg/check_circle.svg';
import svgUserAdd from '../../assets/svg/user_add.svg';
import svgTrash from '../../assets/svg/trash.svg';
import svgErase from '../../assets/svg/erase.svg';
import svgShapeCircle from '../../assets/svg/shape_circle.svg';
import svgClose from '../../assets/svg/close.svg';

type FilterColor = 'GREEN' | 'GREEN BOLD' | 'WHITE' | 'TERTIARY' | 'RED';

const Img = styled.img<{ color?: FilterColor }>`
   ${(props) =>
      props.color === 'GREEN'
         ? `
            filter: invert(40%) sepia(63%) saturate(3842%) hue-rotate(135deg)
            brightness(105%) contrast(89%);
         `
         : props.color === 'WHITE'
         ? 'filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(2deg) brightness(105%) contrast(102%);'
         : props.color === 'TERTIARY'
         ? 'filter: invert(95%) sepia(10%) saturate(1724%) hue-rotate(343deg) brightness(106%) contrast(96%);'
         : props.color === 'RED'
         ? 'filter: invert(30%) sepia(60%) saturate(2262%) hue-rotate(339deg) brightness(85%) contrast(104%);'
         : props.color === 'GREEN BOLD'
         ? 'filter: invert(42%) sepia(58%) saturate(1419%) hue-rotate(109deg) brightness(92%) contrast(83%);'
         : ''}
`;

type SvgIcons =
   | 'chevron-down'
   | 'check-circle'
   | 'user-add'
   | 'trash'
   | 'erase'
   | 'shape-circle'
   | 'close';

interface SvgIconsProps {
   name: SvgIcons;
   color?: FilterColor;
}

export const SvgIcon = ({ name, color }: SvgIconsProps) => {
   const svgIcon: { [key: string]: string } = {
      'chevron-down': svgChevronDown,
      'check-circle': svgCheckCircle,
      'user-add': svgUserAdd,
      trash: svgTrash,
      erase: svgErase,
      'shape-circle': svgShapeCircle,
      close: svgClose,
   };
   return <Img src={svgIcon[name]} color={color} />;
};
