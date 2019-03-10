import React from 'react'
import { Lock } from 'styled-icons/material'
import { User } from 'styled-icons/boxicons-solid'
import userImage from '../../Assets/logouser.png'
import { Link } from 'react-router-dom'
import * as Styled from './styled.js'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        const { email, password } = this.state
        return(
            <React.Fragment>
                <Styled.GlobalStyles />
                <Styled.Box>
                <Styled.Avatar src={userImage} />
                <Styled.Header>Login</Styled.Header>
                <form autoComplete="off">
                    <Styled.InputBox>
                        <Styled.Icon>
                        <User size="22" />
                        </Styled.Icon>
                        <Styled.Wrapper>
                            <Styled.Input type="text" name="email" value={email} onChange={this.handleChange} required />
                            <Styled.Label>Adress e-mail</Styled.Label>
                        </Styled.Wrapper>
                    </Styled.InputBox>
                    <Styled.InputBox>
                        <Styled.Icon>
                            <Lock size="22" />
                        </Styled.Icon>
                        <Styled.Wrapper>
                            <Styled.Input type="password" name="password" value={password} onChange={this.handleChange} required />
                            <Styled.Label>Password</Styled.Label>
                        </Styled.Wrapper>
                    </Styled.InputBox>
                    <Styled.Button type="submit" name="" value="Sign in" />
                    <Styled.Link href="#">Lost your password?</Styled.Link>
                    <Link to='/register'>
                        <Styled.Link href="#">Don't have an account?</Styled.Link>
                    </Link>
                </form>
                </Styled.Box>
            </React.Fragment>
        )
    }
}

export default Login