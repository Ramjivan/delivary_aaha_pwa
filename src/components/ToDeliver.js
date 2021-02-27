import React, { useState, useEffect, useReducer } from 'react'
import { Card, CardHeader, CardContent, Typography, CardActions, IconButton } from '@material-ui/core'
import DirectionsIcon from '@material-ui/icons/Directions'
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutline'
import CallIcon from '@material-ui/icons/Call'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import config from '../config.json'
const apiBaseUrl = config.apiBaseUrl
const apiAuth = 'Bearer ' + localStorage.getItem('authToken')

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginBottom: '1em'
    },
}));


export default function ToDeliver() {
    const classes = useStyles();
    const history = useHistory();
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const [list, setList] = useState([])
    const [at, setAt] = useState(0)

    useEffect(() => {

        fetch(apiBaseUrl + 'valet/to-be-delivered', {
            method: 'get',
            headers: new Headers({
                'Authorization': apiAuth,
            }),
        }).then(response => response.json())
            .then(data => {
                if (data.code === 200 && data.error === 0) {
                    setList(data.data)
                } else {
                    //@Todo impliment logout
                    setAt(at + 1)
                    if (at >= 2) {
                        alert('Turn Mobile data on and try again!')
                    }

                }
            })

    }, [])

    function handleDevilered(id) {
        if (window.confirm('Kya aap ne order deliver kar diya hai?')) {
            fetch(apiBaseUrl + 'valet/order-complete/' + id, {
                method: 'post',
                headers: new Headers({
                    'Authorization': apiAuth,
                }),
            }).then(response => response.json())
                .then(data => {
                    if (data.code === 200 && data.error === 0) {
                        alert(data.message)
                        window.location.reload()
                    } else {
                        alert('Something went wrong! Ask Bill Desk to mark order as deliverd')
                    }
                })
        }

    }
    return (
        (list.map(item => (
            <div>
                <Card className={classes.root}>
                    <CardHeader
                        title={item.order_id}
                        subheader={'Distance:- ' + item.distance_in_km + 'KM'}
                    />
                    <CardContent>
                        <Typography variant="body" color="textPrimary" component="h4">
                            Name:- {item.user.first_name + ' ' + item.user.last_name}
                        </Typography>
                        <Typography variant="body" color="textSecondary" component="h4">
                            Address:- {item.address}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <a href={'https://maps.google.com?saddr=Current+Location&daddr=' + item.lat + ',' + item.lng}>
                            <IconButton aria-label="directions on map">
                                <DirectionsIcon />
                            </IconButton>
                        </a>

                        <a href={'tel:' + item.user.phone}><IconButton aria-label="call client">
                            <CallIcon />
                        </IconButton></a>
                        <IconButton
                            onClick={() => handleDevilered(item._id)}
                        >
                            <CheckCircleIcon />
                        </IconButton>
                    </CardActions>

                </Card >
            </div>
        )))
    )
}
