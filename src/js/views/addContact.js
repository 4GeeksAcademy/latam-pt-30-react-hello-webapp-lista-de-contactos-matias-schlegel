import React, { useState, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"


export const AddContacto = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
 
    const { store, actions } = useContext(Context);

    const handleSubmit = () => {
        const newContact = {
            name: fullname,
            email: email,
            phone: phone,
            address: address
        };
        actions.addContact(newContact);
        setFullname('');
        setEmail('');
        setPhone('');
        setAddress('');
    };

    return (
        <React.Fragment>
        <div className="vh-100 d-flex align-items-center">
            <div className="containerAddContact col-12">
            <h1 className="tituloAddContact d-flex justify-content-center">
                Add a new contact
            </h1>
                <label htmlFor="fullname">
                    <h6>Full name</h6>
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Full name" 
                    id="fullname" 
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    /> 
                <label htmlFor="Email">
                    <h6 className="mt-2">Email</h6>
                </label>
                <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Email" 
                    id="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    /> 
                <label htmlFor="Phone">
                    <h6 className="mt-2">Phone</h6>
                </label>
                <input 
                    type="tel" 
                    className="form-control" 
                    placeholder="Phone" 
                    id="Phone" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    /> 
                <label htmlFor="Address">
                    <h6 className="mt-2">Address</h6>
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Address" 
                    id="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)} 
                    /> 
            <div className="buttonAddContact d-flex justify-content-center">
                <button 
                    type="button" 
                    className="btn btn-primary col-12 m-0"
                    onClick={handleSubmit}
                    >
                    Create Contact
                </button>
            </div>
            <Link to="/demo">
                <button className="btn btn-link">or get back to contacts</button>
            </Link>
            </div>
        </div>
        </React.Fragment>
    );
};