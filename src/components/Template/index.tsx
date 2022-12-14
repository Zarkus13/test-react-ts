import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HelloWorld from '../HelloWorld';
import Counter from '../Counter';
import MenuItem from '../MenuItem';
import DisplayActivity from '../DisplayActivity';

const Template: React.FC = () => {
  return (
    <>
      <header>
        <Routes>
          <Route path="/" element={<HelloWorld title="Home page"/>} />
          <Route path="/test" element={<HelloWorld title="Test page"/>} />
          <Route path="/counter" element={<HelloWorld title="Counter"/>} />
        </Routes>

        <DisplayActivity />
      </header>

      <aside>
        <ul>
          <MenuItem label="Home" path="/" />
          <MenuItem label="Test page" path="/test" />
          <MenuItem label="Counter" path="/counter" />
        </ul>
      </aside>

      <article>
        <Routes>
          <Route path="/test" element={<div>Welcome to test page</div>}/>
          <Route path="/counter" element={<Counter/>}/>
        </Routes>
      </article>
    </>
  );
};

export default Template;