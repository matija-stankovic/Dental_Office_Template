import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import coverImg from "../Assets/MainBackground.jpg";
import { useHistory } from "react-router-dom";
import office from "../Assets/Office.jpg";

const HomeScreen = () => {
    let history = useHistory();
    const cls = useStyles()
    return (
        <div className={cls.root}>
            <CssBaseline />
            <Grid className={cls.office}
                  style={{backgroundImage:`url(${office})`}}>
                <Grid item direction={'row'} xs={12}>
                    <Grid container className={cls.squareTop}>
                        <Button className={cls.smallButton} onClick={() => history.push("./")}>Naslovna</Button>
                        <Typography className={cls.detailTxt}>|</Typography>
                        <Button className={cls.smallButton} onClick={() => history.push("./Usluge")}>Usluge</Button>
                        <Typography className={cls.detailTxt}>|</Typography>
                        <Button className={cls.smallButton} onClick={() => history.push("./O_Nama")}>O nama</Button>
                        <Typography className={cls.detailTxt}>|</Typography>
                        <Button className={cls.smallButton} onClick={() => history.push("./Kontakt")}>Kontakt</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                className={cls.container}
                direction={"column"}
                style={{ backgroundImage: `url(${coverImg})` }}
            >
                <Grid item container
                      justifyContent="flex-start"
                      alignItems="flex-start">
                        <Grid item xs={3} lg={1}>
                            <Button className={cls.smallButton} onClick={() => history.push("./")}>Home</Button>
                        </Grid>
                        <Grid item xs={3} lg={1}>
                            <Button className={cls.smallButton} onClick={() => history.push("./Usluge")}>Usluge</Button>
                        </Grid>
                        <Grid item xs={3} lg={1}>
                            <Button className={cls.smallButton} onClick={() => history.push("./O_Nama")}>O nama</Button>
                        </Grid>
                        <Grid item xs={3} lg={1}>
                            <Button className={cls.smallButton} onClick={() => history.push("./Kontakt")}>Kontakt</Button>
                        </Grid>
                </Grid>

                <Grid item >
                    <Grid container>
                        <Grid item xs={6}/>
                        <Grid item xs={6}>
                            <Typography className={cls.coverTxt}> Dental Office </Typography>
                        </Grid>
                        <Grid item xs={7}/>
                        <Grid item xs={5}>
                            <Typography className={cls.subTitleTxt}>
                                Stankovic
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item container>
                    <Grid item xs={3}/>
                    <Grid item xs={6}>
                        <Button className={cls.button} onClick={() => history.push("./Usluge")}>Pogledajte Naše Usluge</Button>
                    </Grid>
                </Grid>

            </Grid>

        </div>
    );
};
export default HomeScreen;

const useStyles = makeStyles((theme) => ({

    root: {
        maxWidth: '100%',
        width: '100vw',
    },
    office: {
        height:"70vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        resizeMode: 'contain'
    },
    squareTop: {
        position:"fixed",
        width: "100%",
        height: "7vh",
        backgroundColor: "black",
        opacity:"80%",
    },
    container: {
        height:"100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        resizeMode: 'contain',
        alignContent:"center"
    },
    coverTxt: {
        marginTop:"9vh",
        color: "gray",
        fontFamily: "Cinzel",
        fontSize: "5.5vw",
    },
    subTitleTxt: {
        width:"100%",
        fontFamily: "Orbitron",
        color: "White",
        fontSize: "4.5vw",
    },
    detailTxt: {
        fontFamily: "Cinzel",
        color: "lightgray",
        fontSize: "5vh",
    },
    button: {
        height:"10vh",
        marginTop:"10vh",
        borderRadius:50,
        width:"100%",
        backgroundColor:"orange",
        color: "white",
        fontSize: "1.8vw",
        fontFamily: "San Francisco",
    },
    smallButton: {
        color: "white",
        fontSize: "130%",
        fontFamily: "Cinzel",
        width:"100%",
        marginTop:"1vh"
    },
    squareBottom: {
        width: "100%",
        height: "10vh",
        backgroundColor: "gray",
    },
}));
