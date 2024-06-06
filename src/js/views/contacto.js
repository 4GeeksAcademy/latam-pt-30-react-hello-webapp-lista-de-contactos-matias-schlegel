import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "./../../styles/navbar.css"
import "./../../styles/concat.css"
import { ContactCard } from "../component/concatCard";
import { Navbar } from "./../component/navbar.js";

export const Contacts = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        const initializeContacts = async () => {
           await actions.fetchContactos();
        if (!store.contactos.length) {
            await actions.createUser()
            }
        }
        initializeContacts();
    }, []);

    const handleDelete = (id) => {
        actions.deleteContact(id);
    };
    
console.log(store)
    return (
        <React.Fragment>
            <Navbar />
            <div>
                {store.contactos.map((contacts, index) => (
                    <ContactCard 
                    key={index} 
                    contact={contacts} 
                    contactDelete={handleDelete} />
                ))}
            </div>
        </React.Fragment>
    );
};