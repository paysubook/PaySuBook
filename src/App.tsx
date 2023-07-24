import React from 'react';
import AppInner from './AppInner';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <AppInner />
    </RecoilRoot>
  );
}

export default App;
