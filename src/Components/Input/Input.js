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

const LabelText = withStyles(() => ({
    root: {
      fontSize: 20,
      fontWeight: 900,
      color: 'black',
    },
}))(InputLabel);

class InputForm extends React.Component {
    constructor(props) {
        super(props) 
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const text = event.target.value;
        this.props.onChange(this.props.id, text);
    }

    render() {
        return(
            <FormControl className={styles.form} error={this.props.error}>
                <LabelText shrink htmlFor={this.props.id}>
                    {this.props.children}
                </LabelText>
                <TextInput 
                    placeholder={this.props.children} 
                    id={this.props.id} 
                    multiline 
                    rows={this.props.rows} 
                    onChange={this.handleChange} 
                    value={this.props.value}
                    error={this.props.error}/>
            </FormControl>
        )
    }
}

export default InputForm