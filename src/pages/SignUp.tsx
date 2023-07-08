import React, { useState } from 'react';
import styled from 'styled-components';
import { PRIMARY } from '../constants/color';
import PrimaryButton from '../components/ui/PrimaryButton';
import SignUpImg from '../constants/img/SignUpImg.svg';
import BackArrow from '../components/ui/BackArrow';
import PrimaryInput from '../components/ui/PrimaryInput';
import Chips from '../components/Chips';

function SignUp() {
  const [currentPage, setCurrentPage] = useState(1);

  const PageMove = () => {
    // 페이지 이동
    if (currentPage < 6) {
      setCurrentPage(currentPage + 1);
    }
    return;
  };

  const goToPreviousPage = () => {
    //뒤로가기 버튼
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
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
      {currentPage === 2 && <PrimaryInput placeholder='' />}
      {currentPage === 3 && <PrimaryInput placeholder='' />}
      {currentPage === 4 && (
        <S.SignUpChips>
          <div style={{ marginRight: '6px' }}>
            <Chips width='50px' selected='true'>
              남성
            </Chips>
          </div>
          <div>
            <Chips width='50px' selected=''>
              여성
            </Chips>
          </div>
        </S.SignUpChips>
      )}
      {currentPage === 5 && <PrimaryInput placeholder='' />}
      {currentPage === 6 && <PrimaryInput placeholder='' />}
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
    height: 95vh;
  `,
  SignUpButton: styled.div`
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 40px;
    margin: 0px 12px 20px 0px;
  `,
  SignUpImg: styled.img`
    width: 100%;
    height: 350px;
    margin-bottom: 15px;
  `,
  MainPhrase: styled.p`
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    margin: 24px 0px 5px 16px;
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
    width: 100%;
    margin-left: 20px;
  `,
};

export default SignUp;
