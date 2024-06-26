import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const BaseLayout = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen relative sm:overflow-x-hidden">
        <div className="flex flex-col items-center  w-full z-[3]">
            <Header />
                <div className="flex flex-col py-10 px-12 w-full h-full mt-[100px] sm:px-4 sm:py-0 max-w-[1250px] sm:pb-[20px]">
                    {children}
                </div>
            <Footer />
        </div>
      </div>
    </>
  );
};
