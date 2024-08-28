import React, { useState } from 'react';
import { FaRegThumbsUp } from 'react-icons/fa6';
import useLoading from '../Hooks/useLoading';

const SelectWalletModal = ({ closeModal, onWalletSelect }) => {
  const { loading, startLoading } = useLoading(1500);
  const [selectedWallet, setSelectedWallet] = useState(null);

  const handleWalletSelection = (walletName) => {
    if (loading) return;

    setSelectedWallet(walletName);
    startLoading(() => {
      console.log(`${walletName} wallet selected`);
      onWalletSelect();
      closeModal();
    });
  };

  return (
    <div className='fixed top-0 left-0 h-full w-full backdrop-blur-sm flex justify-center items-center'>
      <div className='modal rounded-md w-[350px] bg-gradient-to-t from-purpleAccent to-blue-950 text-white border border-purple-300 p-4 space-y-4'>
        <div className='flex justify-between items-center'>
          <div className='rounded-full h-10 w-10 bg-purpleAccent flex justify-center items-center shadow-md'>
            <img width={20} src="Images/ri-wallet-line.svg" alt="Wallet Icon" />
          </div>
          <button onClick={closeModal} className='text-3xl h-10 w-10 flex justify-center items-center rounded-full hover:bg-purple-950'>
            &times;
          </button>
        </div>

        <div>
          <h3 className='font-semibold'>Connect Wallet</h3>
          <p className='text-[12px]'>Select your preferred wallet</p>
        </div>

        <div className='flex flex-col space-y-8'>
          {['Argent', 'Braavos'].map(wallet => (
            <button
              key={wallet}
              onClick={() => handleWalletSelection(wallet)}
              className={`flex justify-between items-center border rounded-lg p-2 ${selectedWallet === wallet ? 'bg-[#C6C9F0]' : 'hover:bg-[#C6C9F0]'} border-purple-300`}
              disabled={loading && selectedWallet !== wallet}
            >
              {loading && selectedWallet === wallet ? (
                <svg className='animate-spin h-5 w-5 text-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className='opacity-25' cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className='opacity-75' fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
              ) : (
                <>
                  <h3>{wallet}</h3>
                  <div>
                    <img width={20} src={`Images/walleticon${wallet === 'Argent' ? '1' : '2'}.svg`} alt={`${wallet} Wallet Icon`} />
                  </div>
                </>
              )}
            </button>
          ))}
        </div>

        <div className='flex justify-center gap-8 items-center'>
          <button onClick={closeModal} className='text-red-500 hover:bg-slate-200 flex justify-center items-center py-2 bg-white rounded-3xl w-1/2'>
            <p>Cancel</p>
          </button>
          <button className='confirm flex gap-2 justify-center items-center py-2 rounded-3xl bg-gray-400 w-1/2'>
            <p>Confirm</p>
            <FaRegThumbsUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectWalletModal;
