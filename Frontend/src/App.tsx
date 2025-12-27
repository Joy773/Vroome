import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from "./components"
import { ThemeProvider } from 'styled-components';
import { ScrollToTop } from './components';
import { GlobalStyles } from './globalStyles';
import { CarDetails, Home, Checkout } from './pages';
import { theme } from './types/theme-type';
import { Toaster } from 'react-hot-toast';

const AppContent: FC = () => {
  const location = useLocation();
  const validRoutes = ['/', '/car-details', '/checkout'];
  const showHeader = validRoutes.includes(location.pathname);

  return (
    <>
    <Toaster position="top-right"  reverseOrder={false}/>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details" element={<CarDetails />} />
        <Route path="/checkout" element={<Checkout />} />
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