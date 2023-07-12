import React from 'react';
import styled from 'styled-components';

interface Props {
  onClick?: () => void;
  icons: { icon: string; label: string }[];
}

function CategoryIcon({ icons, onClick }: Props) {
  return (
    <S.CategoryIcon onClick={onClick}>
      {icons.map((item, index) => (
        <S.Item key={index}>
          <S.Icon src={item.icon} alt='icon'></S.Icon>
          <S.IconLabel>{item.label}</S.IconLabel>
        </S.Item>
      ))}
    </S.CategoryIcon>
  );
}

const S = {
  CategoryIcon: styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  `,
  Icon: styled.img`
    width: 30px;
    height: 30px;
  `,
  Item: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 32px;
    padding: 20px 24px 0px 24px;
  `,
  IconLabel: styled.div`
    font-size: 13px;
    margin-top: 5px;
    white-space: nowrap;
  `,
};

export default CategoryIcon;
