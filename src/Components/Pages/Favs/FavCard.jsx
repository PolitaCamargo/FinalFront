import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const FavCard = ({ dentist, state }) => {
  const { name, username, phone, website } = dentist;
  useEffect(() => {}, [state.data, localStorage]);
  return (
    <Card
      sx={
        state.theme === "dark"
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
          component="div"
          sx={{ height: 60 }}
        >
          {name}
        </Typography>
        <Typography variant="body2">Username: {username}</Typography>
        <Typography variant="body2">Phone: {phone}</Typography>
        <Typography variant="body2">Website: {website}</Typography>
      </CardContent>
      
      <CardActions>
        
      </CardActions>
    </Card>
  );
};

export default FavCard;
