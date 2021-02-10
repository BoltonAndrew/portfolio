import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import gitLogo from '../assets/git.png';
import linkedInLogo from '../assets/linkedIn.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFunc = () => {
        setIsOpen(true);
    };

    return(
        <Container>
            <ImgContainer>
                <LinkImgContainer to='/'><ImgItem src={logo} alt='AJB Logo with link to home'/></LinkImgContainer>
            </ImgContainer>
            <NavContainer>
                <LinkContainer to='/about'>About</LinkContainer>
                <LinkContainer to='/projects'>Projects</LinkContainer>
                <AnchorContainer href='mailto:boltonandrew@live.co.uk'>Contact</AnchorContainer>
            </NavContainer>
            <SocialContainer>
                <a href='https://www.github.com/BoltonAndrew'><SocialImg src={gitLogo} alt='GitHub link'/></a>
                <a href='https://www.linkedin.com/in/andy-bolton-039437147/'><SocialImg src={linkedInLogo} alt='LinkedIn link'/></a>
            </SocialContainer>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    height: 8vh;
    background-color: #fefefe;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 0 2px 2px -2px;
`;
const ImgContainer = styled.div`
    width: 20vw;
    height: 6vh;
    position: relative;
    top: 1vh;
`;
const LinkImgContainer = styled(Link)`
    &:active {
        background-color: #fefefe;
    };
`;
const ImgItem = styled.img`
    height: 6vh;
    width: 6vh;
`;
const NavContainer = styled.nav`
    width: 60vw;
    height: 6vh;
    position: relative;
    top: 1vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
`;
const LinkContainer = styled(Link)`
    text-decoration: none;
    color: #020202;
    &:active {
        background-color: #fefefe;
    };
    margin-left: 2vw;
`;
const AnchorContainer = styled.a`
    text-decoration: none;
    color: #020202;
    &:active {
        background-color: #fefefe;
    };
    margin-left: 2vw;
`;
const SocialContainer = styled.nav`
    width: 20vw;
    height: 3vh;
    position: relative;
    top: 4vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
const SocialImg = styled.img`
    height: 3vh;
    width: 3vh;
`;

export default Navbar;