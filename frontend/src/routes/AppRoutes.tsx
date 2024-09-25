import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import ProductList from '../pages/Products/Products';
import Wishlist from '../pages/Wishlist/Wishlist';
import Error from '../pages/Error/Error';

const AppRoutes: React.FC = () => {
  return (
    <IonRouterOutlet>
      <Switch>
        <Route exact path="/products">
            <ProductList />
        </Route>
        <Route exact path="/wishlist">
            <Wishlist />
        </Route>
        <Route exact path="/error">
          <Error />
        </Route>
        <Route exact path="/">
          <Redirect to="/products" />
        </Route>
        <Route path="*">
          <Redirect to="/error" />
        </Route>
      </Switch>
    </IonRouterOutlet>
  );
};

export default AppRoutes;
