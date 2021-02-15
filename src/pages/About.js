import React from 'react';
import styled from 'styled-components';
import background from '../assets/ypj2WC.png'
import BaronBlack from '../assets/fonts/Baron Neue Italic.otf'

const About = () => {
    return(
        <Container>
            <H1Container>Journey In To Coding</H1Container>
            <PContainer>I was inspired to pursue software development initially because I was interested in game development, that interest has generally shifted to all things coding over time and now the most interesting thing about software development for me is the logical thinking and problem solving aspect. Originally, my aim with Code Nation was to increase my coding knowledge and potentially apply it to my own business. However, as I've progressed through the course I have come to love the teaching aspect and helping others with their own code as it is incredibly rewarding, it also adds to my own knowledge and encourages me to think of logic and problem solving from someone else's perspective.</PContainer>
            <PContainer>I first started coding in LUA and C++, although I only know the fundamentals of those languages. I now have a good working knowledge of HTML, CSS and Javascript, along with MongoDB, Mongoose and Express. I have been working mainly on full stack web development and I've just finished a group full stack address book that links to a MongoDB that my team and I had separated in such a way that we all where able to work on front and back end coding. I am also working on a number of side projects including an e-learning web platform similar to Moodle that tries to address some of the issues that are being raised online with mainstream e-learning platforms.</PContainer>
            <PContainer>The logical thinking and problem solving are easily my favourite aspects of coding, closely followed by teaching and helping other would be software engineers. My current interests outside of coding include video games and spending time with my wife and kids. I have found that personal coding has started to become a major aspect of my free time since taking on the course. I believe a company would benefit from employing me as I have shown, throughout this course, that I am quick to pick up new concepts and languages and have shown that my technical communication skills have been invaluable in group based projects and explaining my own work. I also believe that my ability to plan logically would be of great benefit to a dev team.</PContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-image: url(${background});
    background-repeat: repeat;
    background-position: center;
`;

const H1Container = styled.h1`
    color: #fefefe;
    text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
    @font-face {
        font-family: 'Baron';
        src: local('Baron'),
        url(${BaronBlack}) format('otf');
        font-weight: 300;
        font-style: normal;
    }
        font-family: 'Baron';
`;

const PContainer = styled.p`
color: #fefefe;
text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
@font-face {
    font-family: 'Baron';
    src: local('Baron'),
    url(${BaronBlack}) format('otf');
    font-weight: 300;
    font-style: normal;
}
    font-family: 'Baron';
`;

export default About;