import React from 'react';
import catRun from '../assets/cat-run.gif';

const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 w-full h-26 overflow-hidden">
      <img
        src={catRun}
        alt="Running cat"
        className="w-[80px] md:w-[100px] cat-run"
      />
    </footer>
  );
};

export default Footer;
