import React from 'react';
import styled from 'styled-components';
import { PRIMARY } from '../../constants/color';

interface Props {
  date: number;
  price: number;
}

function CompareOutlay({ date, price }: Props) {
  return (
    <S.LayOut>
      지난 달 {date}일에 비해
      <S.PriceText>{price.toLocaleString()}</S.PriceText>원 더 소비하셨어요
    </S.LayOut>
  );
}

const S = {
  LayOut: styled.div`
    height: 56px;
    display: flex;
    font-size: 13px;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  `,
  PriceText: styled.span`
    margin-left: 5px;
    color: ${PRIMARY};
  `,
};
export default CompareOutlay;
