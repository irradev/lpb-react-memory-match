import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const Container = tw.button`
   flex
   justify-center
   items-center
   w-full
   bg-primary
   text-strongBrown
   py-4
   rounded-sm
   shadow-md
`;

interface ButtonMenuProps {
   text: string;
   to?: string;
}

export const ButtonMenu = ({ text, to }: ButtonMenuProps) => {
   return to ? (
      <Link to={to}>
         <Container> {text}</Container>
      </Link>
   ) : (
      <Container>{text}</Container>
   );
};
