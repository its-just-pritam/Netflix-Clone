import React from 'react';
import { OptForm, Feature } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { FaqsContainer } from '../containers/faqs';

export default function Home () {
    return (
        <>
            <HeaderContainer >
                <Feature>
                    <Feature.Title>
                        Unlimited movies, TV shows and more.
                    </Feature.Title>
                    <Feature.Subtitle>
                        Watch anywhere. Cancel anytime.
                    </Feature.Subtitle>

                    <OptForm>
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
                        <OptForm.Break />
                        <OptForm.Input placeholder="Email Address" />
                        <OptForm.Button>Get Started</OptForm.Button>
                        <OptForm.Break />
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}