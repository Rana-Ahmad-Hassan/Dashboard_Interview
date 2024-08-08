import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './common/sidebar';
import Navbar from './common/navbar';
import MainPage from '../mainPage.jsx';
import Footer from './common/footer.jsx';
import SignInForm from '../signIn/signIn.jsx';

const MainLayout = () => {
  const location = useLocation();
  const isSignInRoute = location.pathname === '/signIn';

  return (
    <div className='relative min-h-screen'>
      <div className='absolute inset-0 bg-[#5E72E4]' style={{ height: '35%' }}></div>

      <div className='flex gap-10 relative z-10'>
        {!isSignInRoute && (
          <div className='lg:w-[15%] w-0'>
            <Sidebar />
          </div>
        )}
        <div className={`${isSignInRoute ? 'w-full' : 'lg:w-[85%] xl:w-[80%] md:w-[95%] sm:w-[95%] w-[100%]'} flex flex-col`}>
          {!isSignInRoute && <Navbar />}
          <div className='flex-grow'>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/signIn" element={<SignInForm />} />
            </Routes>
          </div>
          {!isSignInRoute && <Footer />}
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
};

export default Main;
