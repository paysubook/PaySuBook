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
import { toast, ToastContainer } from 'react-toastify';
import '../constants/toast/ReactToastify.css';

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
      toast.success('로그인 되었습니다.', {
        position: 'top-right',
        autoClose: 2000,
        theme: 'colored',
      });
      navigate('/home');
      setIsLoggedIn(true);
    } catch (err) {
      if (!typingEmail || !typingPwd) {
        toast.error('아이디 및 비밀번호를 입력해주세요', {
          position: 'top-right',
          autoClose: 2000,
          theme: 'colored',
        });
      }
      if (err.message === 'Request failed with status code 412') {
        toast.error('아이디 또는 비밀번호가 틀립니다.', {
          position: 'top-right',
          autoClose: 2000,
          theme: 'colored',
        });
      }
      console.log(err.message);
    }
  };

  return (
    <S.MainLayOut>
      <div style={{ margin: '100px 120px 50px 120px' }}>
        <MainLogo />
      </div>
      <S.ComponentWrapper marginbottom='8px'>
        <PrimaryInput
          placeholder={'휴대폰 번호 또는 이메일 주소'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTypingEmail(e.target.value)
          }
        />
      </S.ComponentWrapper>
      <S.ComponentWrapper marginbottom='8px'>
        <PrimaryInput
          type='password'
          placeholder={'비밀번호'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTypingPwd(e.target.value)
          }
        />
      </S.ComponentWrapper>
      <S.ComponentWrapper marginbottom='16px'>
        <PrimaryButton color='white' background={PRIMARY} onClick={submit}>
          로그인
        </PrimaryButton>
      </S.ComponentWrapper>
      <S.ComponentWrapper marginbottom='28px'>
        <S.ForgetPwdPhrase>비밀번호를 잊으셨나요?</S.ForgetPwdPhrase>
      </S.ComponentWrapper>
      <Link to='/signup' style={{ width: '100%' }}>
        <PrimaryButton color={PRIMARY} background='white'>
          새 계정 만들기
        </PrimaryButton>
      </Link>
      <ToastContainer limit={1} />
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
  ComponentWrapper: styled.div<{ marginbottom: string }>`
    width: 100%;
    margin-bottom: ${(props) => props.marginbottom};
  `,
};
export default Main;
