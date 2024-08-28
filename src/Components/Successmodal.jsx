import React from 'react';

const Successmodal = ({ closeModal }) => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-full backdrop-blur-sm'>
      <div className=' p-6 rounded-lg shadow-lg text-center bg-gradient-to-t from-purpleAccent via-20% to-blue-950 to-80%'>
        <div className='bg-white rounded-full h-10 w-10 flex justify-center items-center'>
            <img src="/Images/stars-02.svg" alt="" />
        </div>
        <h2 className='text-2xl font-bold mb-4'>Success!</h2>
        <p>Your proposal has been submitted successfully.</p>
        <button onClick={closeModal} className='mt-4 px-4 w-2/3 py-1 bg-gradient-to-r from-purpleAccent 
          to-[#3FE3EF] border text-white rounded-full'>
          All done
        </button>
      </div>
    </div>
  );
};

export default Successmodal;
