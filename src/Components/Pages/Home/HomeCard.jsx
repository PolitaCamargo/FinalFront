import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const HomeCard = ({ dentist, addFav, favs, theme }) => {
  const { name, username, id } = dentist;

  return (
    <>
      <Card
        sx={
          theme === "dark"
            ? {
                backgroundColor: "#12121296",
                color: "#fff",
                maxWidth: 200,
              }
            : { maxWidth: 200 }
        }
      >
        <CardMedia
          sx={{ with: 150, height: 140 }}
          image="../../../images/doctor.jpg"
        />
        <CardContent sx={{ with: 150, height: 140 }}>
          <Typography
            gutterBottom
            variant="h5"
            component=""
            sx={{ with: 150, height: 70 }}
          >
            <Link
              to={`/dentist/${id}`}
              component="button"
              variant="body2"
              onClick={() => {}}
            >
              {name}
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ with: 150, height: 70 }}>
            {username}
          </Typography>
        </CardContent>

        <CardActions>
          <Button onClick={() => addFav(dentist)} size="small">
            <FavoriteIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default HomeCard;
