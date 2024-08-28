import React, { useState } from 'react';
import Successmodal from './Successmodal'; 

const Newproposalmodal = ({ closeModal }) => {
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const closeSuccessModal = () => {
    setIsSubmitted(false);
    closeModal();
  };

  return (
    <div className='backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full py-4 overflow-y-auto'>
      <div className='w-5/6 max-w-3xl bg-indigo-950 p-4 rounded-lg shadow-lg overflow-y-auto max-h-screen'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-white text-xl font-bold'>
            Create Proposal
          </h2>
          <div onClick={closeModal} className='cursor-pointer text-white text-xl font-bold'>
            X
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="title" className="text-white">Title</label>
            <input type="text" id="title" name="title" className="border rounded p-2 bg-[#2A0B70] text-white" required />
          </div>

          <div className="flex flex-col">
            <label htmlFor="createdBy" className="text-white">Created by</label>
            <input type="text" id="createdBy" name="createdBy" className="border bg-[#2A0B70] rounded p-2 text-white" required />
          </div>

          <div className="flex flex-col">
            <label htmlFor="summary" className="text-white">Summary</label>
            <textarea id="summary" name="summary" cols="30" rows="10" className="border rounded p-2 bg-[#2A0B70] text-white" required></textarea>
          </div>

          <div className="flex flex-col">
            <label htmlFor="quorum" className="text-white">Quorum</label>
            <input type="number" id="quorum" name="quorum" className="border rounded p-2 bg-[#2A0B70] text-white" required />
          </div>

          <div className="flex flex-col">
            <label htmlFor="startDate" className="text-white">Start date</label>
            <input type="date" id="startDate" name="startDate" className="border rounded p-2 bg-[#2A0B70] text-white" required />
          </div>

          <div className="flex flex-col">
            <label htmlFor="endDate" className="text-white">End date</label>
            <input type="date" id="endDate" name="endDate" className="border rounded p-2 bg-[#2A0B70] text-white" required />
          </div>

          <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
        </form>
      </div>

      {isSubmitted && <Successmodal closeModal={closeSuccessModal} />}
    </div>
  );
};

export default Newproposalmodal;
