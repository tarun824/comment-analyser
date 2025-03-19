import {
  Card,
  TextField,
  Typography,
  Box,
  Button,
  Stack,
  Grid,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import ResultComponent from "./ResultComponent";

function VideoIdInputScreen() {
  const [loading, useLoading] = useState(false);
  const [videoId, useVideoId] = useState("");
  const [resultData, setResultData] = useState([
    ["11", "11", "11", "11"],
    ["11", "11", "11", "11"],
    [
      "22",
      "22",
      "22",
      "22",
      "22",
      "22",
      "22",
      "22",
      "22",
      "22",
      "22",
      "22",
      "22",
      "22",
      "22",
      "22",
    ],
    // ["11", "11", "11", "11"],
    // ["333", "22", "22", "22", "22"],
  ]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  async function fetchAnalysedComments() {
    setIsDataFetched(false);
    let res = await axios.get(
      "http://127.0.0.1:5000/getAnalysedComments?id=" + videoId
    );

    if (res.status == 200) {
      setIsDataFetched(true);
      setResultData(res.data["data"]);
      // console.log(res.data);
      // console.log(res.data["data"]);
      // console.log(res.data["data"][0]);
      // console.log(res.data["data"][1]);
      // console.log(res.data["data"][2]);
    }
  }
  return (
    <Grid
      containerjustifyContent="center"
      alignItems="center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <Card
        sx={{
          justifyContent: "center",
          alignContent: "center",
          // marginLeft: 60,
          paddingX: 8,
          height: "100%",
          // width: "100%",

          bgcolor: "grey",
          // paddingX: 15,
        }}
      >
        <Typography
          sx={{ fontWeight: "800", paddingY: 3, paddingX: 18 }}
          textAlign={"center"}
        >
          Enter Video URL
        </Typography>
        <Stack>
          <TextField
            value={videoId}
            onChange={(e) => {
              useVideoId(e.target.value);
            }}
          ></TextField>
          <Button
            sx={{ marginTop: 5 }}
            variant="contained"
            onClick={() => {
              fetchAnalysedComments();
            }}
          >
            Submit
          </Button>

          {/* {isDataFetched ? ( */}
          {isDataFetched ? (
            <ResultComponent allComments={resultData} />
          ) : (
            <div></div>
          )}
          {/* ) : (
            <div></div>
          )} */}
        </Stack>
      </Card>
    </Grid>
  );
}
export default VideoIdInputScreen;
