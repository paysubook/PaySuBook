import React from 'react';
import styled from 'styled-components';
import { PRIMARY } from '../../constants/color';

interface Props {
  icon: React.ReactNode;
  price: number;
}

function CostSummary({ icon, price }: Props) {
  return (
    <S.CostSummary>
      <S.Icon>{icon}</S.Icon>
      <S.PriceWrapper>
        <S.Notice>이번 달 쓴 금액</S.Notice>
        <S.Price>{price.toLocaleString()}원</S.Price>
      </S.PriceWrapper>
      <div>
        <S.HistoryBtn>내역</S.HistoryBtn>
      </div>
    </S.CostSummary>
  );
}

const S = {
  CostSummary: styled.div`
    display: flex;
    background-color: white;
    height: 76px;
    align-items: center;
    border-radius: 13px;
    justify-content: space-around;
  `,
  Icon: styled.div`
    color: ${PRIMARY};
    font-size: 28px;
  `,
  HistoryBtn: styled.button`
    border: none;
    width: 50px;
    height: 28px;
    font-weight: bold;
    font-size: 11px;
  `,
  PriceWrapper: styled.div`
    margin-right: 90px;
  `,
  Notice: styled.div`
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 5px;
  `,
  Price: styled.span`
    font-weight: bold;
    font-size: 17px;
  `,
};

export default CostSummary;
