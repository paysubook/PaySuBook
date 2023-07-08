import React from 'react';
import styled from 'styled-components';
import { PRIMARY } from '../constants/color';
interface Props {
  selected: string;
  children: string;
  width: string;
}
function Chip({ selected, children, width }: Props) {
  return (
    <S.BasicChip width={width} selected={selected}>
      {children}
    </S.BasicChip>
  );
}

const S = {
  BasicChip: styled.div<{ selected: string; width: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width};
    height: 32px;
    font-size: 10px;
    font-weight: bold;
    border-radius: 35%;
    text-align: center;
    background-color: ${(props) => (props.selected ? PRIMARY : '#F7F8FA')};
    color: ${(props) => (props.selected ? 'white' : '')};
  `,
};
export default Chip;
