import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ImgMediaCard({ img, title, code, demo }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={title} height="140" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" target="_blank" href={demo}>
          Live Demo
        </Button>
        <Button size="small" variant="outlined" target="_blank" href={code}>
          Source Code
        </Button>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;
