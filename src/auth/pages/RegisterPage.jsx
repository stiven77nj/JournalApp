import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

import { AuthLayout } from "../layout/AuthLayout";


export const RegisterPage = () => {
  return (
    <AuthLayout title="Registro">
      <form action="">
        <Grid container>

          <Grid item xs={ 12 } sx={{ mt: 2 }} >
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Nicolas Jaimes"
              fullWidth
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }} > 
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }} >
            <Grid item xs={ 12 } >
              <Button variant="contained" fullWidth >
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container
            direction="row" 
            justifyContent="end"
          >
            <Typography sx={{ mr: 1 }} >Ya tienes cuenta?</Typography>
            <Link
              color="inherit"
              to="/auth/login"
              component={ RouterLink }
            >
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
