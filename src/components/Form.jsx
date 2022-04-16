import React from "react";

const Form = () => {
  return (
    <div className="container">
      <form>
        <div className="field">
          <label htmlFor="city">City</label>
          <input type={"text"} id="city" name="city" />
        </div>
        <div className="field">
          <label htmlFor="country">Country</label>
          <select id="country" name="country">
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
