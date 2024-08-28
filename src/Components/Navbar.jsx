import React from 'react'
import { FaWallet } from 'react-icons/fa'
import useLoading from '../Hooks/useLoading'

const Navbar = ({openModal}) => {
    const {loading, startLoading}=useLoading(1000);
    const handleClick=()=>{
        startLoading(()=>{
            openModal();
        })
    }
  return (
    <div className='w-full'>
        <nav className='flex justify-between w-full justify-items-center p-6'>
            <div className='flex justify-center items-center'>
                <img className='w-5/6' src="/Images/logo.svg" alt="" />

            </div>
            <div>
                <button disabled={loading} onClick={handleClick} className=' connect rounded-3xl px-3
                 py-2 hover:opacity-70
                    border border-white flex gap-2 justify-around items-center text-white'>
                    
                    {
                        loading ? (
                            <div className='flex gap-2 justify-center items-center'>

                            <p>Please wait</p>
            
                            <svg className='animate-spin h-5 w-5 text-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className='opacity-25' cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className='opacity-75' fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path> 
                            </svg>
                          </div>
            
                        ):(
                            <>
                                <h2 className='m-0'>connect wallet</h2>
                                <img width={20} src="/Images/ri-wallet-line.svg" alt="" />
                            </>
                        )
                    }
                </button>
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar
