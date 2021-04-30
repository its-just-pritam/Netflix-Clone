import { React, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function SignUp () {

    const history = useHistory();
    const  { firebase } = useContext(FirebaseContext);
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignUp = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => {
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1
                }).then(() => {
                    history.push(ROUTES.BROWSE);
                })
            })
            .catch((error) => {
                setFirstName('');
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error data-testid="error">{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignUp} method="POST">

                        <Form.Input placeholder="First Name" type="text" value={firstName}
                        onChange={({target}) => setFirstName(target.value)} />

                        <Form.Input placeholder="Email address" type="email" value={emailAddress}
                        onChange={({target}) => setEmailAddress(target.value)} />

                        <Form.Input placeholder="Password" type="password" autoComplete="off" value={password}
                        onChange={({target}) => setPassword(target.value)} />

                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign Up
                        </Form.Submit>

                        <Form.Text>
                            Already a user? <Form.Link to={ROUTES.SIGN_UP}>Sign in now.</Form.Link>
                        </Form.Text>

                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                        </Form.TextSmall>

                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}