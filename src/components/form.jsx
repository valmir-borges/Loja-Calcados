import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Img from "../img/sapato-img.png"
import { Alert } from 'antd';
import { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Sapatilla
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function Form() {
    const [erro, setErro] = useState(false)
    const [sucesso, setSucesso] = useState(false)
    const [telefone, setTelefone] = useState("")
    const [nome, setNome] = useState("")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate();

    const handleNavigation = () => {
      navigate('/');
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Verificação do nome (somente letras)
    const nomeRegex = /^[A-Za-zÀ-ÿ\s]+$/;
    if (!nomeRegex.test(nome)) {
      setErro(true);
      return;
    }

    if (password !== confirmPassword) {
      setErro(true);
      return;
    }

    if (!email) {
        setErro(true);
        return;
      }

    if (!telefone) {
      setErro(true);
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    setSucesso(true)
    setEmail("")
    setNome("")
    setTelefone("")
    setPassword("")
    setConfirmPassword("")
    setTimeout(() => {
        handleNavigation();
      }, 3000);
  };

  return (
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${Img})`,
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'left',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {sucesso && (<Alert message="Cadastro Realizado com Sucesso" type="success" showIcon closable/>)}
            {erro && (    <Alert message="Informações inválidas" type="error" showIcon closable />)}
            <Typography component="h1" variant="h5">
              Cadastro
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nome Completo"
                name="nome"
                autoComplete="text"
                autoFocus
                variant="standard" 
                value={nome}
                onChange={(e) => setNome(e.target.value)}

              />
            <TextField
                margin="normal"
                required
                fullWidth
                id="Telefone"
                label="Seu telefone"
                name="telefone"
                autoComplete="telefone"
                autoFocus
                variant="standard" 
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}

              />
                            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                variant="standard"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}

              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                variant="standard"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}

              />
            <TextField
                margin="normal"
                required
                fullWidth
                name="confirm-password"
                label="confirm-password"
                type="password"
                id="confirm-password"
                variant="standard" 
                autoComplete="current-confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}

              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Lembrar-se de mim"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Cadastrar
              </Button>

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
}