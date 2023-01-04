import React, { createContext, useState } from 'react';
import './style.css';
import data from './data';
import Title from './component/title';
import Information from './component/information';
import ButtonHanle from './component/buttonHanle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const MyCounter = createContext();
export default function App() {
  const [index, setIndex] = useState(0);
  return (
    <MyCounter.Provider value={{ index, setIndex }}>
      <section>
        <Title />
      </section>
      <Information />
      <ButtonHanle />
    </MyCounter.Provider>
  );
}
