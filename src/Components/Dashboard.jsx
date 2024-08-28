import React from 'react';
import { proposals } from '../data';
import useModal from '../Hooks/useModal';
import Newproposalmodal from './Newproposalmodal';
import useLoading from '../Hooks/useLoading';

const Dashboard = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const { loading, startLoading } = useLoading(1500);
  
  const handleClick = () => {
    startLoading(() => {
      openModal();
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-purpleAccent via-20% to-blue-950 to-80% text-white px-4 sm:px-2 md:px-6 lg:px-8">
      <header className="p-4 sm:p-2 flex justify-between items-center border-b border-blue-500">
        <div className="text-2xl font-semibold">
          <img className="w-20 sm:w-16" src="/Images/logo.svg" alt="Logo" />
        </div>
        <button className="w-1/4 border bg-gradient-to-r from-purpleAccent to-[#3FE3EF] text-white py-2 px-4 sm:px-3 rounded-full text-sm sm:text-xs">
          user
        </button>
      </header>

      <main className="p-8 sm:p-4 border bg-gradient-to-t from-purpleAccent to-blue-950 rounded-md border-purple-100">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
              <h2 className="text-xl sm:text-lg font-semibold">All Proposals</h2>
              <span className="bg-blue-700 text-white py-1 px-3 rounded-full text-[12px] sm:text-[10px]">
                240 proposals
              </span>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search"
                className="bg-blue-900 text-[12px] sm:text-[10px] text-white px-2 py-1 rounded-md outline-none border"
              />
            </div>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <button className="ml-4 bg-blue-950 border text-white py-2 px-4 rounded-md text-sm sm:text-xs">
              + Filter
            </button>
            <button
              onClick={handleClick}
              className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-md border bg-gradient-to-r from-purpleAccent to-[#3FE3EF] text-sm sm:text-xs"
              disabled={loading}
            >
              {loading ? (
                <div>
                  <svg className='animate-spin h-5 w-5 text-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className='opacity-25' cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className='opacity-75' fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                </div>
              ) : (
                <div>
                  + Add Proposal
                </div>
              )}
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm sm:text-xs">
            <thead>
              <tr className="text-gray-400 border-b border-gray-600">
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Voted For</th>
                <th className="py-3 px-4">Voted Against</th>
                <th className="py-3 px-4">Total</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {proposals.map((proposal, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="py-3 px-4">{proposal.name}</td>
                  <td className="py-3 px-4">{proposal.date}</td>
                  <td className="py-3 px-4">{proposal.votedFor}</td>
                  <td className="py-3 px-4">{proposal.votedAgainst}</td>
                  <td className="py-3 px-4">{proposal.total}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`py-1 px-3 rounded-full text-sm ${
                        proposal.status === 'Completed'
                          ? 'bg-green-500'
                          : proposal.status === 'Pending'
                          ? 'bg-yellow-500'
                          : proposal.status === 'Cancelled'
                          ? 'bg-red-500'
                          : proposal.status === 'Ongoing'
                          ? 'bg-blue-500'
                          : 'bg-gray-500'
                      }`}
                    >
                      {proposal.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {isOpen && <Newproposalmodal closeModal={closeModal} />}
    </div>
  );
};

export default Dashboard;
