import * as React from 'react';
import { AppBar, Container, Toolbar, IconButton, Typography, Box, Button, Paper, Grid } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    mainFeaturePost: {
        position: "relative",
        top: 64,
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, .3)"
    },
    mainFeaturePostContent: {
        position: "relative",
        paddingLeft: theme.spacing(5),
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8)
    }
}))

function App() {
    const {title, menuButton, mainFeaturePost, mainFeaturePostContent, overlay} = useStyles();
    return (
        <>
            <header>
                <AppBar position="fixed">
                    <Container fixed>
                        <Toolbar>
                            <IconButton color="inherit" className={menuButton}>
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" className={title}>Material-UI</Typography>
                            <Box className={menuButton}>
                                <Button color="inherit" variant="outlined">Log In</Button>
                            </Box>
                            <Button color="secondary" variant="contained">Sign In</Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            </header>
            <main>
                <Paper
                    className={mainFeaturePost}
                    style={{backgroundImage: `url(https://source.unsplash.com/random)`}}
                >
                    <Container fixed>
                        <div className={overlay}></div>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={mainFeaturePostContent}>
                                    <Typography
                                        component="h1"
                                        variant="h3"
                                        color="inherit"
                                        gutterBottom
                                    >
                                        Material UI
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        color="inherit"
                                        paragraph
                                    >
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, assumenda!
                                    </Typography>
                                    <Button variant="contained" color="secondary">
                                        Learn More
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </main>
        </>
    );
}

export default App;
