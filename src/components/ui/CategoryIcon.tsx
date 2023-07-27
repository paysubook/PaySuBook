import React, { useState } from 'react';
import styled from 'styled-components';
import { PRIMARY } from '../../constants/color';

interface Props {
  icons: { icon: string; label: string }[];
}

function CategoryIcon({ icons }: Props) {
  const [selectedIcon, setSelectedIcon] = useState<string>('');

  const handleIconClick = (icon: string) => {
    setSelectedIcon(icon);
  };

  return (
    <S.CategoryIcon>
      {icons.map((item, index) => (
        <S.Item
          key={index}
          isSelected={selectedIcon === item.icon}
          onClick={() => handleIconClick(item.icon)}
        >
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
  Item: styled.div<{ isSelected: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 32px;
    padding: 8px 18px;
    margin: 5px 4px 4px 4px;
    border: ${(props) => (props.isSelected ? `1px solid ${PRIMARY}` : 'none')};
    border-radius: 15px;
  `,
  IconLabel: styled.div`
    font-size: 13px;
    margin-top: 5px;
    white-space: nowrap;
  `,
};

export default CategoryIcon;
