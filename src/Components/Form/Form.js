import React from 'react'

import { Box } from 'rebass'
import styles from './Form.module.css'

import { TextField, InputBase, InputLabel, fade, withStyles } from '@material-ui/core';
import SubmitButton from '../Button/Button'
import Input from '../Input/Input'

const BootstrapInput = withStyles(theme => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #000000',
      fontSize: 16,
      width: '200px',
      padding: '10px 20px 10px 20px',
    },
}))(InputBase);

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            success: null,
        }
    }

    componentDidMount() {

    }

    // include submit button press

    render() {
        return(
            <Box width={[ 1, 1, 1 / 2 ]}>
                <form className={styles.formBackground}>
                    <h2>Hack UCI Application</h2>
                    <Input id="name-input" rows="1">Name</Input>
                    <Input id="email-input" rows="1">Email</Input>
                    <Input id="funfact-input" rows="3">Fun Fact</Input>

                    <SubmitButton />
                </form>
            </Box>
        )
    }
}

export default Form