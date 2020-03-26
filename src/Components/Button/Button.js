import React from 'react'

import { Button, withStyles } from '@material-ui/core';

const CustomButton = withStyles({
    root: {
        background: 'linear-gradient(0deg, rgba(255,108,129,1) 0%, rgba(255,123,92,1) 100%)',
        borderRadius: 20,
        border: 0,
        color: 'white',
        height: 36,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        marginLeft: '40%'
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

class SubmitButton extends React.Component {
    constructor(props) {
        super(props)
        this.click = this.click.bind(this)
    }

    click() {
        this.props.onClick();
    }

    render() {
        return(
            <CustomButton onClick={this.click}>{this.props.children}</CustomButton>
        )
    }
}


export default SubmitButton