import React from "react";
import { Link } from "react-router-dom"

export const ContactCard = ({ contact, contactDelete, contactUpdate}) => {
    return (
        <div className="">
            <li className="list-group-item d-flex">
                <img
                    className="img1"
                    src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
                    alt="profile"
                />
                <div className="d-flex justify-content-between w-100">
                    <div className="perfil">
                        <h5>{contact.name}</h5>
                        <p><i class="fa-solid fa-envelope"></i> {contact.email}</p>
                        <p><i class="fa-solid fa-phone"></i> {contact.phone}</p>
                        <p><i class="fa-solid fa-location-dot"></i> {contact.address}</p>
                    </div>

                    <div className="">
                    <Link 
                    to={`/edit/${contact.id}`}
                    className="btn"
                    style={{ marginRight: '0.5rem' }}
                    ><i class="fa fa-pencil" aria-hidden="true"></i></Link>
                        <button 
                            className="btn"
                            onClick={() => contactDelete(contact.id)}
                        >
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            </li>
        </div>
    );
};