import React from 'react';
import { LoaderBackdrop, Pnd } from './Loader.styled';
import Pend from 'assets/pending.png';
import DotLoader from 'react-spinners/DotLoader';

export const Loader = () => {
  return (
    <LoaderBackdrop>
      <DotLoader
        color="#f68000"
        size={150}
        cssOverride={{ position: 'absolute', top: '25%', left: '45%' }}
      />
      <Pnd src={Pend} alt="Pending" />
    </LoaderBackdrop>
  );
};
