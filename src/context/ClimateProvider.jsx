import {useState, createContext} from 'react'

const ClimateContext = createContext();

const ClimateProvider = ({children}) => {
    const [search, setSearch] = useState({city: '', country: ''});
    const searchData = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    return (
        <ClimateContext.Provider value={{search, searchData}}> 
        {children} 
        </ClimateContext.Provider>
    )
}

export {
    ClimateProvider
}

export default ClimateContext;