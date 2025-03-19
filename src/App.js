import React from 'react';
import { Container, Grid, Typography, Button, Link, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { LinkedIn, Phone, Email } from '@mui/icons-material';
import MainComponent from './MainComponent';
import AboutMeComponent from './AboutMeComponent';
import ServicesComponent from './ServicesComponent';
import WorksComponent from './WorksComponent';
import ContactsComponent from './ContactsComponent';
import Google from './assets/images/Goggle.png';
import Dribbble from './assets/images/icon.png';
import Instagram from './assets/images/Instagram.png';

const App = () => {
  const theme = useTheme();

  return (
    <Router>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0.5rem',
        [theme.breakpoints.down('md')]: {
          marginLeft: '0',
        },
      }}>
        <Box sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: '15%',
          backgroundColor: '#000',
          color: '#fff',
          padding: '2rem',
          [theme.breakpoints.down('md')]: {
            width: '12%',
          },
        }}>
          <Typography sx={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '5rem' }}>Jac.</Typography>
          <Box sx={{ marginBottom: '3rem' }}>
            <RouterLink to="/" style={{ display: 'block', color: '#fff', textDecoration: 'none', marginBottom: '0.75rem', fontSize: '1.3rem' }}>Главная</RouterLink>
            <RouterLink to="/about" style={{ display: 'block', color: '#fff', textDecoration: 'none', marginBottom: '0.75rem', fontSize: '1.3rem' }}>О себе</RouterLink>
            <RouterLink to="/services" style={{ display: 'block', color: '#fff', textDecoration: 'none', marginBottom: '0.75rem', fontSize: '1.3rem' }}>Услуги</RouterLink>
            <RouterLink to="/works" style={{ display: 'block', color: '#fff', textDecoration: 'none', marginBottom: '0.75rem', fontSize: '1.3rem' }}>Мои работы</RouterLink>
            <RouterLink to="/contact" style={{ display: 'block', color: '#fff', textDecoration: 'none', fontSize: '1.3rem' }}>Контакты</RouterLink>
          </Box>
          <Box sx={{ marginTop: '5rem' }}>
            <Link href="https://www.behance.net/" target="_blank" sx={{ display: 'block', marginBottom: 1 }}>
              <img src={Google} alt="Behance" style={{ width: '2rem' }} />
            </Link>
            <Link href="https://dribbble.com/" target="_blank" sx={{ display: 'block', marginBottom: 1 }}>
              <img src={Dribbble} alt="Dribbble" style={{ width: '2rem' }} />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank" sx={{ display: 'block' }}>
              <img src={Instagram} alt="Instagram" style={{ width: '2rem' }} />
            </Link>
          </Box>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0', marginLeft: '0' }}>
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/about" element={<AboutMeComponent />} />
            <Route path="/services" element={<ServicesComponent />} />
            <Route path="/works" element={<WorksComponent />} />
            <Route path="/contact" element={<ContactsComponent />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;