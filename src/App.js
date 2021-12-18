import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import { NavBar } from '../src/components/Navbar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart'

function App() {
  return (
    <div className="App">
      <CartContext.Provider value={[]}>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <ItemListContainer />
            </Route>
            <Route path='/category/:categoryId'>
              <ItemListContainer />
            </Route>
            <Route path='/item/:paramId'>
              <ItemDetailContainer />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
