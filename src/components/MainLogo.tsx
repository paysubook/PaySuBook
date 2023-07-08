import React from 'react';
import { MdLocalParking } from 'react-icons/md';
import { PRIMARY } from '../constants/color';
import styled from 'styled-components';

function MainLogo() {
  return (
    <S.LogoContainer>
      <MdLocalParking style={{ width: '128px', height: '64px' }} />
    </S.LogoContainer>
  );
}

const S = {
  LogoContainer: styled.div`
    display: flex;
    background-color: ${PRIMARY};
    height: 128px;
    border-radius: 50%;
    color: white;
    width: 100%;
    justify-content: center;
    align-items: center;
  `,
};

export default MainLogo;
