import React from 'react';
import styled from 'styled-components';
import { PRIMARY } from '../../constants/color';

interface Props {
  selected: boolean;
  onClick?: () => void;
  icon: React.ReactNode;
  label: string;
}

function TabBar({ selected, onClick, icon, label }: Props) {
  return (
    <S.TabBarLayOut selected={selected} onClick={onClick}>
      <S.TabItem>
        {icon}
        <S.ItemName>{label}</S.ItemName>
      </S.TabItem>
    </S.TabBarLayOut>
  );
}

const S = {
  TabBarLayOut: styled.div<{ selected: boolean }>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    background-color: white;
    border-top: ${(props) =>
      props.selected ? `1px solid ${PRIMARY}` : 'none'};
    color: ${(props) => (props.selected ? PRIMARY : 'black')};
  `,
  TabItem: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    display: flex;
    font-size: 22px;
  `,
  ItemName: styled.span`
    margin-top: 5px;
    font-size: 14px;
  `,
};
export default TabBar;
