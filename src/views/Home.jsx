import { useState, useContext } from 'react';
import { Container, MenuList, MenuItem } from '@mui/material';
import { useHistory } from 'react-router-dom';
import ctx from '../context.js';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl';
const Home = () => {
  const menus = [
    {
      url: '/',
      name: '首页',
      intlid: 'home',
    },
    {
      url: '/list1',
      name: '列表1',
      intlid: 'list1',
    },
    {
      url: '/list2',
      name: '列表2',
      intlid: 'list2',
    },
  ];

  const history = useHistory();
  const Myctx = useContext(ctx);

  return (
    <Container>
      <div>
        <div class="left">
          <MenuList>
            {menus.map((item) => (
              <MenuItem onClick={() => history.push(item.url)}>
                <FormattedMessage id={item.intlid} />
              </MenuItem>
            ))}
          </MenuList>
        </div>
        <button onClick={() => Myctx.changeLang('zh')}>切换中文</button>
        <button onClick={() => Myctx.changeLang('en')}>切换英文</button>
      </div>
    </Container>
  );
};

export default Home;
