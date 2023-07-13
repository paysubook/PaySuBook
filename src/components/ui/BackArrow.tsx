import React from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import styled from 'styled-components';

interface Props {
  onClick?: () => void;
}

function BackArrow({ onClick }: Props) {
  return (
    <Layout onClick={onClick}>
      <MdArrowBackIosNew />
    </Layout>
  );
}

const Layout = styled.div`
  font-size: 20px;
  margin: 5px 0px 0px 5px;
`;
export default BackArrow;
