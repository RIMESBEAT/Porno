import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import "./MoviesCard.css";
import { CardMedia } from "@mui/material";

import { Outlet, useNavigate } from "react-router-dom";

const MoviesCard = ({
  title,
  main_thumbnail,
  duration,
  publish_date,
  categories,
  description,
  _id,
  embed_code,
}) => {
  const navigate = useNavigate();

  const gotoVideo = () => {
    // eslint-disable-next-line no-undef
    navigate(`/videos/${_id}`);
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  };
  let time = duration;
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  return (
    <div className="" key={_id}>
      <Card sx={{ maxWidth: 345, margin: "auto" }}>
        <CardMedia
          component="img"
          alt={title}
          height="180px"
          image={main_thumbnail}
          onClick={gotoVideo}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body3"
            sx={{
              display: "block",
              whiteSpace: "nowrap",
            }}
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "block",
              whiteSpace: "nowrap",
            }}
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {categories}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Duration: {minutes} : {seconds} mins
          </Typography>
        </CardContent>
      </Card>
      <Outlet />
    </div>
  );
};

export default MoviesCard;
