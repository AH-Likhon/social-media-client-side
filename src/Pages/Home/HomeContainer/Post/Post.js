import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid, Paper, Typography } from '@mui/material';
import Person1 from '../../../../images/person/1.jpeg';
import Post1 from '../../../../images/post/1.jpeg';
import like from '../../../../images/like.png';
import heart from '../../../../images/heart.png';

const Img = styled('img')({
    margin: '0px auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '500px',
    objectFit: 'contain',
});


const Post = () => {

    return (
        <Paper sx={{ p: 2, m: '20px auto', maxWidth: 700, flexGrow: 1, boxShadow: 4 }}>
            <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} container spacing={2}>
                <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ width: 50, height: 50 }} alt="Social Profile" src={Person1} />
                    <Typography sx={{ mx: 1, fontWeight: 'bold' }} variant="body2">
                        Md. AH Likhon
                    </Typography>
                    <Typography variant="caption">
                        5 mins ago
                    </Typography>
                </Grid>
                <Grid item>
                    <MoreVertIcon sx={{ cursor: 'pointer' }} />
                </Grid>
            </Grid>

            <Grid sx={{ py: 2 }} container spacing={2}>
                <Grid sx={{ mb: 0 }} item>
                    <Typography sx={{ textAlign: 'justify' }} paragraph>
                        It's my first status👍 It's my first status👍 It's my first status👍It's my first status👍It's my first status👍It's my first status👍It's my first status👍It's my first status👍
                    </Typography>
                </Grid>
                <Grid item>
                    <Img alt="complex" src={Post1} />
                </Grid>
            </Grid>

            <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} container spacing={2}>
                <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                    <img style={{ width: 28, height: 28, cursor: 'pointer', marginRight: '1px' }} alt="like" src={like} />
                    <img style={{ width: 28, height: 28, cursor: 'pointer', marginRight: '10px' }} alt="heart" src={heart} />
                    <Typography variant="caption">
                        22 people like it
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography sx={{ cursor: 'pointer', borderBottom: '1px dashed gray' }} variant="caption">
                        15 comments
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Post;