// ThanjavurTempleVR.js
import React from 'react';
import 'aframe';
import ai from '../Pictures/ai.png';

const ThanjavurTempleVR = () => {
  return (
    <a-scene>
      <a-sky src={ai} rotation="0 -130 0"></a-sky>
    </a-scene>
  );
};

export default ThanjavurTempleVR;
