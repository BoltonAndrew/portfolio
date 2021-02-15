import React from 'react';
import styled from 'styled-components';
import background from '../assets/background.jpeg'
import BaronBlack from '../assets/fonts/Baron Neue Italic.otf'

const Home = () => {
    return(
        <Container>
                <H2Container>Andrew Bolton</H2Container>
                <H1Container>JUNIOR SOFTWARE DEVELOPER</H1Container>
                <H3Container>Full-Stack Web Developer</H3Container>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 92vh;
    width: 100vw;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const H1Container = styled.h1`
@font-face {
    font-family: 'Baron';
    src: local('Baron'),
    url(${BaronBlack}) format('otf');
    font-weight: 300;
    font-style: normal;
}
    font-family: 'Baron';
    color: #020202;
    margin: 0;
    position: relative;
    bottom: 3vh;
`;

const H2Container = styled.h2`
@font-face {
    font-family: 'Baron';
    src: local('Baron'),
    url(${BaronBlack}) format('otf');
    font-weight: 300;
    font-style: normal;
}
    font-family: 'Baron';
    color: #020202;
    margin: 0;
    position: relative;
    bottom: 3vh;
`;

const H3Container = styled.h3`
@font-face {
    font-family: 'Baron';
    src: local('Baron'),
    url(${BaronBlack}) format('otf');
    font-weight: 300;
    font-style: normal;
}
    font-family: 'Baron';
    color: #020202;
    margin: 0;
    position: relative;
    bottom: 3vh;
`;

export default Home;