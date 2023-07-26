import React from 'react';
import styled from 'styled-components';
import { PRIMARY } from '../../constants/color';

interface Props {
  children: string;
  color: string;
  background: string;
  onClick?: () => void;
  disabled?: boolean;
}
function PrimaryButton({
  children,
  color,
  background,
  onClick,
  disabled,
}: Props) {
  return (
    <S.Button
      color={color}
      background={background}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </S.Button>
  );
}

const S = {
  Button: styled.button<Props>`
    width: 100%;
    height: 40px;
    font-size: 16px;
    font-weight: bold;
    background-color: ${(props) =>
      props.disabled ? 'gray' : props.background};
    border: 1px solid ${PRIMARY};
    border-radius: 15px;
    color: ${(props) => props.color};
  `,
};
export default PrimaryButton;
