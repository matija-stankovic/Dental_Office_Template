import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useHistory } from "react-router-dom";
import coverImg from "../Assets/MainBackground.jpg";
import Title from "../Assets/title.png"


const NewHome = () => {
    let history = useHistory();
    const cls = useStyles()
    return (
        <div className={cls.root}>
            <CssBaseline />
            <Grid container className={cls.top}>
                <Grid container item xs={12} className={cls.squareTop}>
                        <Button className={cls.smallButton} onClick={() => history.push("./Usluge")}>Usluge</Button>
                        <Typography className={cls.detailTxt}>|</Typography>
                        <Button className={cls.smallButton} onClick={() => history.push("./O_Nama")}>O nama</Button>
                        <Typography className={cls.detailTxt}>|</Typography>
                        <Button className={cls.smallButton} onClick={() => history.push("./Kontakt")}>Kontakt</Button>
                </Grid>
            </Grid>
            <Grid
                container
                justifyContent={"center"}
                alignContent={"flex-start"}
                className={cls.container}
                style={{ backgroundImage: `url(${coverImg})` }}
            >
                <Grid item xs={2} lg={3}/>
                <Grid item xs={10} lg={7}>
                    <img src={Title} width={"80%"} height={"80%"} className={cls.titleImage}/>
                </Grid>

                <Grid item container xs={10} lg={6}>
                    <Button className={cls.button} onClick={() => history.push("./Usluge")}>Pogledajte Naše Usluge</Button>
                </Grid>
            </Grid>

        </div>
    );
};
export default NewHome;

const useStyles = makeStyles((theme) => ({
    container: {
        height:"100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        resizeMode: 'contain'
    },
    titleImage:{
        marginTop:"10vh",
    },
    top: {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        resizeMode: 'contain'
    },
    root: {
        maxWidth: '100%',
        width: '100vw',
    },
    squareTop: {
        width: "100%",
        height: "50px",
        position:"fixed"
    },
    detailTxt: {
        fontFamily: "Cinzel",
        color: "silver",
        fontSize: "35px",
    },
    smallButton: {
        color: "white",
        fontSize: "130%",
        fontFamily: "Cinzel",
        margin: 5,
    },
    button: {
        height:"9vh",
        marginTop:"20vh",
        borderRadius:50,
        width:"100%",
        backgroundColor:"orange",
        color: "white",
        fontSize: "19px",
        fontFamily: "San Francisco",
    },

}));
