import React from 'react';
import styled from 'styled-components';
import { LIGHT_GRAY, PRIMARY } from '../../constants/color';
interface Props {
  selected: boolean;
  children: string;
  width: string;
  onClick?: () => void;
}
function Chip({ selected, children, width, onClick }: Props) {
  return (
    <S.BasicChip onClick={onClick} width={width} selected={selected}>
      {children}
    </S.BasicChip>
  );
}

const S = {
  BasicChip: styled.div<{ selected: boolean; width: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width};
    height: 27px;
    font-size: 10px;
    font-weight: bold;
    border-radius: 20px;
    text-align: center;
    background-color: ${(props) => (props.selected ? PRIMARY : LIGHT_GRAY)};
    color: ${(props) => (props.selected ? 'white' : '')};
  `,
};
export default Chip;