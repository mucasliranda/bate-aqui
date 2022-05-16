import { Box, Button, Card, CardMedia, Typography, Stack } from "@mui/material"
import { styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles"
import { maxHeight } from "@mui/system";
import TurmaCard from "../../components/TurmaCard";
import asset from "../../imgs/Asset 1.png"
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles( (themes) => ({

  img: {
    maxWidth: "800px",
    marginBottom: "25px",

    objectFit: "contain",
  }

}))

const ContainerBox = styled(Box)(({theme}) => ({
  height: "100vh",
  // paddingTop: "150px",
  // padding: "150px 15px 35px 15px",
  padding: "auto 15px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "wrap",

  backgroundColor: theme.palette.background.primary,
}))

export default function LandingPage() {

  const classes = useStyles()

  const history = useHistory();

  return(
    <ContainerBox>

      <CardMedia 
        className={classes.img}
        component="img"
        image={asset}
      />

      <Stack spacing={{xs: 2, sm: 2, md: 5}} alignItems="center" >

        <Typography variant="titulo" color="text.primary" >Diga "Presente" de um jeito novo</Typography>

        <Typography variant="h5" color="text.primary" >Seja bem vindo a lista de presença escolar do futuro</Typography>

        <Stack spacing={5} direction="row" >

          <Button sx={{color: "text.button"}} onClick={() => history.push('/signup')}>cadastre-se</Button>

          <Button variant="contained" sx={{color: "text.secondary"}} onClick={() => history.push('/login')} >logar</Button>

        </Stack>

      </Stack>

    </ContainerBox>
  )

}