import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HelloWorld from '../HelloWorld';
import Counter from '../Counter';
import MenuItem from '../MenuItem';
import DisplayActivity from '../DisplayActivity';
import { useTranslation } from 'react-i18next';
import { eventCallback } from '../../utils/callbacks';

const Template: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <header>
        <button onClick={eventCallback((e) => {throw Error('toto')})}>
          error
        </button>
        <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}>
          {t('header.switch-language')}
        </button> <br/>

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
          <Route path="/test" element={<div>{t('test.welcome')}</div>}/>
          <Route path="/counter" element={<Counter/>}/>
        </Routes>
      </article>
    </>
  );
};

export default Template;