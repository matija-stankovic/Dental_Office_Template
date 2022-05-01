import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grey from "../Assets/Grey.jpg"
import { useHistory } from "react-router-dom";


const Contact = () => {
    let history = useHistory();
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                backgroundColor: color,
                height: 1,
                width:"40vh",
                borderRadius:"100%",
                borderColor: color
            }}
        />
    );
    const SeperatorLine = ({ color }) => (
        <hr
            style={{
                backgroundColor: color,
                height: 1,
                width:"20vh",
                borderRadius:"50%",
                borderColor: color
            }}
        />
    );
    const cls = useStyles();
    return (
        <div className={cls.root}>
            <CssBaseline />
            <Grid
                container
                className={cls.container}
                alignItems={"center"}
                alignContent={"center"}
                direction={"column"}
                style={{ backgroundImage: `url(${Grey})` }}
            >

                <Grid container direction={'row'}>
                    <Grid container className={cls.squareTop}>
                    <Button className={cls.smallButton} onClick={() => history.push("./")}>Home</Button>
                    <Typography className={cls.detailTxt}>|</Typography>
                    <Button className={cls.smallButton} onClick={() => history.push("./Usluge")}>Usluge</Button>
                    <Typography className={cls.detailTxt}>|</Typography>
                    <Button className={cls.smallButton} onClick={() => history.push("./O_Nama")}>O nama</Button>
                    </Grid>
                </Grid>
                <Grid className={cls.square} direction={"column"}>
                    <Typography className={cls.contactBigTxt}>Kontakt</Typography>
                    <ColoredLine color="silver" />
                    <Typography className={cls.contactMediumTxt}>Telefon</Typography>
                    <Typography className={cls.contactSmallTxt}>+3816969696969</Typography>
                    <SeperatorLine color="gray" />
                    <Typography className={cls.contactMediumTxt}>Email</Typography>
                    <Typography className={cls.contactSmallTxt}>Ordinacija Placeholder</Typography>
                    <SeperatorLine color="gray" />
                    <Typography className={cls.contactMediumTxt}>Facebook</Typography>
                    <Typography className={cls.contactSmallTxt}>link.fb.com</Typography>
                    <SeperatorLine color="gray" />
                    <Typography className={cls.contactMediumTxt}>Instagram</Typography>
                    <Typography className={cls.contactSmallTxt}>link.ig.com</Typography>
                </Grid>


            </Grid>
        </div>

    );
};

export default Contact;

const useStyles = makeStyles((theme) => ({
    container: {
        height:"100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        resizeMode: 'contain'
    },
    square: {
        marginTop:"13vh",
        width: "50vh",
        height: "65vh",
        backgroundColor: "gray",
        opacity:"85%"
    },
    squareTop: {
        width: "100%",
        height: "50px",
        backgroundColor: "gray",
        opacity:"85%"
    },
    root: {
        maxWidth: '100%',
        width: '100vw',
    },
    coverTxt: {
        color: "gray",
        fontFamily: "Cinzel",
        fontSize: "5vw",
        marginRight:"10vh",
    },
    subTitleTxt: {
        fontFamily: "Orbitron",
        marginRight:"10vh",
        color: "White",
        fontSize: "4.5vw",
    },
    detailTxt: {
        fontFamily: "Cinzel",
        color: "black",
        fontSize: "35px",
    },
    contactBigTxt: {
        marginTop:"3vh",
        fontFamily: "Cinzel",
        color: "black",
        fontSize: "5vh",
        alignContent:"center",
        textAlign: 'center',
    },
    contactMediumTxt: {
        marginTop:"3vh",
        fontFamily: "Cinzel",
        color: "black",
        fontSize: "3vh",
        alignContent:"center",
        textAlign: 'center',
    },
    contactSmallTxt: {
        marginTop:"1vh",
        fontFamily: "Cinzel",
        color: "white",
        fontSize: "2vh",
        alignContent:"center",
        textAlign: 'center',
    },

    button: {
        marginTop: "35vh",
        borderRadius:50,
        width:"50%",
        backgroundColor:"#66cdaa",
        color: "white",
        fontSize: "1.8vw",
        fontFamily: "San Francisco",
        margin: 10,
    },
    smallButton: {
        color: "white",
        fontSize: "130%",
        fontFamily: "Cinzel",
        margin: 5,
    },
}));
