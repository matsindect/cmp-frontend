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

const TabItemProducts = ({ item, bt }) => {
    const classes = useStyles();
    const [endIndex, setEndIndex] = useState(3)

    const { productCategories, isLoading, error } = useSelector(state => state.productCategories);

    if (isLoading) return;
    if (error) return <h3>{error}</h3>;


    return (
        <Grid item xs={4} md={4}>
            <div style={{ overflow: "hidden", textOverflow: "ellipsis", width: '16rem' }}>
                <Typography variant="h6" className={classes.title} noWrap>
                    {item.name}
                </Typography>
            </div>
            <div className={classes.demo}>
                <List dense={false}>
                    {productCategories.filter(productCategory => productCategory.sectors[0]
                        && productCategory.sectors.some(sector => sector.name === item.name && productCategory.parent.length === 0 )
                        && productCategory.business_types.some(businesstype => businesstype.name === bt.name)).slice(0, endIndex).map((scFiltered) => {
                                return (
                                    <MenuElement bt={bt} filtered={scFiltered} productCategories={productCategories} item={item} />
                                );
                            })}
                    {productCategories && endIndex === 3 && productCategories.filter(productCategory => productCategory.sectors[0]
                        && productCategory.sectors.some(sector => sector.name === item.name
                            && productCategory.parent.length === 0)).slice(0, endIndex).length > endIndex &&
                        (
                            <ListItem onClick={() => setEndIndex(productCategories.length)}>
                                <Typography variant="p" className={classes.subtitle} >
                                    {"More Categories >>"}
                                </Typography>
                            </ListItem>
                        )
                    }
                    {productCategories && endIndex > 3 &&
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

export default TabItemProducts;
