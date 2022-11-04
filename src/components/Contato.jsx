import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function HelperTextAligned() {
  <h1 className="texto-centralizado">Sobre</h1>;
  return (
    <Box
      sx={{
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Contato</h1>
      <TextField helperText=" " 
      id="demo-helper-text-aligned" 
      label="Nome"
      className="cam"
      />
      <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Email"
      />

      <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Telefone"
      />
    </Box>
  );
}
