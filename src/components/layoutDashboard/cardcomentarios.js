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
    width:280
  },
});

export default function MediaCard({data}) {
  const classes = useStyles();

  return (
      <>
      <div style={{display:"flex", alignItems:"center",justifyContent:"space-evenly",flexWrap:"wrap"}}>
          <br/><br/>
          {data.map(item=>(
        <Card className={classes.root} key={item.id} style={{marginTop:"15px"}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={item.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.title}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="h2">
              {item.date}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.body}
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
      </Card>))}
       </div>   
       <br/><br/>
       </>
      
  );
}
