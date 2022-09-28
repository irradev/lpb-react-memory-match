import tw from 'tailwind-styled-components';

const Container = tw.span`
   text-5xl
   font-bold
   text-tertiary
   pt-2
`;

interface ScreenTitleProps {
   text: string;
}

export const ScreenTitle = ({ text }: ScreenTitleProps) => {
   return <Container>{text}</Container>;
};
