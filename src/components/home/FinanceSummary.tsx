import React from 'react';
import styled from 'styled-components';
import { GRAY } from '../../constants/color';

interface Props {
  profit: number;
  expenditure: number;
}

function FinanceSummary({ profit, expenditure }: Props) {
  return (
    <S.FinanceSummary>
      <S.Finance style={{ borderRight: `1px solid ${GRAY}` }}>
        <S.FinancePhrase>수입</S.FinancePhrase>
        <S.ProfitValue>{profit.toLocaleString()}원</S.ProfitValue>
      </S.Finance>
      <S.Finance>
        <S.FinancePhrase>지출</S.FinancePhrase>
        <S.ExpendituretValue>
          {expenditure.toLocaleString()}원
        </S.ExpendituretValue>
      </S.Finance>
    </S.FinanceSummary>
  );
}

const S = {
  FinanceSummary: styled.div`
    display: flex;
    padding: 15px 20px;
    border: 1px solid ${GRAY};
    align-items: center;
    justify-content: center;
  `,
  Finance: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
  `,
  ProfitValue: styled.div`
    color: #42b72a;
    font-weight: bold;
  `,
  ExpendituretValue: styled.div`
    color: red;
    font-weight: bold;
  `,
  FinancePhrase: styled.div`
    font-size: 12px;
    margin-bottom: 7px;
  `,
};

export default FinanceSummary;
