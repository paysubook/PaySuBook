import React from 'react';
import styled from 'styled-components';
import { GRAY } from '../../constants/color';

interface Props {
  type?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function PrimaryInput({ type, placeholder, onChange }: Props) {
  return <Input type={type} placeholder={placeholder} onChange={onChange} />;
}

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${GRAY};
  border-radius: 8px;

  &::placeholder {
    color: ${GRAY};
    font-size: 14px;
    padding: 12px 5px;
  }
`;
export default PrimaryInput;
