import React from 'react';
import styled from 'styled-components';
import { PRIMARY } from '../../constants/color';

interface Props {
  children: any;
  selected: boolean;
}

function TabBar({ children, selected }: Props) {
  return <S.TabBarLayOut selected={selected}>{children}</S.TabBarLayOut>;
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
};
export default TabBar;
