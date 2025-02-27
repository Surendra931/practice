import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import Home from './pages/Home';
import CheckboxPage from './pages/CheckboxPage';
import Dashboard from './pages/admin/Dashboard';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'checkbox':
        return <CheckboxPage />;
      case 'dashboard':
        return <Dashboard/>
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => setCurrentPage('home')}>
            Home
          </Button>
          <Button color="inherit" onClick={() => setCurrentPage('checkbox')}>
            Checkbox System
          </Button>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: '20px' }}>{renderPage()}</Container>
    </div>
  );
};

export default App;
