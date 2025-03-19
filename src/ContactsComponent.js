import React, { useState, useEffect } from 'react';
import { Button, TextField, Box, Typography, Link, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import Google from './assets/images/Goggle.png';
import Dribbble from './assets/images/icon.png';
import Instagram from './assets/images/Instagram.png';
import backgroundImage from './assets/images/contact_form_background.png';

const ContactsComponent = () => {
  const theme = useTheme();

  const [tab, setTab] = useState(() => parseInt(localStorage.getItem("activeTab")) || 0);

  useEffect(() => {
    localStorage.setItem("activeTab", tab);
  }, [tab]);

  const RegistrationForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const validate = () => {
      let newErrors = {};
      if (!formData.name.trim()) newErrors.name = "Имя обязательно";
      if (!formData.email.includes("@")) newErrors.email = "Некорректный email";

      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

      if (!passwordRegex.test(formData.password)) {
        newErrors.password = "Пароль должен содержать минимум 6 символов, цифру, спецсимвол, заглавную и строчную буквы";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
        setSuccessMessage("Регистрация успешна!");
        setFormData({ name: "", email: "", password: "" });
        setErrors({});
      }
    };

    return (
<Box
  sx={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    color: '#fff',
    padding: '2rem',
    margin: '1rem auto',
  }}
>
  {successMessage && <Typography variant="body1" color="success.main" sx={{ marginBottom: '1rem' }}>{successMessage}</Typography>}
  <form onSubmit={handleSubmit}>
    <Typography variant="h6" sx={{ fontSize: '1rem', marginBottom: '1rem' }}>Регистрация</Typography>
    <div className="form-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      <div className="form-group" style={{ flex: 1, minWidth: '7.5rem', display: 'flex', flexDirection: 'column', marginBottom: '2rem' }}>
        <TextField
          label="Имя"
          variant="outlined"
          fullWidth
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          sx={{
            background: 'transparent',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#fff',
              },
            },
            '& .MuiInputBase-input': {
              color: '#fff',
              fontSize: '1.25rem',
            },
          }}
        />
      </div>
      <div className="form-group" style={{ flex: 1, minWidth: '7.5rem', display: 'flex', flexDirection: 'column', marginBottom: '2rem' }}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          sx={{
            background: 'transparent',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#fff',
              },
            },
            '& .MuiInputBase-input': {
              color: '#fff',
              fontSize: '1.25rem',
            },
          }}
        />
      </div>
    </div>
    <div className="form-group" style={{ marginBottom: '2rem' }}>
      <TextField
        label="Пароль"
        variant="outlined"
        fullWidth
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password}
        sx={{
          background: 'transparent',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#fff',
            },
          },
          '& .MuiInputBase-input': {
            color: '#fff',
            fontSize: '1.25rem',
          },
        }}
      />
    </div>
    <Button
      type="submit"
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        width: '50%',
        '&:hover': {
          backgroundColor: '#444',
          transform: 'scale(1.05)',
        },
      }}
    >
      Зарегистрироваться
    </Button>
  </form>
</Box>

    );
  };

  const ContactSection = () => (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: 3,
      }}
    >
      <Box sx={{ textAlign: 'left', marginTop: '4rem' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}>
          СВЯЖИСЬ СО МНОЙ
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.25rem', }}> 
          проспект Независимости, 58, оф.405
        </Typography>
        <Typography variant="h5" paragraph sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          +375 33 444 05 05
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          anton360@gmail.com
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Link href="https://facebook.com" target="_blank" sx={{ marginRight: 2, color: 'black', fontSize: '1.25rem' }}>
            FACEBOOK
          </Link>
          <Link href="https://twitter.com" target="_blank" sx={{ marginRight: 2, color: 'black', fontSize: '1.25rem' }}>
            TWITTER
          </Link>
          <Link href="https://instagram.com" target="_blank" sx={{ marginRight: 2, color: 'black', fontSize: '1.25rem' }}>
            INSTAGRAM
          </Link>
          <Link href="https://linkedin.com" target="_blank" sx={{ color: 'black', fontSize: '1.25rem' }}>
            LINKEDIN
          </Link>
        </Box>
      </Box>
    </Box>
  );
  
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
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
          <Button
            variant="outlined"
            sx={{
              color: tab === 0 ? '#FFA500' : 'black',
              borderColor: tab === 0 ? '#FFA500' : 'black',
              marginRight: 2,
            }}
            onClick={() => setTab(0)}
          >
            Контакты
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: tab === 1 ? '#FFA500' : 'black',
              borderColor: tab === 1 ? '#FFA500' : 'black',
            }}
            onClick={() => setTab(1)}
          >
            Регистрация
          </Button>
        </Box>
        {tab === 0 ? <ContactSection /> : <RegistrationForm />}
      </Container>
    </Box>
  );
};

export default ContactsComponent;
