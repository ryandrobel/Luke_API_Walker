import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Planets = (props) => {
    const [planetId,setPlanetId] = useState(props.id);
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        console.log(props.id)
        axios.get(`https://swapi.dev/api/planets/${planetId}`)
            .then( response => setPlanet(response.data))
            .catch(err => console.log(err))
            
    },[planetId])

    return (
        <div>
            <div className="App container rounded">
                <div className="row">
                </div>
                <div className="col-8 text-left">
                </div>
            </div>
            {
                planet ? 
                    <div className="col rounded bg-light">
                        <div className="name"  >
                        
                            <h1 className="text-center">{planet.name}</h1>
                            <p>Climate: {planet.climate}</p>
                            <p>Terrain: {planet.terrain}</p>
                            <p>Surface Water: {planet.surface_water}</p>
                            <p>Population: {planet.population}</p>
                        </div>
                    </div> : null
            } 

        </div>
        
    );
}

export default Planets;
