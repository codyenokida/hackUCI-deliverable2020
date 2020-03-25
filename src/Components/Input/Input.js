import React from 'react';
import { fade, withStyles, InputBase, InputLabel, FormControl } from '@material-ui/core';


import styles from './Input.module.css'

const TextInput = withStyles(theme => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
        },
    },
    input: {
      borderRadius: 10,
      position: 'relative',
      border: '1px solid black',
      fontSize: 16,
      fontWeight: 300,
      width: '100%',
      padding: '10px 12px 10px 12px',
      margin: '0 10px 20px 10px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
}))(InputBase);

const InputLabelText = withStyles(() => ({
    root: {
      fontSize: 20,
      fontWeight: 900,
      color: 'black',
    },
}))(InputLabel);

const test = ({ rows, id, children }) => {
    return(
        <FormControl className={styles.form}>
            <InputLabelText shrink htmlFor={id}>
                {children}
            </InputLabelText>
            <TextInput placeholder={children} id={id} multiline rows={rows}/>
        </FormControl>
    )
}

export default test