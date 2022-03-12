import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routers from './router';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl';
import Ctx from './context.js';
import zh from './lang/zh.js';
import en from './lang/en.js';

function App() {
  const [lang, setLang] = useState(zh);

  const changeLang = (res) => {
    if (res === 'zh') setLang(zh);
    if (res === 'en') setLang(en);
  };

  return (
    <Ctx.Provider value={{ changeLang }}>
      <IntlProvider messages={lang}>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </IntlProvider>
    </Ctx.Provider>
  );
}

export default App;
