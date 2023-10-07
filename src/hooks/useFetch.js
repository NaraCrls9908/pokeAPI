import axios from "axios"
import { useState } from 'react'

export const useFetch = () => {
    const [infoPokeAPI, setInfoPokeAPI] = useState();
    
    const getAPI = (url) => {
        axios.get(url)
        .then(res => {
            setInfoPokeAPI(res.data.results);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return [infoPokeAPI, getAPI]
}
