import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GRAY, LIGHT_GRAY, PRIMARY } from '../constants/color';
import TabBar from '../components/ui/TabBar';
import CompareOutlay from '../components/home/CompareOutlay';
import HomeIcon from '../constants/img/HomeIcon.png';
import {
  MdHome,
  MdFormatListBulleted,
  MdAttachMoney,
  MdCreditCard,
  MdAdd,
} from 'react-icons/md';
import CostSummary from '../components/home/CostSummary';
import AssetStatus from '../components/home/AssetStatus';
import FinanceSummary from '../components/home/FinanceSummary';
import Chips from '../components/ui/Chips';
import CategoryIcon from '../components/ui/CategoryIcon';
import { profitCategoryIcons } from '../components/category/profitCategoryItem';
import { expenditureCategoryIcons } from '../components/category/expenditureCategoryItem';

function Home() {
  const [selectedTabId, setSelectedTabId] = useState(1);
  const [seletedChip, setSelectedChip] = useState(1);

  const handleTabPress = (tabId) => {
    // 하단 탭바 선택 시
    if (selectedTabId !== tabId) {
      setSelectedTabId(tabId);
    }
  };

  const handleChipPress = (chipId) => {
    // 수입과 지출에 따른 필터 값
    if (seletedChip !== chipId) {
      setSelectedChip(chipId);
    }
  };

  const getNowMonth = () => {
    // 현재 월 가져오기
    return new Date().getMonth() + 1;
  };

  return (
    <S.HomeLayOut>
      {selectedTabId === 1 ? (
        <S.HomeItemContainer>
          <S.CompareOutlay>
            <CompareOutlay date={7} price={84000} />
          </S.CompareOutlay>
          <S.CostSummary>
            <CostSummary icon={<MdAttachMoney />} price={85000} />
          </S.CostSummary>
          <S.CostSummary>
            <CostSummary icon={<MdCreditCard />} price={33350120} />
          </S.CostSummary>
          <S.HomeNotice>
            <div>
              <S.HomeIcon src={HomeIcon} alt='HomeIcon' />
            </div>
            <S.HomePhrase>
              나는 어디에 돈을 많이 썼는지 확인해볼까요?
            </S.HomePhrase>
          </S.HomeNotice>
        </S.HomeItemContainer>
      ) : (
        <S.HomeHistoryLayout>
          <S.HomeHistory>
            <S.AssetStatus>
              <div>
                <AssetStatus month={getNowMonth()} asset={5055000} />
              </div>
              <div>
                <S.ViewAllBtn>전체보기</S.ViewAllBtn>
              </div>
            </S.AssetStatus>
            <S.FinanceSummary>
              <FinanceSummary profit={213123} expenditure={4141312} />
            </S.FinanceSummary>
            <S.HistoryChips>
              <Chips
                isActive={seletedChip === 1}
                onClick={() => handleChipPress(1)}
                label='전체'
              />
              <Chips
                isActive={seletedChip === 2}
                onClick={() => handleChipPress(2)}
                label='수입'
              />
              <Chips
                isActive={seletedChip === 3}
                onClick={() => handleChipPress(3)}
                label='지출'
              />
            </S.HistoryChips>
            {seletedChip === 2 && (
              <S.CategoryIcon>
                <CategoryIcon icons={profitCategoryIcons} />
              </S.CategoryIcon>
            )}
            {seletedChip === 3 && (
              <S.CategoryIcon>
                <CategoryIcon icons={expenditureCategoryIcons} />
              </S.CategoryIcon>
            )}
          </S.HomeHistory>
          <Link to='/history/add'>
            <S.AddHistoryBtn>
              <MdAdd />
            </S.AddHistoryBtn>
          </Link>
        </S.HomeHistoryLayout>
      )}

      <S.HomeTapBar>
        <TabBar
          selected={selectedTabId === 1}
          onClick={() => handleTabPress(1)}
          icon={<MdHome />}
          label='홈'
        />
        <TabBar
          selected={selectedTabId === 2}
          onClick={() => handleTabPress(2)}
          icon={<MdFormatListBulleted />}
          label='내역'
        />
      </S.HomeTapBar>
    </S.HomeLayOut>
  );
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
  HomeItemContainer: styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,
  CompareOutlay: styled.div`
    width: 90%;
    background-color: white;
    border-radius: 17px;
    margin: 32px 0px 20px 0px;
  `,
  CostSummary: styled.div`
    width: 90%;
    margin: 5px 0px;
  `,
  HomeNotice: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 16px;
    padding: 20px;
    margin-top: 20px;
    width: 79%;
  `,
  HomeIcon: styled.img`
    width: 130px;
    height: 130px;
  `,
  HomePhrase: styled.div`
    font-size: 13px;
    font-weight: bold;
    margin-top: 25px;
  `,
  HomeHistoryLayout: styled.div`
    display: flex;
    position: relative;
    height: 90vh;
  `,
  AddHistoryBtn: styled.button`
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: center;
    bottom: 10px;
    right: 20px;
    width: 48px;
    height: 48px;
    font-size: 24px;
    border: none;
    background-color: ${PRIMARY};
    color: white;
    border-radius: 50%;
  `,
  HomeHistory: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
  `,
  AssetStatus: styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin: 20px 0px;
  `,
  ViewAllBtn: styled.button`
    border: none;
    padding: 10px;
    font-size: 11px;
    background-color: ${GRAY};
    font-weight: bold;
  `,
  FinanceSummary: styled.div`
    width: 90%;
  `,
  HistoryChips: styled.div`
    display: flex;
    width: 90%;
    margin-top: 15px;
  `,
  CategoryIcon: styled.div`
    width: 90%;
    display: flex;
  `,
};

export default Home;
