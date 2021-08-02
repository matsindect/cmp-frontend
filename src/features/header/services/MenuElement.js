import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import { Menu } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '14px',
    },
    subtitle: {
        fontSize: '12px',
        color: 'rgba(0, 0, 0, 0.5)',
    },
}));

export const MenuElement = ({ filtered, serviceCategories, item, bt }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [children, setChildren] = useState([])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        setChildren(serviceCategories.filter(sc1 => sc1.sectors[0]
            && sc1.sectors.some(sector1 => sector1.name === item.name
                && sc1.parent.length > 0
                && sc1.parent[0].name === filtered.name
            )))
    }, [filtered, item, serviceCategories])

    return (
        <ListItem key={filtered.name}>
            {children.length === 0 && (
                <Link to={"/search/:regSlug/" + bt.slug + "/sectors/" + item.id + "/" + filtered.slug + "/services"} >
                    <Typography
                        aria-controls={filtered.id}
                        aria-haspopup="true"
                        variant="p"
                        className={classes.subtitle}
                    >
                        {filtered.name}
                    </Typography>
                </Link>
            )}

            {children.length > 0 && (
                <>
                    <Typography
                        aria-controls={filtered.id}
                        aria-haspopup="true"
                        onClick={handleClick}
                        variant="p"
                        className={classes.subtitle}
                    >
                        {filtered.name}
                    </Typography>
                    <Menu
                        id={filtered.id}
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {children.map((filtered1) => {
                            return (
                                <Link to={"/search/:regSlug/" + bt.slug  + "/sectors/" + item.id + "/" + filtered.slug + "/services"} style={{padding: 0 }}>
                                    <Typography
                                        aria-controls={filtered.id}
                                        aria-haspopup="true"
                                        variant="p"
                                        className={classes.subtitle}
                                    >
                                        <MenuItem onClick={handleClose}>{filtered1.name}</MenuItem>
                                    </Typography>

                                </Link>
                            );
                        })}
                    </Menu>
                </>
            )}
        </ListItem>
    )
}
