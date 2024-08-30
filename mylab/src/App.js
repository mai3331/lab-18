import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements ,RouterProvider} from 'react-router-dom';
import Products from './components/Products'; 
import Desc, { DescLoader} from './components/desc';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import HelpLayout from './components/Helplayout';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Page404 from './components/Page404';
import Error from './components/Error';
import { ProductsLoader } from './components/Products';
import Create from './components/Create';
const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error/>}>
        <Route index element={<Products/>} loader={ProductsLoader} />
        <Route path="products/:id" element={<Desc />} loader={DescLoader} />
        <Route path='HelpCenter' element={<HelpLayout/>}>
          <Route path='faq' element={<FAQ/>}/>
          <Route path='ContactUs' element={<ContactUs/>}/>
        </Route>
        <Route path='Create' element={<Create/>}/>
        <Route path='*' element={<Page404/>}/>
      </Route>
    )
  );

  return(
    <RouterProvider router={router} />
  )
};

export default App;
