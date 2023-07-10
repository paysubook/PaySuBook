import React, { useState } from 'react';
import styled from 'styled-components';
import { LIGHT_GRAY } from '../constants/color';
import { MdHome, MdFormatListBulleted } from 'react-icons/md';
import TabBar from '../components/ui/TabBar';
import CompareOutlay from '../components/CompareOutlay';

function Home() {
  const [selectedTabId, setSelectedTabId] = useState(1);
  const [isTap, setIsTap] = useState(true);

  const handleTabPress = (tabId) => {
    if (selectedTabId !== tabId) {
      setSelectedTabId(tabId);
      setIsTap(!isTap);
    }
  };

  if (isTap) {
    return (
      <S.HomeLayOut>
        <S.HomeItemContainer>
          <S.CompareOutlay>
            <CompareOutlay date={7} price={84000} />
          </S.CompareOutlay>
        </S.HomeItemContainer>
        <S.HomeTapBar>
          <div style={{ width: '100%' }} onClick={() => handleTabPress(1)}>
            <TabBar selected={selectedTabId === 1}>
              <S.TabItem>
                <MdHome />
                <S.ItemName>홈</S.ItemName>
              </S.TabItem>
            </TabBar>
          </div>
          <div style={{ width: '100%' }} onClick={() => handleTabPress(2)}>
            <TabBar selected={selectedTabId === 2}>
              <S.TabItem>
                <MdFormatListBulleted />
                <S.ItemName>내역</S.ItemName>
              </S.TabItem>
            </TabBar>
          </div>
        </S.HomeTapBar>
      </S.HomeLayOut>
    );
  } else {
    return (
      <S.HomeLayOut>
        <div>내역입니다 ^^ ^^</div>
        <S.HomeTapBar>
          <div style={{ width: '100%' }} onClick={() => handleTabPress(1)}>
            <TabBar selected={selectedTabId === 1}>
              <S.TabItem>
                <MdHome />
                <S.ItemName>홈</S.ItemName>
              </S.TabItem>
            </TabBar>
          </div>
          <div style={{ width: '100%' }} onClick={() => handleTabPress(2)}>
            <TabBar selected={selectedTabId === 2}>
              <S.TabItem>
                <MdFormatListBulleted />
                <S.ItemName>내역</S.ItemName>
              </S.TabItem>
            </TabBar>
          </div>
        </S.HomeTapBar>
      </S.HomeLayOut>
    );
  }
}

const S = {
  HomeLayOut: styled.div`
    height: 100vh;
    background-color: ${LIGHT_GRAY};
  `,
  HomeTapBar: styled.div`
    width: 100%;
    display: flex;
    position: absolute;
    bottom: 0px;
    justify-content: space-around;
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
  HomeItemContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,
  CompareOutlay: styled.div`
    width: 90%;
    background-color: white;
    border-radius: 17px;
    margin-top: 32px;
  `,
};

export default Home;
