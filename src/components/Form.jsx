import React, {useState} from "react";
import useClimate from "../hooks/useClimate";

const Form = () => {
    const [alert, setAlert] = useState('');
    const {search, searchData} = useClimate();
    const {city, country} = searchData;
    const handleSubmit = e => {
        e.preventDefault();
        if (Object.values(search).includes('')) {
            setAlert('Please fill in all fields');
        }
        
    };
  return (
    <div className="container">
      <form
      onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="city">City</label>
          <input value={city} onChange={searchData} type={"text"} id="city" name="city" />
        </div>
        <div className="field">
          <label htmlFor="country">Country</label>
          <select value={country} onChange={searchData} id="country" name="country">
            <option value="">Select a Country</option>
            <option value="AR">Argentina</option>
            <option value="US">EEUU</option>
            <option value="MX">Mexico</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Peru</option>
          </select>
        </div>
        <input type="submit" value="Get Weather"/>
      </form>
    </div>
  );
};

export default Form;
