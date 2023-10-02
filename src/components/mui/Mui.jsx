import React from "react";
import Button from "@mui/material/Button";
function Mui() {
  return (
    <>
    <div style={{margin: '20px'}}>
     <Button style={{marginLeft: '30px'}} variant="text">Text</Button>
      <Button style={{marginLeft: '30px'}} variant="contained">Contained</Button>
      <Button style={{marginLeft: '30px'}} variant="outlined">Outlined</Button>
    </div>

    </>
  );
}

export default Mui;
