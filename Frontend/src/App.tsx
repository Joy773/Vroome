import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from "./components"
import { ThemeProvider } from 'styled-components';
import { ScrollToTop } from './components';
import { GlobalStyles } from './globalStyles';
import { CarDetails, Home, Checkout, Favorites, Search } from './pages';
import { theme } from './types/theme-type';
import { Toaster } from 'react-hot-toast';

const AppContent: FC = () => {
  const location = useLocation();
  const validRoutes = ['/', '/car-details', '/checkout', '/favorites', '/search'];
  const showHeader = validRoutes.includes(location.pathname);

  return (
    <>
    <Toaster position="top-right"  reverseOrder={false}/>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
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