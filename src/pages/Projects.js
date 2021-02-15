import React from 'react';
import styled from 'styled-components';
import background from '../assets/ypj2WC.png';
import pokemon from '../assets/pokemon.PNG';
import toptrumps from '../assets/TopTrumps.PNG'
import collision from '../assets/collision.PNG'
import tictactoe from '../assets/tictactoe.PNG';

const Projects = () => {
    return(
        <Container>
            <h1>Active Projects</h1>
            <AContainer href='https://boltonandrew.github.io/pokemonClone/'><ImgContainer src={pokemon} alt='link to pokemon site'/> Pokemon Team Builder</AContainer>
            <AContainer href='https://boltonandrew.github.io/topTrumps/'><ImgContainer src={toptrumps} alt='link to top trumps site'/> Pokemon Top Trumps</AContainer>
            <AContainer href='https://boltonandrew.github.io/retailSim/'><ImgContainer src={collision} alt='link to collision sim site'/> Collision Sim</AContainer>
            <AContainer href='https://boltonandrew.github.io/TicTacToe/'><ImgContainer src={tictactoe} alt='link to Tic Tac Toe site'/> Tic Tac Toe</AContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    background-image: url(${background});
    background-repeat: repeat;
    background-position: center;
`;

const ImgContainer = styled.img`
    height: 45vw;
    width: 60vw
`;

const AContainer = styled.a`
    text-decoration: none;
    color: #020202;
    font-size: 3vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Projects;