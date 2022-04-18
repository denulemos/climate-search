import {useState, createContext} from 'react'
import axios from 'axios';

const ClimateContext = createContext();

const ClimateProvider = ({children}) => {
    const [search, setSearch] = useState({city: '', country: ''});
    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);

    const searchData = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const getWeather = async (data) => {
        setLoading(true);
        try {
            const {city, country} = data;
            const appId = import.meta.env.VITE_API_KEY;

            const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`);
            setResult(result.data);
        }
        catch (e) {
            console.log(e.message);
            setResult('error');
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <ClimateContext.Provider value={{search ,loading, searchData, getWeather, result}}> 
        {children} 
        </ClimateContext.Provider>
    )
}

export {
    ClimateProvider
}

export default ClimateContext;