import React, { useState } from 'react';
import styled from 'styled-components';
import { PRIMARY } from '../constants/color';
import { Link, useNavigate } from 'react-router-dom';
import MainLogo from '../components/MainLogo';
import PrimaryInput from '../components/ui/PrimaryInput';
import PrimaryButton from '../components/ui/PrimaryButton';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { isLoggedInAtom } from '../recoil/AuthAtom';

function Main() {
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  const navigate = useNavigate();
  const [typingEmail, setTypingEmail] = useState('');
  const [typingPwd, setTypingPwd] = useState('');

  const submit = async () => {
    try {
      await axios.post('/api/auth/login', {
        id: typingEmail,
        password: typingPwd,
      });
      navigate('/home');
      setIsLoggedIn(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.MainLayOut>
      <div style={{ margin: '100px 120px 50px 120px' }}>
        <MainLogo />
      </div>
      <S.ComponentWrapper marginBottom='8px'>
        <PrimaryInput
          placeholder={'휴대폰 번호 또는 이메일 주소'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTypingEmail(e.target.value)
          }
        />
      </S.ComponentWrapper>
      <S.ComponentWrapper marginBottom='8px'>
        <PrimaryInput
          type='password'
          placeholder={'비밀번호'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTypingPwd(e.target.value)
          }
        />
      </S.ComponentWrapper>
      <S.ComponentWrapper marginBottom='16px'>
        <PrimaryButton color='white' background={PRIMARY} onClick={submit}>
          로그인
        </PrimaryButton>
      </S.ComponentWrapper>
      <S.ComponentWrapper marginBottom='28px'>
        <S.ForgetPwdPhrase>비밀번호를 잊으셨나요?</S.ForgetPwdPhrase>
      </S.ComponentWrapper>
      <Link to='/signup' style={{ width: '100%' }}>
        <PrimaryButton color={PRIMARY} background='white'>
          새 계정 만들기
        </PrimaryButton>
      </Link>
    </S.MainLayOut>
  );
}

const S = {
  MainLayOut: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0px 15px;
  `,
  ForgetPwdPhrase: styled.p`
    font-size: 16px;
    font-weight: 700;
  `,
  ComponentWrapper: styled.div<{ marginBottom: string }>`
    width: 100%;
    margin-bottom: ${(props) => props.marginBottom};
  `,
};
export default Main;
