import React from 'react';
import styled from 'styled-components';
import { GRAY } from '../../constants/color';

interface Props {
  placeholder: string;
}

function PrimaryInput({ placeholder }: Props) {
  return <Input type='text' placeholder={placeholder} />;
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
