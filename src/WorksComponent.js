import React from 'react';
import { Container, Grid, Typography, Button, Link, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

import Google from './assets/images/Goggle.png';
import Dribbble from './assets/images/icon.png';
import Instagram from './assets/images/Instagram.png';
import worksImg1 from './assets/images/works_img_1.png';
import worksImg2 from './assets/images/works_img_2.png';
import worksImg3 from './assets/images/works_img_3.png';
import worksImg4 from './assets/images/works_img_4.png';
import icon from './assets/images/north_east.png';

const WorksComponent = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      padding: '0.5rem',
      marginLeft: '23%',
      marginTop: '2.5rem',
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

      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0rem',
        [theme.breakpoints.down('md')]: {
          marginLeft: '0',
        },
      }}>
        <Box sx={{ backgroundColor: '#fff', marginBottom: '1rem' }}>
          <Typography variant="h6" sx={{ fontSize: '1rem', marginBottom: '0.75rem', fontStyle: 'italic', fontWeight: 550 }}>
            Мои работы
          </Typography>
          <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
            ПОСЛЕДНИЕ ПРОЕКТЫ
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0rem',
          [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
          },
        }}>
          {[
            {
              category: 'Web-дизайн',
              title: 'Дизайн интернет-магазина',
              image: worksImg1,
              link: 'https://dribbble.com/shots/25543928-Furniture-eCommerce-Website-Header-Exploration',
            },
            {
              category: 'Мобильная разработка',
              title: 'Прототип и интерфейс мобильного банка',
              image: worksImg2,
              link: 'https://dribbble.com/shots/25546025-Dashboard-Stocks',
            },
            {
              category: 'UX-кейс',
              title: 'UI/UX для сайта бренда напитков',
              image: worksImg3,
              link: 'https://dribbble.com/shots/25521060-Nutless-Monkey-Flavored-Kentucky-Bourbon-Whiskey',
            },
            {
              category: 'Исследование юзеров',
              title: 'Анализ портала магазина косметики',
              image: worksImg4,
              link: 'https://dribbble.com/shots/25545713-Skincare-Products-Ecommerce-Web-Design',
            },
          ].map((project, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '2rem',
                backgroundColor: '#fff',
                padding: '1rem',
                transition: 'transform 0.3s ease',
                position: 'relative',
              }}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  flex: 1,
                  paddingBottom: '0rem',
                }}>
                  <Typography sx={{ fontSize: '0.875rem', color: '#000000', fontStyle: 'italic' }}>
                    {project.category}
                  </Typography>
                  <Typography sx={{ fontSize: '1.25rem', color: '#000000', fontWeight: 'bold' }}>{project.title}</Typography>
                  <Link href={project.link} target="_blank" sx={{ fontSize: '1.5rem', color: 'black' }}>
                  ↗
                  </Link>
                </Box>
                <img src={project.image} alt={project.title} style={{
                  width: '100%',
                  height: 'auto',
                }} />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      <Link
        href="https://dribbble.com/"
        target="_blank"
        sx={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
        }}
      >
        <Button
          sx={{
            backgroundColor: '#000',
            color: '#fff',
            padding: '1rem',
            fontSize: '0.8rem',
            border: 'none',
            textDecoration: 'none',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          Узнать больше
          <img
          src={icon}
          alt="Иконка"
          style={{
            width: '12%',
            height: 'auto',
            marginLeft: '0.625rem',
          }}
        />
        </Button>
      </Link>
    </Box>
      </Container>
    </Box>
  );
};

export default WorksComponent;