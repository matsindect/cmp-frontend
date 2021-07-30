import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useSelector } from 'react-redux';
import { MenuElement } from './MenuElement';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '14px',
    },
    subtitle: {
        fontSize: '12px',
        color: 'rgba(0, 0, 0, 0.5)',
    },
}));

const TabItemServices = ({ item, bt }) => {
    const classes = useStyles();
    const [dense, setDense] = useState(false);
    const [endIndex, setEndIndex] = useState(3)

    const { serviceCategories, isLoading, error } = useSelector(state => state.serviceCategories);

    if (isLoading) return <h3></h3>;
    if (error) return <h3>{error}</h3>;


    return (
        <Grid item xs={4} md={4}>
            <div style={{ overflow: "hidden", textOverflow: "ellipsis", width: '16rem' }}>
                <Typography variant="h6" className={classes.title} noWrap>
                    {item.name}
                </Typography>
            </div>
            <div className={classes.demo}>
                <List dense={dense}>
                    {serviceCategories.filter(serviceCategory => serviceCategory.sectors[0]
                        && serviceCategory.sectors.some(sector => sector.name === item.name && serviceCategory.parent.length === 0 )
                        && serviceCategory.business_types.some(businesstype => businesstype.name === bt.name)).slice(0, endIndex).map((scFiltered) => {
                                return (
                                    <MenuElement bt={bt} filtered={scFiltered} serviceCategories={serviceCategories} item={item} />
                                );
                            })}
                    {serviceCategories && endIndex === 3 && serviceCategories.filter(serviceCategory => serviceCategory.sectors[0]
                        && serviceCategory.sectors.some(sector => sector.name === item.name
                            && serviceCategory.parent.length === 0)).slice(0, endIndex).length < endIndex &&
                        (
                            <ListItem onClick={() => setEndIndex(serviceCategories.length)}>
                                <Typography variant="p" className={classes.subtitle} >
                                    {"More Categories >>"}
                                </Typography>
                            </ListItem>
                        )
                    }
                    {serviceCategories && endIndex > 3 &&
                        (
                            <ListItem onClick={() => setEndIndex(3)}>
                                <Typography variant="p" className={classes.subtitle} >
                                    {"Less Categories >>"}
                                </Typography>
                            </ListItem>
                        )
                    }
                </List>
            </div>
        </Grid>
    )
}

export default TabItemServices;
