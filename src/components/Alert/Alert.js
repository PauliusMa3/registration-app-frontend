import React, { useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    infoAlert: {
        "& .MuiAlert-message": {
            fontSize: 16
        }
    }
});

const Alert = (props) => {
    const [open, setOpen] = useState(true);
    const classes = useStyles();
    return (
        <Collapse in={open}>
            <MuiAlert
                className={classes.infoAlert}
                action={
                    <IconButton
                        aria-label='close'
                        color='inherit'
                        size='large'
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <CloseIcon fontSize='inherit' />
                    </IconButton>
                }
                elevation={6}
                variant='filled'
                fontSize={20}
                {...props}
            />
        </Collapse>
    );
};

export default Alert;
