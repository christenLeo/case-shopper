import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, IconButton } from '@mui/material';

export const ProductCard = (props) => {
  return (
    <Card sx={{ maxWidth: 400, margin: '2rem'}}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <CardMedia
          component="img"
          height="120"
          width="120"
          image={props.image}
          alt={"Product photo"}
          sx={{width: '120px'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant='h6' color="text.secondary">
            Price: ${props.price}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Stock:
            <IconButton size='medium'>-</IconButton>
            {props.stock}
            <IconButton size='medium'>+</IconButton>
          </Typography>
        </CardContent>
      </div>
      <CardActions sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Button  sx={{width: '90%'}} variant={'contained'} size="large" color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}