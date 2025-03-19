import { Card, CardContent, Typography } from "@mui/material";

function ResultSingleComponent(props) {
  console.log(
    props.comments.map((ele) => {
      console.log(ele);
    })
  );
  return (
    <Card
      sx={{
        maxHeight: "450px",
        maxWidth: "300px",
        overflow: "auto",
        paddingX: 2,
        paddingY: 2,
      }}
    >
      {/* <CardContent
        sx={{
          // maxHeight: "200px",
          overflow: "auto",
        }}
      > */}
      {""}
      {/* <div>{props}</div> */}
      <Typography
        sx={{ marginY: 2 }}
        textAlign={"center"}
        fontSize={18}
        fontWeight={"700"}
      >
        {props.title + "    --" + props.comments.length}
      </Typography>
      {/* {props.comments.map((ele) => {
        if (ele != " " || ele != "") {
          return <div> {">" + ele}</div>;
        }
      })} */}
      {props.comments.map((ele) => {
        if (ele.trim() !== "") {
          return <div key={ele}>{"> " + ele}</div>;
        }
        return null;
      })}
      {/* </CardContent> */}
    </Card>
  );
}
export default ResultSingleComponent;
