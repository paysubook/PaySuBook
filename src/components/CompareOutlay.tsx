import React from 'react';
import styled from 'styled-components';

interface Props {
  date: number;
  price: number;
}

function CompareOutlay({ date, price }: Props) {
  return (
    <S.LayOut>
      지난 달 {date}일에 비해 {price.toLocaleString()}원 더 소비하셨어요
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
};
export default CompareOutlay;
