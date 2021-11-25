import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Person1 from '../../../../images/person/1.jpeg';
import './shareStatus.css'
import { Divider } from '@mui/material';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


const ShareStatus = () => {
    return (
        <Paper sx={{ p: 2, m: 'auto', maxWidth: 700, flexGrow: 1, boxShadow: 4 }}>
            <Grid container spacing={2}>
                <Grid item>
                    <Avatar sx={{ width: 50, height: 50, mt: 0 }} alt="Travis Howard" src={Person1} />
                </Grid>
                <Grid sx={{ mt: 1 }} item xs={12} sm container>
                    <textarea className='inputStyle' style={{ width: '100%', border: 'none' }} placeholder="What's on your mind, Md?" />
                </Grid>
            </Grid>

            <Divider sx={{ mt: 2, mb: 1 }} />

            <Grid sx={{ flexDirection: 'row' }} container spacing={2}>
                <Grid item sx={{ display: 'flex', alignItems: 'center', }}>
                    <PermMediaIcon sx={{ color: 'tomato' }} />
                    <span style={{ marginLeft: '5px' }}>Photo or Video</span>
                </Grid>
                <Grid item sx={{ display: 'flex', alignItems: 'center', }}>
                    <LabelIcon sx={{ color: 'blue' }} />
                    <span style={{ marginLeft: '5px' }}>Tag</span>
                </Grid>
                <Grid item sx={{ display: 'flex', alignItems: 'center', }}>
                    <RoomIcon sx={{ color: 'green' }} />
                    <span style={{ marginLeft: '5px' }}>Location</span>
                </Grid>
                <Grid item sx={{ display: 'flex', alignItems: 'center', }}>
                    <EmojiEmotionsIcon sx={{ color: 'goldenrod' }} />
                    <span style={{ marginLeft: '5px' }}>Feelings</span>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default ShareStatus;