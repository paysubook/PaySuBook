import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Main = React.lazy(() => import('./pages/Main'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
function AppInner() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default AppInner;
