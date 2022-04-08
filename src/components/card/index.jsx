import React, {useState, useEffect} from 'react';
import './styles.css'
import axios from "axios"

export default function Card(){

    const url = 'https://rickandmortyapi.com/api/character/'
    const [personagem, setPersonagem] = useState([])


    useEffect(async () => {
        const userLink = await axios.get(`${url}/2`)
        setPersonagem(userLink);
    }, [])
    
    return (
        <div className="card-container">
            <div className="image-card">
                <img src={personagem.data.image} />
            </div>
            <div className="content-info">
                <span>{personagem.data.name}</span>
                <p>{personagem.data.species}</p>
            </div>
        </div>
    )
}