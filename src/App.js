import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import { AuthProvider } from './contexts/Auth';
const LazyAbout = React.lazy(() => import('./components/About'));

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="order-summary" element={<OrderSummary />} />
          {/* nexted routes add Outlet to parent component, one use case is to use a layout component and
        //  then use the outlet to render the child route */}
          <Route path="products" element={<Products />}>
            {/* index route shares the path of the parent route, this one shows by default */}
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userid" element={<UserDetails />} />
            {/* fixed path overrides the dynamic route */}
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
