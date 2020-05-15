import React, {useState,useEffect} from 'react';
import axios from 'axios';


const People = (props) => {
    const [personId,setPersonId] = useState(props.id);
    const [people, setPeople] = useState(null);

    useEffect(() => {
        console.log(props.id)
        axios.get(`https://swapi.dev/api/people/${props.id}`)
            .then( response => {
                console.log(response.data)
                setPeople(response.data)})
            .catch(err => console.log(err))
    },[props.id])
    
    
    


    return (
        <div>
        
            {
                people ? 
                    <div className="col rounded bg-light">
                        <div className="name"  >
                        
                            <h1 className="text-center">{people.name}</h1>
                            <p>Height: {people.height}</p>
                            <p>Hair Color: {people.hair_color}</p>
                            <p>Eye Color: {people.eye_color}</p>
                            <p>Skin Color: {people.skin_color}</p>
                        </div>
                    </div> : null
            } 
            



        </div>
    );
}

export default People;
