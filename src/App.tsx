import React from 'react';
import AppInner from './AppInner';
import { RecoilRoot } from 'recoil';
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <CookiesProvider>
      <RecoilRoot>
        <AppInner />
      </RecoilRoot>
    </CookiesProvider>
  );
}

export default App;
