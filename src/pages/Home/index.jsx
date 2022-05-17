import { Modal, Box, Button, Card, CardMedia, Grid, Stack, TextField, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles"
import TurmaCard from "../../components/TurmaCard";
import ProfilePhoto from "../../imgs/foto.png"
import CreateGroupButton from "../../components/CreateGroupButton";
import { useOpenModalCreateGroup } from "../../provider/OpenModalCreateGroup"
import ModalCreateGroup from "../../components/ModalCreateGroup";
import { ContainerBox, StyledCard, ProfileImg, StyledGrid } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import moment from "moment"


const useStyles = makeStyles( (themes) => ({

  profile: {
    position: "absolute",
    top: "0px",
  }

}))

const ContainerBox = styled(Box)(({theme}) => ({
  minHeight: "100vh - 56px",

  margin: "25px 40px",
  
  [theme.breakpoints.down('sm')]: {
    margin: "25px 20px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }
}))

const StyledCard = styled(Card)(({theme}) => ({
  maxWidth: "320px",
  height: "290px",
  maxHeight: "290px",
  padding: "10px 12px",
  marginBottom: "40px",

  display: "flex",
  flexDirection: "column",
  position: "relative",

  [theme.breakpoints.down('sm')]: {
    width: "260px"
  }
}))

const ProfileImg = styled(CardMedia)(({theme}) => ({
  // minHeight: "100px",
  width: "134px",
  height: "130px",
  margin: "0px auto",
  objectFit: "contain"
}))

const StyledGrid = styled(Grid)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }
}))

export default function Home() {

  const { modalCreateGroup, toggleModalCreateGroup} = useOpenModalCreateGroup()

  const [ user, setUser ] = useState(false)

  const [ groups, setGroups ] = useState(false)

  const { email, name, surname } = user

  const { id } = useParams()

  // console.log(moment("10:15", "h:mm").fromNow())

  console.log(moment().locale())

  useEffect( () => {

    api.get(`/users/${id}`, {headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}`}})
      .then( (res) => {
        setUser(res.data)
      })
      .catch( (err) =>{
        console.log(err)
      })

  },[])

  useEffect( () => {
    
    api.get(`/users/${id}?_embed=groups`, {headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}`}})
    .then( (res) => {
      setGroups(res.data.groups)
    })
    .catch( (err) =>{
      console.log(err)
    })
    
  },[modalCreateGroup])

  return(
    <ContainerBox>

      <StyledCard elevation={2} >

        <Typography variant="h5" sx={{alignSelf: "flex-start", color: "#000"}} >
          Perfil
        </Typography>

        <ProfileImg
          component="img"
          image={ProfilePhoto}
        />

        <Stack direction="column" justifyContent="center" alignItems="center" spacing={1} sx={{height: "100%"}} >

          <Typography variant="h5" sx={{color: "#000"}} >
            Nome Sobrenome
          </Typography>

          <Typography variant="subtitle2" sx={{color: "#000"}} >
            Instituição
          </Typography>

          <Button variant="contained" >
            Perfil
          </Button>

        </Stack>

      </StyledCard>

      <StyledGrid container spacing={5} >

        <Grid item >
          <TurmaCard />
        </Grid>

        <Grid item >
          <CreateGroupButton />
        </Grid>

      </StyledGrid>

      <Modal
        open={modalCreateGroup}
        onClose={toggleModalCreateGroup}
        sx={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}
      >

        <ModalCreateGroup />

      </Modal>

    </ContainerBox>
  )

}