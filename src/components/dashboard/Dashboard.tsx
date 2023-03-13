import * as React from 'react';
import {styled, createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {mainListItems, secondaryListItems} from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import {Item} from './Item'
import GroupAvatars from './GroupAvatars';
import {Sider, SiderProps} from "../sider/Sider";
import {Sheet1} from "../../demo/Sheet1";
import {Sheet2} from "../../demo/Sheet2";
import {Sheet3} from "../../demo/Sheet3";
import {Sheet4} from "../../demo/Sheet4";
import {Sheet5} from "../../demo/Sheet5";
import Logo from '../../assets/img/Picture1.png'
import {Doc} from "../../demo/Doc";

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth: number = 317;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme();

function DashboardContent() {
    let id = 1;
    let [type, setType] = React.useState('dome1');
    let [open, setOpen] = React.useState(true);
    let toggleDrawer = () => {
        setOpen(!open);
    };
    let siderProps: SiderProps[] = [
        {
            text: 'Marketing',
            id: 'root',
            type: 'group',
            icon: 'icon1',
            onClick: () => {
            },
            children: [
                {
                    id: `${++id}`,
                    text: 'Project Overview',
                    type: 'group',
                    onClick: () => {
                    },
                    icon: 'icon2',
                    children: [
                        {
                            type: 'node',
                            id: `${++id}`,
                            text: 'Marketing Guidelines for V...',
                            onClick: () => {
                                setType('dome1');
                            },
                            icon: 'icon4',
                            children: [],
                        },
                        {
                            type: 'node',
                            id: `${++id}`,
                            text: 'Weekly Brainstorm Meeting',
                            onClick: () => {
                                setType('dome2');
                            },
                            icon: 'icon5',
                            children: [],
                        },
                        {
                            type: 'node',
                            id: `${++id}`,
                            text: 'Creative Brief',
                            onClick: () => {
                                setType('dome3');
                            },
                            icon: 'icon6',
                            children: [],
                        },
                        {
                            type: 'node',
                            id: `${++id}`,
                            text: 'Retrospective Retreat',
                            onClick: () => {
                                setType('dome4');
                            },
                            icon: 'icon6',
                            children: [],
                        },
                    ],
                },
                {
                    type: 'group',
                    id: `${++id}`,
                    text: 'Designs',
                    icon: 'icon3',
                    onClick: () => {
                    },
                    children: [
                        {
                            onClick: () => {
                                setType('dome5');
                            },
                            type: 'node',
                            id: `${++id}`,
                            text: 'Mood Board',
                            icon: 'icon5',
                            children: [],
                        },
                        {
                            onClick: () => {
                                console.log('doc')
                                setType('doc');
                            },
                            type: 'node',
                            id: `${++id}`,
                            icon: 'icon3',
                            text: 'Alpine ski house sizzle Re...',
                            children: [],
                        },
                    ],
                },
            ],
        }
    ];
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && {display: 'none'}),
                            }}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{flexGrow: 1}}
                        >
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={2}>

                                <Avatar style={{display: 'inline-block'}} alt="Remy Sharp"
                                        src="../../src/assets/img/dave-128.jpg"/>
                                <h4>Project Overview</h4>


                            </Stack>

                        </Typography>
                        <IconButton color="inherit">
                            <Item style={{
                                backgroundColor: '#814ffd',
                                borderRadius: '20px',
                                padding: '4px 12px 4px 12px',
                                marginRight: '20px',
                                fontSize: 20,
                                color: 'white'
                            }}>Live</Item>
                            <GroupAvatars/>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}>
                        <img src={Logo} style={{width: '200px', marginRight: 'auto'}}/>
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </Toolbar>
                    <Divider/>
                    <List component="nav">
                        {mainListItems}
                        <Sider group={siderProps}/>
                        <Divider sx={{my: 1}}/>
                        {secondaryListItems}
                    </List>
                </Drawer>
                <Box component="main" sx={{
                    backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'hidden',
                }}>
                    <Toolbar/>
                    {/*图表*/}
                    <Container style={{display: 'none'}} maxWidth="lg" sx={{mt: 4, mb: 4}}>
                        <Grid container spacing={3}>
                            {/* Chart */}
                            <Grid item xs={12} md={8} lg={9}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}
                                >
                                    <Chart/>
                                </Paper>
                            </Grid>
                            {/* Recent Deposits */}
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}
                                >
                                    <Deposits/>
                                </Paper>
                            </Grid>
                            {/* Recent Orders */}
                            <Grid item xs={12}>
                                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                                    <Orders/>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Copyright sx={{pt: 4}}/>
                    </Container>
                    {/*sheet1*/}
                    <Sheet1 style={{display: `${type === 'dome1' ? 'block' : 'none'}`}}/>
                    {/*sheet2*/}
                    <Sheet2 style={{display: `${type === 'dome2' ? 'block' : 'none'}`}}/>
                    {/*sheet3*/}
                    <Sheet3 style={{display: `${type === 'dome3' ? 'block' : 'none'}`}}/>
                    {/*sheet4*/}
                    <Sheet4 style={{display: `${type === 'dome4' ? 'block' : 'none'}`}}/>
                    {/*doc*/}
                    <Doc style={{display: `${type === 'doc' ? 'block' : 'none'}`}}/>
                    {/*sheet5*/}
                    <Sheet5 style={{display: `${type === 'dome5' ? 'block' : 'none'}`}}/>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent/>;
}
