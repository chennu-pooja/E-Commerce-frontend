
import React, { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  Button,
  FormControl,
  MenuItem,
  Divider,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import "./Address.css";
import statesAndUTs from "../CheckoutAddress/states&utdata";

const AddAddressCard = ({ address, togglePopup, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    city: '',
    postalCode: '',
    state: '',
    type: 'Home'
  });

  useEffect(() => {
    if (address) {
      setFormData({...address, type:'Home'});
    }
  }, [address]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const isNumber = (event) => {
    return /\d/.test(String.fromCharCode(event.keyCode));
  };

  const handleHomeButtonClick = () => {
    setFormData(prevState => ({
      ...prevState,
      type: 'Home'
    }));
  };

  const handleCompanyButtonClick = () => {
    setFormData(prevState => ({
      ...prevState,
      type: 'Work'
    }));
  };

  const handleSubmit = () => {
    delete formData.type;
    onSave(formData);
  };

  return (
    <div className="address-container">
      <ClearIcon
        style={{
          position: "absolute",
          top: "15px",
          right: "10px",
          cursor: "pointer",
        }}
        onClick={togglePopup}
      />
      <div className="header">
        <Typography
          style={{
            fontWeight: "bold",
            marginBottom: "10px",
            className: "form-heading",
            textAlign: "left",
          }}
        >
          {address ? 'Edit Address' : 'Add New Address'}
        </Typography>
      </div>
      <Divider />
      <div className="input-row">
        <Typography
          style={{
            color: "#313131",
            fontSize: "15px",
            marginRight: "20px",
            fontWeight: "bold",
          }}
        >
          Contact Details
        </Typography>
      </div>
      <div className="input">
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input">
        <TextField
          label="Phone number"
          name="phoneNumber"
          variant="outlined"
          type="number"
          fullWidth
          autoComplete="off"
          value={formData.phoneNumber}
          onChange={handleChange}
          onPaste={(e) => e.preventDefault()}
          maxLength="10"
          onKeyPress={(e) => isNumber(e)}
          required
        />
      </div>
      <div className="input-row">
        <Typography
          style={{
            color: "#313131",
            fontSize: "15px",
            marginRight: "20px",
            fontWeight: "bold",
          }}
        >
          Address
        </Typography>
      </div>
      <div className="input">
        <TextField
          label="Address Line"
          name="address"
          variant="outlined"
          fullWidth
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input">
        <TextField
          label="City"
          name="city"
          variant="outlined"
          fullWidth
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input grid-cols-2 flex space-x-3">
        <TextField
          className="col-span-1 w-2/5"
          label="Pincode"
          name="postalCode"
          type="number"
          variant="outlined"
          autoComplete="off"
          value={formData.postalCode}
          onChange={handleChange}
          onPaste={(e) => e.preventDefault()}
          maxLength="6"
          onKeyPress={(e) => isNumber(e)}
          required
        />
        <FormControl className="col-span-1 w-3/5">
        <TextField
          className="col-span-1 w-3/5"
          select
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          variant="outlined"
          required
        >
          {statesAndUTs.map((state, index) => (
            <MenuItem key={index} value={state}>
              {state}
            </MenuItem>
          ))}
        </TextField>
        </FormControl>
      </div>
      <div className="save-address">
        <Typography
          style={{ fontWeight: "bold", fontSize: "15px", marginBottom: "5px" }}
        >
          Save Address as
        </Typography>
        <Button
          variant="contained"
          style={{
            borderRadius: "40px",
            fontSize: "10px",
            marginRight: "10px",
            backgroundColor: formData.type === 'Home' ? "green" : "#ccc",
            borderColor: formData.type === 'Home' ? "green" : "#ccc",
            color: formData.type === 'Home' ? "white" : "initial",
          }}
          onClick={handleHomeButtonClick}
        >
          Home
        </Button>
        <Button
          variant="contained"
          style={{
            borderRadius: "40px",
            fontSize: "10px",
            backgroundColor: formData.type === 'Work' ? "green" : "#ccc",
            borderColor: formData.type === 'Work' ? "green" : "#ccc",
            color: formData.type === 'Work' ? "white" : "initial",
          }}
          onClick={handleCompanyButtonClick}
        >
          Work
        </Button>
      </div>
      <div className="input-row">
        <Button
          variant="contained"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            padding: "8px 16px",
            borderRadius: "5px",
            border: "none",
            width: "100%",
            marginTop: "5px",
          }}
          onClick={handleSubmit}
        >
          {address ? 'Update Address' : 'Add Address'}
        </Button>
      </div>
    </div>
  );
};

export default AddAddressCard;
