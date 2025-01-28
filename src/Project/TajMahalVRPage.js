// TajMahalVRPage.js
import React from 'react';
import 'aframe';
import winter from '../Pictures/winter.jpg';
import { Entity, Scene } from 'aframe-react';

const TajMahalVRPage = () => {
  return (
    <Scene>
      <a-sky src={winter} rotation="0 -90 0"></a-sky>
      <Entity 
        position="0 1.6 -3" 
        text={{value: "Enjoy the 360° view", align: 'center', width: 6}} 
        color="#FFF"
      />
    </Scene>
  );
};

export default TajMahalVRPage;
