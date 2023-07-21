import React from 'react';
import styled from 'styled-components';
import { PRIMARY } from '../../constants/color';

interface Props {
  children: string;
  color: string;
  background: string;
  onClick?: () => void;
}
function PrimaryButton({ children, color, background, onClick }: Props) {
  return (
    <S.Button color={color} background={background} onClick={onClick}>
      {children}
    </S.Button>
  );
}

const S = {
  Button: styled.button<Pick<Props, 'color'> & { background?: string }>`
    width: 100%;
    height: 40px;
    font-size: 16px;
    font-weight: bold;
    background-color: ${(props) => props.background};
    border: 1px solid ${PRIMARY};
    border-radius: 15px;
    color: ${(props) => props.color};
  `,
};
export default PrimaryButton;
