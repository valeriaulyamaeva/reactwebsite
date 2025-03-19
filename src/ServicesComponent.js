import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  Box,
  Link
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from '@mui/material/styles';

import Google from './assets/images/Goggle.png';
import Dribbble from './assets/images/icon.png';
import Instagram from './assets/images/Instagram.png';
import webDesignImage from './assets/images/web_design.webp';
import uiUxImage from './assets/images/ui_ux.jpg';
import mobileImage from './assets/images/mobile.png';
import userResearchImage from './assets/images/user_research.png';

const ServicesComponent = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState({
    webDesign: false,
    uiUxDesign: false,
    mobileDevelopment: false,
    userResearch: false,
  });
  const [services, setServices] = useState([
    { id: 'webDesign', title: 'Web ДИЗАЙН', description: 'Разрабатываю стильные и функциональные веб-интерфейсы, создавая визуально привлекательные и удобные сайты.', image: webDesignImage },
    { id: 'uiUxDesign', title: 'UI/UX ДИЗАЙН', description: 'Проектирую интуитивно понятные интерфейсы, улучшая пользовательский опыт через исследования и тестирование.', image: uiUxImage },
    { id: 'mobileDevelopment', title: 'МОБИЛЬНАЯ РАЗРАБОТКА', description: 'Дизайню удобные и адаптивные мобильные интерфейсы, ориентируясь на особенности iOS и Android.', image: mobileImage },
    { id: 'userResearch', title: 'ИССЛЕДОВАНИЕ ЮЗЕРОВ', description: 'Анализирую поведение и потребности пользователей, чтобы создавать продукты, решающие их реальные задачи.', image: userResearchImage }
  ]);

  useEffect(() => {
    restoreCardOrder();
  }, []);

  const handleExpandClick = (service) => {
    setExpanded((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  };

  const handleDragStart = (e, serviceId) => {
    e.dataTransfer.setData('serviceId', serviceId);
  };

  const handleDrop = (e, serviceId) => {
    e.preventDefault();
    const draggedServiceId = e.dataTransfer.getData('serviceId');
    if (draggedServiceId !== serviceId) {
      const newServices = [...services];
      const draggedServiceIndex = newServices.findIndex(service => service.id === draggedServiceId);
      const droppedServiceIndex = newServices.findIndex(service => service.id === serviceId);

      const temp = newServices[draggedServiceIndex];
      newServices[draggedServiceIndex] = newServices[droppedServiceIndex];
      newServices[droppedServiceIndex] = temp;

      setServices(newServices);
      saveCardOrder(newServices);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const saveCardOrder = (newOrder) => {
    const serviceOrder = newOrder.map(service => service.id);
    localStorage.setItem("serviceOrder", JSON.stringify(serviceOrder));
  };

  const restoreCardOrder = () => {
    const savedOrder = JSON.parse(localStorage.getItem("serviceOrder"));
    if (savedOrder) {
      const orderedServices = savedOrder.map(id => services.find(service => service.id === id));
      setServices(orderedServices);
    }
  };

  return (
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

<Box sx={{ marginTop: '6rem', textAlign: 'left', fontSize: '0.5rem', color: '#fff' }}>
  <Typography>Copyright ©2025 Антон Павлов. Все права защищены.</Typography>
</Box>
</Box>

      <Container sx={{ marginLeft: '20%', marginTop: '2rem' }}>
        <header style={{ marginBottom: "3rem" }}>
          <Box sx={{ backgroundColor: '#fff', marginBottom: '1rem' }}>
            <Typography variant="h6" sx={{ fontSize: '1rem', marginBottom: '0.75rem', fontStyle: 'italic', fontWeight: 550 }}>
              Мои работы
            </Typography>
            <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
              ПОСЛЕДНИЕ ПРОЕКТЫ
            </Typography>
          </Box>
        </header>

        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} key={service.id} draggable onDragStart={(e) => handleDragStart(e, service.id)} onDrop={(e) => handleDrop(e, service.id)} onDragOver={handleDragOver}>
              <Card>
                <CardContent>
                  <Typography variant="h5" fontWeight="bold">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {service.description}
                  </Typography>
                  <IconButton onClick={() => handleExpandClick(service.id)} aria-expanded={expanded[service.id]}>
                    <ExpandMoreIcon />
                  </IconButton>
                  <Collapse in={expanded[service.id]}>
                    <Typography variant="body2" color="textSecondary" paragraph>
                    </Typography>
                    <CardMedia
                      component="img"
                      alt={`Пример ${service.title}`}
                      height="200"
                      image={service.image}
                    />
                  </Collapse>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesComponent;
