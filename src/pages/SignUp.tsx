import React, { useState } from 'react';
import styled from 'styled-components';
import { PRIMARY } from '../constants/color';
import PrimaryButton from '../components/ui/PrimaryButton';
import SignUpImg from '../constants/img/SignUpImg.svg';
import BackArrow from '../components/ui/BackArrow';
import PrimaryInput from '../components/ui/PrimaryInput';
import Chips from '../components/ui/Chips';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [genderChip, setGenderChip] = useState(1);

  const PageMove = () => {
    // 페이지 이동
    if (currentPage <= 5) {
      setCurrentPage(currentPage + 1);
    }
    return;
  };

  const goToPreviousPage = () => {
    //뒤로가기 버튼
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (currentPage === 1) {
      navigate('/');
    }
  };

  const handleChipPress = (chipId) => {
    //성별 선택 칩
    if (genderChip !== chipId) {
      setGenderChip(chipId);
    }
  };

  const getPhraseByPage = (page) => {
    // 현재 페이지 번호에 따라 가져올 문구
    const phrases = {
      main: [
        'Paysubook 가입하기',
        '이름 입력',
        '생년월일 입력',
        '성별 지정',
        '휴대폰 번호 또는 이메일 입력',
        '비밀번호 만들기',
      ],
      sub: [
        '',
        '실명을 입력해주세요.',
        '생년월일을 입력하세요.',
        '성별을 입력하세요.',
        '아이디로 사용할 휴대폰 번호 또는 이메일을 입력하세요.',
        '다른 사람이 추측할 수 없는 8자 이상의 문자와 숫자를 조합하여 비밀번호를 만드세요.',
      ],
    };

    const btnTexts = {
      1: '시작하기',
      6: '완료',
      default: '다음',
    };

    return {
      main: phrases.main[page - 1],
      sub: phrases.sub[page - 1],
      btn: btnTexts[page] || btnTexts.default,
    };
  };
  const currentPhrase = getPhraseByPage(currentPage);

  return (
    <S.SignUpLayOut>
      <div onClick={() => goToPreviousPage()}>
        <BackArrow />
      </div>
      <S.MainPhrase>{currentPhrase.main}</S.MainPhrase>
      <S.SubPhrase>{currentPhrase.sub}</S.SubPhrase>
      {currentPage === 1 && (
        <>
          <S.SignUpImg src={SignUpImg} alt='SignUpImg' />
          <S.SmallPhrase>
            <p style={{ marginBottom: '0px' }}>
              계정을 만들어 자기의 소비 습관을
            </p>
            <p style={{ marginTop: '0px' }}> 확인하고 관리해보세요.</p>
          </S.SmallPhrase>
        </>
      )}
      {currentPage === 2 && (
        <S.InputWrapper>
          <PrimaryInput placeholder='' />
        </S.InputWrapper>
      )}
      {currentPage === 3 && (
        <S.InputWrapper>
          <PrimaryInput placeholder='' />
        </S.InputWrapper>
      )}
      {currentPage === 4 && (
        <S.SignUpChips>
          <div style={{ marginRight: '6px' }}>
            <Chips
              isActive={genderChip === 1}
              onClick={() => handleChipPress(1)}
              label='남성'
            />
          </div>
          <div>
            <Chips
              isActive={genderChip === 2}
              onClick={() => handleChipPress(2)}
              label='여성'
            />
          </div>
        </S.SignUpChips>
      )}
      {currentPage === 5 && (
        <S.InputWrapper>
          <PrimaryInput placeholder='' />
        </S.InputWrapper>
      )}
      {currentPage === 6 && (
        <S.InputWrapper>
          <PrimaryInput placeholder='' />
        </S.InputWrapper>
      )}
      <S.SignUpButton onClick={PageMove}>
        <PrimaryButton color='white' background={PRIMARY}>
          {currentPhrase.btn}
        </PrimaryButton>
      </S.SignUpButton>
    </S.SignUpLayOut>
  );
}

const S = {
  SignUpLayOut: styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  `,
  SignUpButton: styled.div`
    position: absolute;
    bottom: 40px;
    width: 95%;
    height: 40px;
    margin-left: 10px;
  `,
  SignUpImg: styled.img`
    width: 100%;
    height: 350px;
    margin-top: 20px;
  `,
  MainPhrase: styled.span`
    font-size: 20px;
    font-weight: bold;
    margin: 30px 0px 0px 15px;
  `,
  SubPhrase: styled.span`
    font-size: 12px;
    color: #807f7e;
    text-align: left;
    margin: 0px 0px 16px 16px;
  `,
  SmallPhrase: styled.div`
    font-size: 12px;
    font-weight: bold;
    text-align: center;
  `,
  SignUpChips: styled.div`
    display: flex;
    width: 90%;
    margin-left: 20px;
  `,
  InputWrapper: styled.div`
    width: 90%;
    margin-left: 15px;
  `,
};

export default SignUp;
