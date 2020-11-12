import React from "react";
import { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Typography from "@material-ui/core/Typography";
import ReactCardFlip from 'react-card-flip';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import GridListTileBar from '@material-ui/core/GridListTileBar';


const width_proportion = '85%';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: "transparent",
        marginTop: "15vh",
    },
    gridList: {
        width: width_proportion,

    },
    subheader: {
        width: "100%"
    }
});

const tileData = [
    {
        img: "https://material-ui.com/static/images/grid-list/breakfast.jpg",
        title: "Breakfast",
        author: "jill111",
        cols: 2,
        featured: true
    },
    {
        img: "https://material-ui.com/static/images/grid-list/burgers.jpg",
        title: "Tasty burger",
        author: "director90"
    },
    {
        img: "https://material-ui.com/static/images/grid-list/camera.jpg",
        title: "Camera",
        author: "Danson67"
    },
    {
        img: "https://material-ui.com/static/images/grid-list/morning.jpg",
        title: "Morning",
        author: "fancycrave1",
        featured: true
    },
    {
        img: "https://material-ui.com/static/images/grid-list/hats.jpg",
        title: "Hats",
        author: "Hans"
    },
    {
        img: "https://material-ui.com/static/images/grid-list/honey.jpg",
        title: "Honey",
        author: "fancycravel"
    },
    {
        img: "https://material-ui.com/static/images/grid-list/vegetables.jpg",
        title: "Vegetables",
        author: "jill111",
        cols: 2
    },
    {
        img: "https://material-ui.com/static/images/grid-list/plant.jpg",
        title: "Water plant",
        author: "BkrmadtyaKarki"
    },
    {
        img: "https://material-ui.com/static/images/grid-list/mushroom.jpg",
        title: "Mushrooms",
        author: "PublicDomainPictures"
    },
    {
        img: "https://material-ui.com/static/images/grid-list/olive.jpg",
        title: "Olive oil",
        author: "congerdesign"
    },
    {
        img: "https://material-ui.com/static/images/grid-list/star.jpg",
        title: "Sea star",
        cols: 2,
        author: "821292"
    },
    {
        img: "https://material-ui.com/static/images/grid-list/bike.jpg",
        title: "Bike",
        author: "danfador"
    }
];


export default function ProjectGrid() {
    const classes = useStyles();

    const [isFlipped, setFlipped] = useState();

    const handleClick = (e) => {
        e.preventDefault();
        if (isFlipped) {
            setFlipped(false)
        } else {
            setFlipped(true)
        }
    }

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>

                {tileData.map((tile) => (
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>by: {tile.author}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} onClick={handleClick}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                        <GridListTile>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={"BACK"}
                                subtitle={<span>by: {tile.author}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} onClick={handleClick}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    </ReactCardFlip>
                ))}
            </GridList>
        </div>
    );
}