import React from 'react';
import Navbar from './Navbar';
import Herotext from './Herotext';
import Selectwalletmodal from './Selectwalletmodal';
import { useState } from 'react';
import useModal from '../Hooks/useModal';

const Hero = () => {
  const {isOpen, openModal, closeModal}=useModal();

  return (
    <div className="hero relative w-full min-h-screen overflow-hidden">
      <div className='overlay'>
        <Navbar openModal={openModal}/>
        <Herotext openModal={openModal}/>
        {isOpen && <Selectwalletmodal closeModal={closeModal}/>}
      </div>
    </div>  
  );
};

export default Hero;
