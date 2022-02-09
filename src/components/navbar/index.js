import React from "react";
import './navbar.css';
import icon from '../imagens/icon.png';
import styled from "styled-components";
function Navbar (){
    return(
        <nav class="navbar navbar-expand-lg navbar-light navbar-site">
            <div class="container-fluid">
                <Icon src={icon}/>
                <a class="Tomate" href="#">Music</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Top Animes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Indicações</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Temporada Atual</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Genero</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

const Icon = styled.img`
 width : 25px;
 heigth:25px; 
`;
