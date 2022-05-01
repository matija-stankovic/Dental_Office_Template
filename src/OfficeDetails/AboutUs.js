import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import office from "../Assets/Office.jpg"
import { useHistory } from "react-router-dom";
import Olja from "../Assets/Oleg.jpg";
import Bato from "../Assets/Bato.jpg";
import Ceca from "../Assets/Ceca.jpg";
import map from "../Assets/map.png"


const AboutUs = () => {
    let history = useHistory();
    const cls = useStyles()
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                backgroundColor: color,
                height: 3,
                width:"40vh",
                borderRadius:"50%"
            }}
        />
    );
    return (
        <div className={cls.root}>
            <CssBaseline />
            <Grid className={cls.office}
                  style={{backgroundImage:`url(${office})`}}>
                <Grid item direction={'row'} xs={12}>
                    <Grid container className={cls.squareTop}>
                        <Button className={cls.smallButton} onClick={() => history.push("./")}>Home</Button>
                        <Typography className={cls.detailTxt}>|</Typography>
                        <Button className={cls.smallButton} onClick={() => history.push("./Usluge")}>Usluge</Button>
                        <Typography className={cls.detailTxt}>|</Typography>
                        <Button className={cls.smallButton} onClick={() => history.push("./Kontakt")}>Kontakt</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className={cls.squareMiddle}></Grid>
            <Grid container
                  justifyContent={"center"}
                  alignItems={"center"}
                  direction={"column"}
                  className={cls.container}
                  style={{ backgroundColor:"whitesmoke" }}
            >
                <Grid item xs={12}>
                    <Typography className={cls.coverTxt}>Ko smo mi?</Typography>
                </Grid>

                <Grid item xs={12}
                      container
                      direction={"column"}
                      alignItems="center"
                      justify="center">
                    <img src={Bato} width={"400vh"} height={"400vh"} className={cls.image}/>
                    <Typography className={cls.nameTxt}>Dr. Milutin "Bato" Stankovic</Typography>
                    <ColoredLine color="orange" />
                    <Typography className={cls.descriptionTxt}>Ovde je Dr. zavrsio skolu</Typography>
                    <Typography className={cls.descriptionInTxt}>Ovde je Dr. dobio nagrade</Typography>
                    <Typography className={cls.descriptionInTxt}>Ovo je u cemo je najbolji</Typography>
                </Grid>


                <Grid item xs={12}
                      container
                      direction={"column"}
                      alignItems="center"
                      justify="center">
                    <img src={Olja} width={"400vh"} height={"400vh"} className={cls.image2}/>
                    <Typography className={cls.nameTxt}>Dr. Oleg Stankovic</Typography>
                    <ColoredLine color="orange" />
                    <Typography className={cls.descriptionTxt}>Ovde je Dr. zavrsio skolu</Typography>
                    <Typography className={cls.descriptionInTxt}>Ovde je Dr. dobio nagrade</Typography>
                    <Typography className={cls.descriptionInTxt}>Ovo je u cemo je najbolji</Typography>
                </Grid>


                <Grid item xs={12}
                      container
                      direction={"column"}
                      alignItems="center"
                      justify="center">
                    <img src={Ceca} width={"400vh"} height={"400vh"} className={cls.image2}/>
                    <Typography className={cls.nameTxt}>Svetlana Stankovic</Typography>
                    <ColoredLine color="orange" />
                    <Typography className={cls.descriptionTxt}>Ovde je Dr. zavrsio skolu</Typography>
                    <Typography className={cls.descriptionInTxt}>Ovde je Dr. dobio nagrade</Typography>
                    <Typography className={cls.descriptionInTxt}>Ovo je u cemo je najbolji</Typography>
                </Grid>
                <Grid container className={cls.squareBottom}></Grid>
            </Grid>
            <Grid container
                  justifyContent={"center"}
                  alignItems={"center"}
                  direction={"column"}
                  className={cls.container}
                  style={{ backgroundColor:"whitesmoke" }}
            >
                <Grid item xs={12}>
                    <Typography className={cls.coverTxt}>Gde da nas Nadjete?</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography className={cls.descriptionTxt}>Kliknite na mapu za Google Maps</Typography>
                    <ColoredLine color="orange" />
                    <a href="https://www.google.com/maps/dir//42.3517045,19.2208249/@42.3517509,19.2208829,159m/data=!3m1!1e3!4m2!4m1!3e2">
                        <img src={map} width={"100%"} height={"450vh"} className={cls.mapImage}/>
                    </a>

                    <Typography className={cls.nameTxt}>Mahala, Prva Ulica 4/6</Typography>
                    <ColoredLine color="orange" />
                    <Typography className={cls.descriptionTxt}>Podgorica, Crna Gora</Typography>
                    <Typography className={cls.descriptionInTxt}>(Izlaz kod stovarista)</Typography>
                </Grid>
                <Grid container className={cls.squareBottom}></Grid>
            </Grid>
        </div>
    );
};
export default AboutUs;

const useStyles = makeStyles((theme) => ({
    container: {
        height:"100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        resizeMode: 'contain'
    },
    coverTxt: {
        color: "gray",
        fontFamily: "Cinzel",
        fontSize: "450%",
        textAlign:"center",
        marginTop:"5vh"
    },
    nameTxt: {
        color: "gray",
        fontFamily: "Cinzel",
        fontSize: "200%",
        textAlign:"center"
    },
    image:{
        marginTop:"5vh"
    },
    image2:{
        marginTop:"5vh"
    },
    mapImage:{
        marginTop:"5vh",

    },
    office: {
        height:"70vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        resizeMode: 'contain'
    },
    root: {
    },
    squareTop: {
        width: "100%",
        height: "50px",
        backgroundColor: "gray",
        opacity:"80%",
        position:"fixed"
    },
    squareMiddle: {
        width: "100%",
        height: "7vh",
        backgroundColor: "gray",
        opacity:"60%"
    },
    squareBottom: {
        width: "100%",
        height: "10vh",
        backgroundColor: "gray",
        opacity:"0%"
    },
    detailTxt: {
        fontFamily: "Cinzel",
        color: "black",
        fontSize: "35px",

    },
    smallButton: {
        color: "white",
        fontSize: "130%",
        fontFamily: "Cinzel",
        margin: 5,
    },
    descriptionTxt: {
        color: "gray",
        fontFamily: "Cinzel",
        fontSize: "120%",
        textAlign:"center",
        marginTop:"1vh"
    },
    descriptionInTxt: {
        color: "gray",
        fontFamily: "Cinzel",
        fontSize: "120%",
        textAlign:"center",
    },

}));