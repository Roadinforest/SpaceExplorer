import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from '@mui/icons-material/GitHub'; // Add this import

// Define the props interface
interface ProfileCardProps {
  profileName: string;
}

// Accept props and use them inside the component
export default function ProfileCard({ profileName }: ProfileCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`/${profileName}.png`}
        title="Taikonaut"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rif 
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
        >
          Taikonaut Rif Starwalker has been a pioneer in space exploration, 
          leading multiple missions to the International Space Station and beyond. 
          Known for his expertise in astrophysics and engineering, Alexei has 
          contributed significantly to our understanding of the cosmos.
        </Typography>

      </CardContent>

      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button size="small" onClick={() => window.open('https://github.com/Roadinforest', '_blank')}>
          <GitHubIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
