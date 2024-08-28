import React, { useEffect, useState } from 'react';
import useLoading from '../Hooks/useLoading';
import Selectwalletmodal from './Selectwalletmodal';
import useModal from '../Hooks/useModal';
import { useNavigate } from 'react-router-dom';

const Herotext = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const { loading, startLoading } = useLoading(1000);
  const { isOpen, openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const handleClick = () => {
    startLoading(() => {
      openModal();
    });
  };

  useEffect(() => {
    setTextVisible(true);
  }, []);

  const handleWalletSelection = () => {
    setIsConnected(true);
    closeModal();
  };

  const handleViewProposals = () => {
    startLoading(() => {
      navigate('/proposals');
    });
  };

  return (
    <div className='flex justify-center items-center min-h-screen p-4'>
      <div className={`text-white text-center space-y-6 mx-auto w-full md:w-4/5 lg:w-3/5 xl:w-2/5 transition-opacity duration-1000 ease-out transform ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        {
          isConnected ? (
            <div className='space-y-3'>
              <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl'>
                Your Wallet is Successfully Connected
              </h1>
              <p className='text-base md:text-lg lg:text-xl'>Proceed to proposals for voting</p>
              <button
                className=' mx-auto mt-4 border rounded-3xl px-4 py-2 bg-gradient-to-r from-purpleAccent to-[#3FE3EF] text-white'
                onClick={handleViewProposals}
                disabled={loading}
              >
                {loading ? (
                  <div className='flex gap-2 justify-center items-center'>
                    <p>Please wait...</p>
                    <svg className='animate-spin h-5 w-5 text-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className='opacity-25' cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className='opacity-75' fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                  </div>
                ) : (
                  'View Proposals →'
                )}
              </button>
            </div>
          ) : (
            <>
              <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl'>
                Empowering Decentralized Decision-Making!
              </h1>
              <p className='text-base md:text-lg lg:text-xl'>
                Provide a cutting-edge solution that ensures reliability, efficiency, and ballot privacy
                in DAO voting, giving you the tools to make informed decisions.
              </p>
              <div>
                <button
                  onClick={handleClick}
                  className='mx-auto connect rounded-3xl px-4 py-2 hover:opacity-70 bg-
                   border border-white flex gap-2 justify-around items-center text-white'
                  disabled={loading}
                >
                  {
                    loading ? (
                      <div className='flex gap-2 justify-center items-center'>
                        <p>Please wait</p>
                        <svg className='animate-spin h-5 w-5 text-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className='opacity-25' cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className='opacity-75' fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                        </svg>
                      </div>
                    ) : (
                      <div className='flex gap-2'>
                        <h2 className='m-0'>Connect Wallet</h2>
                        <img width={20} src="/Images/ri-wallet-line.svg" alt="Wallet Icon" />
                      </div>
                    )
                  }
                </button>
              </div>
            </>
          )
        }
      </div>
      {isOpen && (
        <Selectwalletmodal closeModal={closeModal} onWalletSelect={handleWalletSelection} />
      )}
    </div>
  );
};

export default Herotext;
