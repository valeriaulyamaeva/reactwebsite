import React from 'react';
import { Container, Grid, Typography, Button, Link, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { LinkedIn, Phone, Email } from '@mui/icons-material';
import Google from './assets/images/Goggle.png';
import Dribbble from './assets/images/icon.png';
import Instagram from './assets/images/Instagram.png';
import icon from './assets/images/north_east.png';
import main from './assets/images/main_img.png';


const MainComponent = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      padding: '0.5rem',
      marginLeft: '20%',
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

<Box sx={{ marginTop: '6rem', textAlign: 'left', fontSize: '0.5rem', color: '#fff' }}>
  <Typography>Copyright ©2025 Антон Павлов. Все права защищены.</Typography>
</Box>
</Box>
<Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0', marginLeft: '0' }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={6} sx={{ textAlign: 'center', maxWidth: '45%' }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.2rem', sm: '5rem' }, fontWeight: 'bolder', marginBottom: '4rem' }}>
              Я АНТОН ПАВЛОВ...
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.3rem', sm: '1.5rem' }, fontWeight: 'bold', marginBottom: '3rem' }}>
              Web-дизайнер из Минска
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="https://www.linkedin.com/"
              target="_blank"
              sx={{
                backgroundColor: '#000',
                color: '#fff',
                padding: '1rem 2.5rem',
                fontSize: '0.9rem',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '4rem',
                transition: 'background-color 0.3s, transform 0.3s',
                '&:hover': { backgroundColor: '#444', transform: 'scale(1.05)' },
              }}
            >
              Давай общаться
              <img src={icon} alt="Иконка стрелки" style={{ width: '1.25rem', marginLeft: '0.5rem' }} />
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Phone sx={{ width: '1.5rem', marginRight: '0.5rem' }} />
                <Typography sx={{ fontSize: '1.15rem', fontWeight: 'bold', fontStyle: 'italic' }}>+375 33 444 05 05</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Email sx={{ width: '1.5rem', marginRight: '0.5rem' }} />
                <Typography sx={{ fontSize: '1.15rem', fontWeight: 'bold', fontStyle: 'italic' }}>anton360@gmail.com</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'center' }}>
            <img src={main} alt="Антон Павлов - Веб-дизайнер" style={{ width: '90%', objectFit: 'cover' }} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MainComponent;