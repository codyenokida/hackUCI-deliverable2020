import React from 'react'

import { Box } from 'rebass'
import styles from './Form.module.css'

import SubmitButton from '../Button/Button'
import Input from '../Input/Input'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            success: false,
            name: "",
            email: "",
            funfact: ""
        }
        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.name = ''
    }
    

    // Handle State Change on Forms
    handleChange(event, field, value) {
        this.setState({ [field]: value });
    }

    // Submit Form if True
    submitForm() {
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email) && this.state.name && this.state.funfact) { 
            console.log("true")
            fetch(`https://hack-uci-test-endpoint.herokuapp.com/test?name=${this.state.name}&email=${this.state.email}&funfact=${this.state.funfact}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
            this.setState({
                name: "",
                email: "",
                funfact: ""
            })
        }
        else
            console.log("false")
    }

    render() {
        return(
            <Box width={[ 1, 1, 1 / 2 ]}>
                <form className={styles.formBackground}>
                    <h2>Hack UCI Application</h2>
                    <Input id="name" rows="1" onChange={this.handleChange} inputRef={el => this.name = el} value={this.state.name}>Name</Input>
                    <Input id="email" rows="1" onChange={this.handleChange} value={this.state.email}>Email</Input>
                    <Input id="funfact" rows="3" onChange={this.handleChange} value={this.state.funfact}>Fun Fact</Input>

                    <SubmitButton onClick={this.submitForm}>Submit</SubmitButton>
                </form>
            </Box>
        )
    }
}

export default Form