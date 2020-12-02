import React, { useState } from 'react';
import { Button, TextField, Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

const width_proportion = '100%';

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // flexWrap: 'wrap',
        width: width_proportion,
        marginLeft: "auto",
        marginRight: "auto",
    },
    paper: {
        backgroundColor: "white",
        padding: 10
    },
    content: {
        marginTop: 5,
        marginBottom: 5
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        marginRight: "auto",
        marginLeft: 5
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    contactList: {

        marginTop: theme.spacing(3),
        marginLeft: "auto",

    }
}));


export default function SignUp() {
    const classes = useStyles();


    const [contactInfoFormState, setContactInfoFormState] = useState({
        from_name: "",
        email: "",
        subject: "",
        message: "",
        recaptchaValue: ""
    })


    const inputChange = event => {
        const { name, value } = event.target;
        setContactInfoFormState({
            ...contactInfoFormState,
            [name]: value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        emailjs.sendForm(
            process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
            process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
            event.target,
            process.env.REACT_APP_EMAIL_JS_USER_ID
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setContactInfoFormState({
            from_name: "",
            email: "",
            subject: "",
            message: "",
        })
    }


    return (
        <div className={classes.root}>
            <Paper square elevation={3} className={classes.paper}>
                <Typography variant="h3" className={classes.content}>
                    Contact Me
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <form className={classes.form} onSubmit={handleFormSubmit} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="from_name"
                                        label="Name"
                                        name="from_name"
                                        autoComplete="name"
                                        onChange={inputChange}
                                        value={contactInfoFormState.from_name}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        name="email"
                                        autoComplete="email"
                                        onChange={inputChange}
                                        value={contactInfoFormState.email}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="subject"
                                        label="Subject"
                                        name="subject"
                                        autoComplete="subject"
                                        onChange={inputChange}
                                        value={contactInfoFormState.subject}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="message"
                                        label="Message"
                                        name="message"
                                        autoComplete="message"
                                        onChange={inputChange}
                                        value={contactInfoFormState.message}
                                        multiline={true}
                                        rows="6"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <ReCAPTCHA
                                        sitekey={process.env.REACT_APP_RECAPTCHA_CLIENT_SITE_KEY}
                                        onChange={inputChange}
                                        value={contactInfoFormState.recaptchaValue}
                                    />
                                </Grid>
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                value="register"
                            >
                                Send
                            </Button>
                        </form>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={3} className={classes.contactList}>
                            <Grid item xs={12} >

                                <Grid container alignItems="baseline" spacing={3}>
                                    <Grid item xs={2}>
                                        <Button
                                            color="inherit"
                                            target="_blank"
                                            href="https://github.com/crowandrew"
                                        >
                                            <Typography variant="h6">
                                                <i className="fab fa-2x fa-github-square"></i>
                                            </Typography>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="subtitle1">
                                            github.com/crowandrew
                                            </Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item xs={12} >

                                <Grid container alignItems="baseline" spacing={3}>
                                    <Grid item xs={2}>
                                        <Button
                                            color="inherit"
                                            target="_blank"
                                            href="https://www.linkedin.com/in/crow-andrew"
                                        >
                                            <Typography variant="h6" color="primary">
                                                <i className="fab fa-2x fa-linkedin"></i>
                                            </Typography>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="subtitle1">
                                            linkedin.com/in/crow-andrew
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} >

                                <Grid container alignItems="baseline" spacing={3}>
                                    <Grid item xs={2}>
                                        <Button
                                            color="inherit"
                                            target="_blank"
                                            href="mailto:andrew@crow.me"
                                        >
                                            <Typography variant="h6" >
                                                <i className="fas fa-2x fa-envelope"></i>
                                            </Typography>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="subtitle1">
                                            andrew@crow.me
                                    </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} >

                                <Grid container alignItems="baseline" spacing={3}>
                                    <Grid item xs={2}>
                                        <Button
                                            color="inherit"
                                            target="_blank"
                                            href="tel:775-560-8894"
                                        >
                                            <Typography variant="h6" >
                                                <i className="fas fa-2x fa-phone-square"></i>
                                            </Typography>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="subtitle1">
                                            775-560-8894
                                    </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Paper>
        </div >
    );
}