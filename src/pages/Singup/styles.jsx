import { Box, Button, Link, Paper, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SingupScream = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",

  backgroundColor: theme.palette.background.primary,
}));

export const BoxSingup = styled(Paper)(({ theme }) => ({
  width: "max-content",
  height: "max-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  paddingTop: "20px",
}));

export const BoxSingupPadlock = styled(Box)(({ theme }) => ({
  width: "max-content",
}));

export const BoxPadlock = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "5px",
  width: "max-content",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "50%",
}));

export const BoxForm = styled("form")(({ theme }) => ({
  elevation: "2",
  width: "300px",
  padding: "20px",
  marginTop: "15px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  rowGap: "15px",
}));

export const DivName = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  columnGap: "20px",
}));

export const InputName = styled(TextField)(({ theme }) => ({
  variant: "outlined",
}));

export const InputSurname = styled(TextField)(({ theme }) => ({
  variant: "outlined",
}));

export const ImputEmail = styled(TextField)(({ theme }) => ({
  variant: "outlined",
}));

export const ImputPassword = styled(TextField)(({ tehme }) => ({
  variant: "outlined",
}));

export const DivCheckBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const ButtonSubmit = styled(Button)(({ theme }) => ({
}));

export const LinkToLogin = styled(Link)(({ theme }) => ({
  color: "#0288D1",
  textDecoration: "none",
}));
