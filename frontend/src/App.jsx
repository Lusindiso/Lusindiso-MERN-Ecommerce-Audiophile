import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Speakers from './pages/Speakers';
import Headphones from './pages/Headphones';
import Earphones from './pages/Earphones';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/speakers' exact>
          <Speakers />
        </Route>
        <Route path='/headphones' exact>
          <Headphones />
        </Route>
        <Route path='/earphones' exact>
          <Earphones />
        </Route>
      </Switch>
    </>
  );
};

export default App;
