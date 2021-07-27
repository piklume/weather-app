import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ CountryName,Capital,Population,LatLong,CountryFlag }) {
    // console.log('In Media card - ',CountryName,Capital,Population,LatLong,CountryFlag);
  const classes = useStyles();

  return (
      (CountryName !== undefined) ? (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={CountryFlag}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {CountryName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {`Capital - ${Capital}`}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {`Population - ${Population}`}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {`Latitude/Longiture - ${LatLong[0]},${LatLong[1]}`}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>
      )
      : <div className='No-Item-Container'>Search for a country...</div>
    
  );
}
