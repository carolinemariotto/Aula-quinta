import React from "react";
import './navbar.css';
import icon from '../imagens/icon.png';
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar (){
    return(
        <nav class="navbar navbar-expand-lg navbar-light navbar-site">
            <div class="container-fluid">
                <Icon src={icon}/>
                <a class="Carol" href="#">Carol</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="Tomate" ><Link to = "/">Home</Link></a>
                    </li>
                    <li class="nav-item">
                       <a><Link to="/Link"></Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Links</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Cont</a>
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
