import { ChangeEvent } from 'react';
import styled from 'styled-components';

//Todo: this is a bad implementation, work on it

const InputTextStyles = styled.input`
   &:focus {
      outline: 1px;
      outline-style: dashed;
      outline-color: #ed982873;
   }
`;

interface InputTextProps {
   ref: any;
   autoComplete: string;
   type: string;
   name: string;
   value: string;
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
   placeholder: string;
}

export const InputText = ({
   ref,
   autoComplete,
   type,
   name,
   value,
   onChange,
   placeholder,
}: InputTextProps) => {
   return (
      <InputTextStyles
         ref={ref}
         autoComplete={autoComplete}
         type={type}
         name={name}
         value={value}
         onChange={onChange}
         placeholder={placeholder}
         className={`
            block
            bg-strongBrown
            border-b
            border-primary
            text-tertiary
            py-1 px-1
            w-full
            placeholder:italic placeholder:text-tertiary placeholder:opacity-70
      `}
      />
   );
};
