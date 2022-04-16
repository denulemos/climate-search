import {useState, createContext} from 'react'
import axios from 'axios';

const ClimateContext = createContext();

const ClimateProvider = ({children}) => {
    const [search, setSearch] = useState({city: '', country: ''});
    const [result, setResult] = useState({});
    const searchData = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const getWeather = async (data) => {
        try {
            const {city, country} = data;
            const appId = import.meta.env.VITE_API_KEY;

            const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`);
            setResult(result.data);
        }
        catch (e) {

        }
    }

    return (
        <ClimateContext.Provider value={{search, searchData, getWeather, result}}> 
        {children} 
        </ClimateContext.Provider>
    )
}

export {
    ClimateProvider
}

export default ClimateContext;