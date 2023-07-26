import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Main = React.lazy(() => import('./pages/Main'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const Home = React.lazy(() => import('./pages/Home'));
const AddHistory = React.lazy(() => import('./pages/AddHistory'));

function AppInner() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/history/add' element={<AddHistory />} />
        </Routes>
      </Suspense>
      <ToastContainer limit={1} hideProgressBar />
    </BrowserRouter>
  );
}

export default AppInner;
