import React from 'react';
import styled from 'styled-components';

interface Props {
  month: number;
  asset: number;
}

function AssetStatus({ month, asset }: Props) {
  return (
    <S.AssetStatus>
      <S.Month>{month}월 자산 현황</S.Month>
      <S.Asset>{asset.toLocaleString()}원</S.Asset>
    </S.AssetStatus>
  );
}

const S = {
  AssetStatus: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Month: styled.div`
    font-size: 11px;
    margin-bottom: 3px;
  `,
  Asset: styled.div`
    font-size: 15px;
    font-weight: bold;
  `,
};
export default AssetStatus;
