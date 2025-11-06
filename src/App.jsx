import { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { ErrorBoundary } from './components';
import { Navigation, Footer } from './components';
import { 
  HomePage, 
  ProductsPage, 
  AboutPage, 
  ContactPage, 
  SignInPage, 
  SignUpPage 
} from './pages';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const { cart, wishlist } = useApp();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation 
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      
      {currentPage === 'home' && (
        <HomePage onNavigate={setCurrentPage} />
      )}
      {currentPage === 'products' && (
        <ProductsPage />
      )}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'signin' && <SignInPage onNavigate={setCurrentPage} />}
      {currentPage === 'signup' && <SignUpPage onNavigate={setCurrentPage} />}
      
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;
