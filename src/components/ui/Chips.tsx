import React from 'react';
import styled from 'styled-components';
import { LIGHT_GRAY, PRIMARY } from '../../constants/color';
interface Props {
  isActive: boolean;
  label: string;
  onClick?: () => void;
}
function Chip({ isActive, onClick, label }: Props) {
  return (
    <S.BasicChip onClick={onClick} isActive={isActive}>
      {label}
    </S.BasicChip>
  );
}

const S = {
  BasicChip: styled.div<{ isActive: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 27px;
    font-size: 10px;
    font-weight: bold;
    border-radius: 20px;
    text-align: center;
    background-color: ${(props) => (props.isActive ? PRIMARY : LIGHT_GRAY)};
    color: ${(props) => (props.isActive ? 'white' : '')};
  `,
};
export default Chip;
