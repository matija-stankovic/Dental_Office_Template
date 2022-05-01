import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Dark from "../Assets/Black.jpg"
import { useHistory } from "react-router-dom";
import Endo from "../Assets/Modeli/Endodoncija.jpg";
import Estetika from "../Assets/Modeli/Estetika.jpg";
import Fileri from "../Assets/Modeli/Fileri.jpg";
import Implant from "../Assets/Modeli/Implant.jpg";
import Hirurgija from "../Assets/Modeli/Hirurgija.jpg";
import Izbeljivanje from "../Assets/Modeli/Izbeljivanje.jpg";
import Konzervativa from "../Assets/Modeli/Konzervativa.jpg";
import Ortodoncija from "../Assets/Modeli/Ortodoncija.jpg";
import Protetika from "../Assets/Modeli/Protetika.jpg"


const Services = () => {
    let history = useHistory();
    const cls = useStyles()
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                backgroundColor: "orange",
                height: 3,
                width:"20vh",
                borderRadius:"50%"
            }}
        />
    );
    return (
        <div className={cls.root}>
            <CssBaseline />
            <Grid container className={cls.top}>
                <Grid container item xs={12} className={cls.squareTop}>
                    <Button className={cls.smallButton} onClick={() => history.push("./")}>Home</Button>
                    <Typography className={cls.detailTxt}>|</Typography>
                    <Button className={cls.smallButton} onClick={() => history.push("./O_Nama")}>O nama</Button>
                    <Typography className={cls.detailTxt}>|</Typography>
                    <Button className={cls.smallButton} onClick={() => history.push("./Kontakt")}>Kontakt</Button>
                </Grid>
            </Grid>

            <Grid container
                  alignContent='flex-start' alignItems='flex-start' justify='flex-start'
                  alignItems="center"
                  justify = "center"
                  className={cls.container}
                  style={{ backgroundImage: `url(${Dark})` }}>

                <Grid item xs={12}>
                    <Typography className={cls.coverTxt}>Katalog Usluga</Typography>
                </Grid>

                <Grid item xs={12} md={6} lg={4}
                      container
                      direction={"column"}
                      alignItems="center"
                      justify="center"
                >
                    <img src={Endo} className={cls.image} />
                    <Typography className={cls.nameTxt}>Endodoncija</Typography>
                    <ColoredLine />
                    <Typography className={cls.descriptionTxt}>Ovde nesto sto opisuje kvar</Typography>
                    <Typography className={cls.descriptionInTxt}>Ovde kazes dapostoji odredjeno resenje</Typography>
                    <Typography className={cls.descriptionInTxt}>Mi to zavrsavamo bez problema</Typography>
                </Grid>
                <Grid item xs={12} md={6}  lg={4}
                      container
                      direction={"column"}
                      alignItems="center"
                      justify="center">
                    <img src={Estetika} className={cls.image}/>
                    <Typography className={cls.nameTxt}>Estetski rad</Typography>
                    <ColoredLine />
                    <Typography className={cls.descriptionTxt}>Ovde nesto sto opisuje kvar</Typography>
                    <Typography className={cls.descriptionInTxt}>Ovde kazes dapostoji odredjeno resenje</Typography>
                    <Typography className={cls.descriptionInTxt}>Mi to zavrsavamo bez problema</Typography>
                </Grid>
                <Grid item xs={12} md={6}  lg={4}
                      container
                      direction={"column"}
                      alignItems="center"
                      justify="center">
                    <img src={Izbeljivanje} className={cls.image}/>
                    <Typography className={cls.nameTxt}>Izbjeljivanje zuba</Typography>
                    <ColoredLine />
                    <Typography className={cls.descriptionTxt}>Ovde nesto sto opisuje kvar</Typography>
                    <Typography className={cls.descriptionInTxt}>Ovde kazes dapostoji odredjeno resenje</Typography>
                    <Typography className={cls.descriptionInTxt}>Mi to zavrsavamo bez problema</Typography>
                </Grid>
                <Grid item xs={12} md={6}   lg={4}
                      container
                      direction={"column"}
                      alignItems="center"
                      justify="center">
                    <img src={Implant} className={cls.image}/>
                    <Typography className={cls.nameTxt}>Implantologija</Typography>
                    <ColoredLine />
                    <Typography className={cls.descriptionTxt}>Ovde nesto sto opisuje kvar</Typography>
                    <Typography className={cls.descriptionInTxt}>Ovde kazes dapostoji odredjeno resenje</Typography>
                    <Typography className={cls.descriptionInTxt}>Mi to zavrsavamo bez problema</Typography>
                </Grid>
                <Grid item xs={12} md={6}   lg={4}
                      container
                      direction={"column"}
                      alignItems="center"
                      justify="center">
                    <img src={Hirurgija} className={cls.image}/>
                    <Typography className={cls.nameTxt}>Oralna hirurgija</Typography>
                    <ColoredLine />
                    <Typography className={cls.descriptionTxt}>Ovde nesto sto opisuje kvar</Typography>
                    <Typography className={cls.descriptionInTxt}>Ovde kazes dapostoji odredjeno resenje</Typography>
                    <Typography className={cls.descriptionInTxt}>Mi to zavrsavamo bez problema</Typography>
                </Grid>
                <Grid item xs={12} md={6}   lg={4}
                      container
                      direction={"column"}
                      alignItems="center"
                      justify="center">
                    <img src={Fileri} className={cls.image}/>
                    <Typography className={cls.nameTxt}>Hijaluronski fileri</Typography>
                    <ColoredLine />
                    <Typography className={cls.descriptionTxt}>Ovde nesto sto opisuje kvar</Typography>
                    <Typography className={cls.descriptionInTxt}>Ovde kazes dapostoji odredjeno resenje</Typography>
                    <Typography className={cls.descriptionInTxt}>Mi to zavrsavamo bez problema</Typography>
                </Grid>
                <Grid item xs={12} md={6}   lg={4}
                      container
                      direction={"column"}
                      alignItems="center"
                      justify="center">
                    <img src={Konzervativa} className={cls.image}/>
                    <Typography className={cls.nameTxt}>Konzervativa</Typography>
                    <ColoredLine />
                    <Typography className={cls.descriptionTxt}>Ovde nesto sto opisuje kvar</Typography>
                    <Typography className={cls.descriptionInTxt}>Ovde kazes dapostoji odredjeno resenje</Typography>
                    <Typography className={cls.descriptionInTxt}>Mi to zavrsavamo bez problema</Typography>
                </Grid>
                <Grid item xs={12} md={6}   lg={4}
                      container
                      direction={"column"}
                      alignItems="center"
                      justify="center">
                    <img src={Ortodoncija} className={cls.image}/>
                    <Typography className={cls.nameTxt}>Ortodoncija</Typography>
                    <ColoredLine />
                    <Typography className={cls.descriptionTxt}>Ovde nesto sto opisuje kvar</Typography>
                    <Typography className={cls.descriptionInTxt}>Ovde kazes dapostoji odredjeno resenje</Typography>
                    <Typography className={cls.descriptionInTxt}>Mi to zavrsavamo bez problema</Typography>
                </Grid>
                <Grid item xs={12} md={6}   lg={4}
                      container
                      direction={"column"}
                      alignItems="center"
                      justify="center">
                    <img src={Protetika} className={cls.image}/>
                    <Typography className={cls.nameTxt}>Protetika</Typography>
                    <ColoredLine />
                    <Typography className={cls.descriptionTxt}>Ovde nesto sto opisuje kvar</Typography>
                    <Typography className={cls.descriptionInTxt}>Ovde kazes dapostoji odredjeno resenje</Typography>
                    <Typography className={cls.descriptionInTxt}>Mi to zavrsavamo bez problema</Typography>
                </Grid>
                <Grid item xs={12} className={cls.squareBottom}></Grid>
            </Grid>
        </div>
    );
};
export default Services;

const useStyles = makeStyles((theme) => ({
    root: {
    },
    container: {
        height:"100%",
        width:"100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
    },
    top: {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        resizeMode: 'contain'
    },
    squareBottom: {
        width: "100%",
        height: "10vh",
        backgroundColor: "gray",
        opacity:"0%"
    },
    coverTxt: {
        color: "whitesmoke",
        fontFamily: "Cinzel",
        fontSize: "450%",
        marginTop:"10vh",
        textAlign:"center",
    },
    nameTxt: {
        color: "whitesmoke",
        fontFamily: "Cinzel",
        fontSize: "200%",
        textAlign:"center",
    },
    descriptionTxt: {
        color: "whitesmoke",
        fontFamily: "Cinzel",
        fontSize: "100%",
        textAlign:"center",
        marginTop:"3vh"
    },
    descriptionInTxt: {
        color: "whitesmoke",
        fontFamily: "Cinzel",
        fontSize: "100%",
        textAlign:"center",
    },
    squareTop: {
        position:"fixed",
        width: "100%",
        height: "50px",
        backgroundColor: "black",
        opacity:"80%",
    },
    image:{
        marginTop:"10vh",
        height:"35vh",
        width:"50vh",
        alignSelf:"center"
    },
    detailTxt: {
        fontFamily: "Cinzel",
        color: "lightgray",
        fontSize: "35px",
    },
    smallButton: {
        color: "white",
        fontSize: "130%",
        fontFamily: "Cinzel",
        margin: 5,
    },
}));
