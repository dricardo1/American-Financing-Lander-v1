import React from 'react';
import { Container, HeroH1, HeroH2, HeroP, EZapply, VisaForm, EmailForm, FormContainer } from './heroElements';
import Navbar from '../Navbar';

const Hero = () => {
    return (
        <Container>
            <Navbar/>
            <HeroH1>AMERICAN FINANCING</HeroH1>
            <HeroH2>Find your perfect home loan in <span className="green"> MINUTES</span> </HeroH2>
            <FormContainer>
            <EZapply>
            <HeroP>EASY online application takes as little as <span className="green">5 MINUTES</span> to complete!</HeroP>
            </EZapply>
            <VisaForm></VisaForm>
            <EmailForm></EmailForm>
            </FormContainer>
        </Container>
    )
}

export default Hero
