import Home from './views/Home';
import { Switch, Route } from 'react-router-dom';
import NotFound from './views/NotFound';
import DemoList from './views/DemoList';
import Edit from './views/Edit';

const routers = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    name: 'List',
    path: '/list1',
    component: DemoList,
  },
  {
    name: 'Edit',
    path: '/edit',
    component: Edit,
  },
];

const Routers = () => {
  return (
    <>
      <Switch>
        {routers.map((route) => (
          <Route {...route} />
        ))}
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
};

export default Routers;
