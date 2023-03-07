import React from 'react';
import classes from './Alert.module.css';

type Props = {
    message: string;
    onClose: any;
};

const Alert = ({ message, onClose }: Props) => {
    return (
        <div className={classes.alert}>
            <p className={classes.message}>{message}</p>
            <button className={classes.closeBtn} onClick={onClose}>
                X
            </button>
        </div>
    );
};

export default Alert;
