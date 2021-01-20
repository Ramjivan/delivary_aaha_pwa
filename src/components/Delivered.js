import { Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'
import config from '../config.json'
const apiBaseUrl = config.apiBaseUrl
const apiAuth = 'Bearer ' + localStorage.getItem('authToken')

export default function Delivered() {
    const [list, setList] = useState([])
    const [total, setTotal] = useState([])
    const [at, setAt] = useState(0)

    useEffect(() => {
        fetch(apiBaseUrl + 'valet/delivered', {
            method: 'get',
            headers: new Headers({
                'Authorization': apiAuth,
            }),
        }).then(response => response.json())
            .then(data => {
                if (data.code === 200 && data.error === 0) {
                    setList(data.data)
                    setTotal(data.total)
                } else {
                    setAt(at + 1)
                    if (at >= 2) {
                        alert('Turn Mobile data on and try again!')
                    }
                }
            })
    }, []);

    const items = (list.map(item => (
        <ListItem>
            <ListItemText primary={item.order_id} />
        </ListItem>

    )))

    return (
        <div>
            <Typography component="h2">Total {total}</Typography>
            <List >
                {items}
            </List>
        </div>
    );
}