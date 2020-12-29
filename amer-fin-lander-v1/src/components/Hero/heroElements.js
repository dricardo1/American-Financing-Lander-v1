import styled from 'styled-components';
import bgImage from '../../img/lander.png';

export const Container = styled.div`
    height: 100vh;
    width: auto;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${bgImage});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #000;
`;

export const HeroH1 = styled.h1`
    font-size: 6rem;
    font-weight: 700;
    display: flex;
    margin-top: 3.25rem;
    margin: 4rem 0 .5rem 0;
    text-align: center;
`;

export const HeroH2 = styled.h2`
    font-size: 2.25rem;
    font-family: 'Lato';
    font-weight: 700;
    display: flex;
    text-align: center;
    margin: 0;
    letter-spacing: 1px;
`;

export const HeroP = styled.p`
    font-size: 1.75rem;
    font-family: 'Lato';
    font-weight: 700;
    text-align: center;
`;

export const FormContainer = styled.div`
    height: 100%;
    width: auto;
    margin-top: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const EZapply = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1rem;
    padding: 1em;
    background: rgba( 255, 255, 255, 0.15 );
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 22px;
    width: 310px;
    height: 200px;
    position: relative;
`;

export const VisaForm = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1rem;
    padding: 1em;
    background: rgba( 255, 255, 255, 0.15 );
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 22px;
    width: 310px;
    height: 200px;
    position: relative;
`;

export const EmailForm = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1rem;
    padding: 1em;
    background: rgba( 255, 255, 255, 0.15 );
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 22px;
    width: 310px;
    height: 200px;
    position: relative;
`;