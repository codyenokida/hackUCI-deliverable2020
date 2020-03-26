import React from 'react'

import { Box } from 'rebass'
import styles from './Form.module.css'

import SubmitButton from '../Button/Button'
import Input from '../Input/Input'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            name: "",
            email: "",
            funfact: "",
            name_error: false,
            email_error: false,
            funfact_error: false,
        }
        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    

    // Handle State Change on Forms
    handleChange(field, value) {
        this.setState({ [field]: value });

        // Check Name
        this.state.name ? this.setState({name_error: false}) : this.setState({name_error: true})

        // Check Fun Fact
        this.state.funfact ? this.setState({funfact_error: false}) : this.setState({funfact_error: true})

        // Check Email
        this.state.email && (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) ? this.setState({email_error: false}) : this.setState({email_error: true})
    }

    // Submit Form if True
    submitForm() {
        // Check Name
        this.state.name ? this.setState({name_error: false}) : this.setState({name_error: true})

        // Check Fun Fact
        this.state.funfact ? this.setState({funfact_error: false}) : this.setState({funfact_error: true})

        // Check Email
        this.state.email && (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) ? this.setState({email_error: false}) : this.setState({email_error: true})

        if (!this.state.email_error && !this.state.name_error && !this.state.funfact_error && this.state.name && this.state.funfact && this.state.email && (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email))) { 
            console.log("true")
            fetch(`https://hack-uci-test-endpoint.herokuapp.com/test?name=${this.state.name}&email=${this.state.email}&funfact=${this.state.funfact}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
            window.alert("successfully submitted!")
            this.setState({
                name: "",
                email: "",
                funfact: "",
                name_error: false,
                email_error: false,
                funfact_error: false,
            })
        }
    }

    render() {
        return(
            <Box width={[ 1, 1, 1 / 2 ]}>
                <form className={styles.formBackground}>
                    <h2>Hack UCI Application</h2>

                    <Input 
                        id="name" 
                        rows="1" 
                        onChange={this.handleChange} 
                        value={this.state.name}
                        error={this.state.name_error}>
                        Name
                    </Input>

                    <Input 
                        id="email" 
                        rows="1" 
                        onChange={this.handleChange} 
                        value={this.state.email}
                        error={this.state.email_error}>
                        Email
                    </Input>

                    <Input 
                        id="funfact" 
                        rows="3" 
                        onChange={this.handleChange} 
                        value={this.state.funfact}
                        error={this.state.funfact_error}>
                        Fun Fact
                    </Input>

                    <SubmitButton onClick={this.submitForm}>Submit</SubmitButton>
                </form>
            </Box>
        )
    }
}

export default Form