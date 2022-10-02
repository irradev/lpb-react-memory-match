import styled from 'styled-components';

import svgChevronDown from '../../assets/svg/chevron_down.svg';
import svgCheckCircle from '../../assets/svg/check_circle.svg';
import svgUserAdd from '../../assets/svg/user_add.svg';
import svgTrash from '../../assets/svg/trash.svg';
import svgErase from '../../assets/svg/erase.svg';

type FilterColor = 'GREEN' | 'WHITE';

const Img = styled.img<{ color?: FilterColor }>`
   ${(props) =>
      props.color === 'GREEN'
         ? `
            filter: invert(40%) sepia(63%) saturate(3842%) hue-rotate(135deg)
            brightness(105%) contrast(89%);
         `
         : props.color === 'WHITE'
         ? 'filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(2deg) brightness(105%) contrast(102%);'
         : ''}
`;

type SvgIcons =
   | 'chevron-down'
   | 'check-circle'
   | 'user-add'
   | 'trash'
   | 'erase';

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
   };
   return <Img src={svgIcon[name]} color={color} />;
};
