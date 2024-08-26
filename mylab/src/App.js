import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/Products'; 
import Details from './components/Details';
import HelpCenter from './components/HelpCenter';
import Layout from './components/Layout'; 
import useFetch from './components/useFetch';

const App = () => {
  const { data:fetchedProducts } = useFetch("http://localhost:3000/products");
  return (
    <Router>
   
        <Switch>
          <Route path="/" exact>
            <Products products={fetchedProducts} />
          </Route>
       
        </Switch>
    
    </Router>
  );
};

export default App;
