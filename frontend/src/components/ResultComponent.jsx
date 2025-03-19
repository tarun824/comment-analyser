import { Grid, Stack } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import ResultSingleComponent from "./REsultSingleComponent";

function ResultComponent(props) {
  // async function fetchResult(){
  //     axios.get("http://localhost:3000/")
  // }
  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"space-evenly"}
      sx={{ marginTop: 3 }}
    >
      <ResultSingleComponent
        comments={props.allComments[0]}
        title="Positive Comments"
      />
      <ResultSingleComponent
        comments={props.allComments[1]}
        title="Negative Comments"
      />
      <ResultSingleComponent
        comments={props.allComments[2]}
        title="Neutral Comments"
      />
    </Grid>
  );
}
export default ResultComponent;
