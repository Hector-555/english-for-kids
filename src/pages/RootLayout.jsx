import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import GameMode from '../components/GameMode/GameMode';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Nav/Menu';

function RootLayout() {
  const [menuActive, setMenuActive] = useState(false)
  const [classCheck, setClassCheck] = useState('')

  const handleClassCheck = (classCheck) => {
    setClassCheck(classCheck)
  }

  return (
    <div className='main-wrapper'>
      <Nav active={menuActive} setActive={setMenuActive} onCheck={handleClassCheck} />
      <main>
        <GameMode classCheck={classCheck} />
        <Outlet />
      </main>
      <Footer />
      <Menu active={menuActive} setActive={setMenuActive} />
    </div>
  );
}

export default RootLayout;
