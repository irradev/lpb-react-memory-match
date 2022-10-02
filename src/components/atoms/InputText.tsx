import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const InputTextStyles = styled.input`
   &:focus {
      outline: 1px;
      outline-style: dashed;
      outline-color: #ed982873;
   }
`;

export const InputText = tw(InputTextStyles)`
   block
   bg-strongBrown
   border-b
   border-primary
   text-tertiary
   py-1 px-1
   w-full
   placeholder:italic placeholder:text-tertiary placeholder:opacity-70
`;
