import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppCustomers from './pages/AppCustomers';
import AppProducts from './pages/AppProducts';
import BuyProduct from './pages/BuyProduct';
import LatestPurchase from './pages/LatestPurchase';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="/customers">Customers</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/customers">
            <AppCustomers/>
          </Route>
          <Route exact path="/products">
            <AppProducts/>
          </Route>

          <Route path="/customers/:id">
            <LatestPurchase/>
          </Route>
          <Route path="/products/:id">
            <BuyProduct />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
