import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { 
    emailChanged, 
    passwordChanged, 
    loginUser 
} from '../actions';

class LoginForm extends Component {

    onEmailChanged(text) {
        this.props.emailChanged(text);
    }

    onPasswordChanged(text) {
        this.props.passwordChanged(text);
    }

    onLoginPressed() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                    {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner />;
        } 

        return (
            <Button 
                title="Log In"
                onPress={this.onLoginPressed.bind(this)}
            />
        );
    }

    render() {
        const { email, password } = this.props;

        console.log(this.props);

        return (
            <Card>
                <CardSection>
                    <Input
                        value={email}
                        label={'Email'}
                        placeholder={'email@gmail.com'}
                        onChangeText={this.onEmailChanged.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        value={password}
                        secureTextEntry
                        label={'Password'}
                        placeholder={'password'}
                        onChangeText={this.onPasswordChanged.bind(this)}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            
                
            </Card>

        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = (state) => { 
    return {
        email: state.auth.email, 
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };  
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
