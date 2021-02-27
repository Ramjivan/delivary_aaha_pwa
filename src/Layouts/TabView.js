import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ToDeliver from '../components/ToDeliver'
import Delivered from "../components/Delivered";
import { useHistory } from 'react-router-dom'
import { requestFirebaseNotificationPermission } from '../firebaseMessaging'
import config from '../config.json'

const apiBaseUrl = config.apiBaseUrl

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const history = useHistory()
    //check if user is logged in
    if (localStorage.getItem('isAuth') === null || localStorage.getItem('authToken') === null || localStorage.getItem('isAuth') === 'undefined' || localStorage.getItem('authToken') === 'undefined') {
        //redirect to login 
        history.push('login')
    }
    //request notification permission
    useEffect(() => {
        requestFirebaseNotificationPermission()
            .then((firebaseToken) => {
                localStorage.setItem("device_token", firebaseToken);
                if (localStorage.getItem('authToken')) {
                    const apiAuth = 'Bearer ' + localStorage.getItem('authToken');
                    fetch(apiBaseUrl + 'valet/update-token?device_token=' + firebaseToken, {
                        method: 'post',
                        headers: new Headers({
                            'Authorization': apiAuth,
                        }),
                    }).then((response) => console.log(response));
                }
                console.log(firebaseToken);
            })
            .catch((err) => {
                return err;
            });
    }, []);
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function TabView() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="To Deliver" {...a11yProps(0)} />
                    <Tab label="Delivered" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <ToDeliver />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Delivered />
            </TabPanel>

        </div>
    );
}
