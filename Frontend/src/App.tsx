import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from "./components"
import { ThemeProvider } from 'styled-components';
import { ScrollToTop } from './components';
import { GlobalStyles } from './globalStyles';
import { AddCar, CarDetails, Category, Home, Profile, Error, SearchFilter, Checkout } from './pages';
import { theme } from './types/theme-type';

const AppContent: FC = () => {
  const location = useLocation();
  const validRoutes = ['/', '/profile', '/search', '/add-car', '/car-details', '/category', '/checkout'];
  const showHeader = validRoutes.includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<SearchFilter />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/car-details" element={<CarDetails />} />
        <Route path="/category" element={<Category />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop>
            <AppContent />
          </ScrollToTop>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App;