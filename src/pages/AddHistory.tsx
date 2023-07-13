import React, { useState } from 'react';
import styled from 'styled-components';
import BackArrow from '../components/ui/BackArrow';
import Chips from '../components/ui/Chips';
import CategoryIcon from '../components/ui/CategoryIcon';
import { expenditureCategoryIcons } from '../components/category/expenditureCategoryItem';
import { profitCategoryIcons } from '../components/category/profitCategoryItem';
import PrimaryInput from '../components/ui/PrimaryInput';
import PrimaryButton from '../components/ui/PrimaryButton';
import { PRIMARY } from '../constants/color';
import { useNavigate } from 'react-router-dom';

function AddHistory() {
  const [typeChips, setTypeChips] = useState(1);
  const [methodChips, setMethodChips] = useState(1);

  const navigate = useNavigate();

  const backArrowPress = () => {
    //뒤로가기 버튼
    navigate(-1);
  };

  const handleTypeChipPress = (chipId) => {
    // 수입과 지출에 따른 필터 값
    if (typeChips !== chipId) {
      setTypeChips(chipId);
    }
  };

  const handleMethodChipPress = (chipId) => {
    // 수입과 지출에 따른 필터 값
    if (methodChips !== chipId) {
      setMethodChips(chipId);
    }
  };

  const getLabelByTypeChips = () => {
    // typeChips 값에 따른 label return
    if (typeChips === 2) {
      return '통장';
    }
    return '카드';
  };

  return (
    <S.AddHistoryLayout>
      <S.BackArrow>
        <BackArrow onClick={backArrowPress} />
        <span style={{ margin: '6px 0px 20px 20px' }}>내역 추가하기</span>
      </S.BackArrow>
      <S.AddHistoryContainer>
        <S.AddHistoryPhrase>내역 종류</S.AddHistoryPhrase>
        <S.ChipsWrapper>
          <Chips
            isActive={typeChips === 1}
            onClick={() => handleTypeChipPress(1)}
            label='지출'
          />
          <Chips
            isActive={typeChips === 2}
            onClick={() => handleTypeChipPress(2)}
            label='수입'
          />
        </S.ChipsWrapper>
        <S.AddHistoryPhrase>
          {typeChips === 1 ? <>결제</> : <>입금</>} 수단
        </S.AddHistoryPhrase>
        <S.ChipsWrapper>
          <Chips
            isActive={methodChips === 1}
            onClick={() => handleMethodChipPress(1)}
            label={getLabelByTypeChips()}
          />
          <Chips
            isActive={methodChips === 2}
            onClick={() => handleMethodChipPress(2)}
            label='현금'
          />
        </S.ChipsWrapper>
        <S.AddHistoryPhrase>카테고리</S.AddHistoryPhrase>
        <div>
          {typeChips === 1 && <CategoryIcon icons={expenditureCategoryIcons} />}
          {typeChips === 2 && <CategoryIcon icons={profitCategoryIcons} />}
        </div>
        <S.AddHistoryPhrase>금액</S.AddHistoryPhrase>
        <div>
          <PrimaryInput placeholder='금액을 입력해주세요.' />
        </div>
        <S.AddHistoryPhrase>설명</S.AddHistoryPhrase>
        <div>
          <PrimaryInput placeholder='설명을 입력해주세요.' />
        </div>
        <S.AddHistoryBtn>
          <PrimaryButton color='white' background={PRIMARY}>
            등록하기
          </PrimaryButton>
        </S.AddHistoryBtn>
      </S.AddHistoryContainer>
    </S.AddHistoryLayout>
  );
}

const S = {
  AddHistoryLayout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    height: 100vh;
  `,
  AddHistoryContainer: styled.div`
    width: 90%;
  `,
  BackArrow: styled.div`
    width: 95%;
    display: flex;
    padding: 5px;
    font-weight: bold;
  `,
  AddHistoryPhrase: styled.div`
    font-size: 14px;
    font-weight: bold;
    margin: 12px 0px 14px 0px;
  `,
  ChipsWrapper: styled.div`
    display: flex;
  `,
  AddHistoryBtn: styled.div`
    width: 90%;
    position: absolute;
    bottom: 15px;
  `,
};

export default AddHistory;
