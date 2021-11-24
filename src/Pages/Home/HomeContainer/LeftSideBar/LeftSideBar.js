import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import GroupIcon from '@mui/icons-material/Group';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Person from '../../../../images/person/10.jpeg'


const drawerWidth = 200;

const LeftSideBar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div >
            <List>
                {['NewsFeed', 'Chat'].map((text, index) => (
                    <ListItem sx={{ p: '1px 10px' }} button key={text}>
                        <ListItemIcon sx={{ mr: '-20px' }}>
                            {index % 2 === 0 ? <RssFeedIcon /> : <ChatIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

            <List sx={{ mt: '-15px' }}>
                {['Videos', 'Groups'].map((text, index) => (
                    <ListItem sx={{ p: '1px 10px' }} button key={text}>
                        <ListItemIcon sx={{ mr: '-20px' }}>
                            {index % 2 === 0 ? <PlayCircleOutlineIcon /> : <GroupIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

            <List sx={{ mt: '-15px' }}>
                {['Bookmarks', 'Questions'].map((text, index) => (
                    <ListItem sx={{ p: '1px 10px' }} button key={text}>
                        <ListItemIcon sx={{ mr: '-20px' }}>
                            {index % 2 === 0 ? <BookmarksIcon /> : <HelpOutlineIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

            <List sx={{ mt: '-15px' }}>
                {['Jobs', 'Events'].map((text, index) => (
                    <ListItem sx={{ p: '1px 10px' }} button key={text}>
                        <ListItemIcon sx={{ mr: '-20px' }}>
                            {index % 2 === 0 ? <WorkOutlineIcon /> : <EventIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

            <List sx={{ mt: '-15px' }}>
                {['Courses', ''].map((text, index) => (
                    <ListItem sx={{ p: '1px 10px' }} button key={text}>
                        <ListItemIcon sx={{ mr: '-20px' }}>
                            {index % 2 === 0 ? <SchoolIcon /> : ''}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                <Button variant="outlined" size="medium">Show More</Button>
            </List>

            <Divider />

            <List sx={{ display: 'flex', alignItems: 'center', p: '10px' }}>
                <Avatar alt="Travis Howard" src={Person} />
                <Typography sx={{ ml: '5px' }}>John Doe</Typography>
            </List>
            <List sx={{ display: 'flex', alignItems: 'center', p: '10px' }}>
                <Avatar alt="Travis Howard" src={Person} />
                <Typography sx={{ ml: '5px' }}>John Doe</Typography>
            </List>
            <List sx={{ display: 'flex', alignItems: 'center', p: '10px' }}>
                <Avatar alt="Travis Howard" src={Person} />
                <Typography sx={{ ml: '5px' }}>John Doe</Typography>
            </List>
            <List sx={{ display: 'flex', alignItems: 'center', p: '10px' }}>
                <Avatar alt="Travis Howard" src={Person} />
                <Typography sx={{ ml: '5px' }}>John Doe</Typography>
            </List>
            <List sx={{ display: 'flex', alignItems: 'center', p: '10px' }}>
                <Avatar alt="Travis Howard" src={Person} />
                <Typography sx={{ ml: '5px' }}>John Doe</Typography>
            </List>
            <List sx={{ display: 'flex', alignItems: 'center', p: '10px' }}>
                <Avatar alt="Travis Howard" src={Person} />
                <Typography sx={{ ml: '5px' }}>John Doe</Typography>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <Box sx={{ display: 'flex', width: '80%' }}>
            <CssBaseline />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}

                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: '65px' },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: '65px' },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                    neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                    tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                    tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                    gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                    posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </Box>

        </Box>
    );
};

LeftSideBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default LeftSideBar;