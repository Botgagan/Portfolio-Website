import React, { useState } from 'react';
import { motion } from 'motion/react';

function Navigation({ refs }) {// refs=it contains heroRef,aboutRef,ProjectsRef,contactRef then inside scrollTo(ref) it means only one ref from 4 of them 
  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ul className='nav-ul'>
      <li className='nav-li'>
        <button className='nav-link cursor-pointer' onClick={() => scrollTo(refs.heroRef)}>Home</button>
      </li>
      <li className='nav-li'>
        <button className='nav-link cursor-pointer' onClick={() => scrollTo(refs.aboutRef)}>About</button>
      </li>
      <li className='nav-li'>
        <button className='nav-link cursor-pointer' onClick={() => scrollTo(refs.projectsRef)}>Work</button>
      </li>
      <li className='nav-li'>
        <button className='nav-link cursor-pointer' onClick={() => scrollTo(refs.contactRef)}>Contact</button>
      </li>
    </ul>
  );
}

const Navbar = ({ refs }) => {// this refs also contains 4 of them
  const [isopen, setIsOpen] = useState(false);

  return (
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
      <div className='mx-auto c-space max-w-7xl'>
        <div className='flex items-center justify-between py-2 sm:py-0'>
          <button
            onClick={() => refs.heroRef.current?.scrollIntoView({ behavior: 'smooth' })}// we used heroRef here because we want when i click on gagan i actually get to home that is hero component ,if i want to go to about component then choose aboutRef or contactRef
            className='text-xl font-bold transition-colors text-neutral-400 hover:text-white cursor-pointer'
          >
            Gagan
          </button>
          <button
            onClick={() => setIsOpen(!isopen)}
            className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden'
          >
            <img src={isopen ? 'assets/close.svg' : 'assets/menu.svg'} className='w-6 h-6' alt="menu toggle" />
          </button>
          <nav className='hidden sm:flex'>
            <Navigation refs={refs} />
          </nav>
        </div>
      </div>
      {isopen && (
        <motion.div
          className='block overflow-hidden text-center sm:hidden'
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: '100vh' }}
          transition={{ duration: 1 }}
        >
          <nav className='pb-5'>
            <Navigation refs={refs} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
