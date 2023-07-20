import React, { useState } from "react";


const Profile = () => {
    const [profile, setProfile] = useState({});
    const handleChange = (event) => {
        console.log(profile);
        setProfile({
            ...profile,
            [event.target.name]: event.target.value,
        });
    };

    async function handleSubmit(event) {
        event.preventDefault();
        alert('Profile changes added');
        console.log(profile);
        setProfile({
            ...profile,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <form className='profile' onSubmit={handleSubmit}>
            <label>First name</label>
            <input
            className='profileInputs'
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleChange}
            />
            <label>Last name</label>
            <input
                className='profileInputs'
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleChange}
            />
            <label>Address</label>
            <input
                className='profileInputs'
                type="text"
                name="address"
                value={profile.address}
                onChange={handleChange}
            />
            <label>City</label>
            <input
                className='profileInputs'
                type="text"
                name="city"
                value={profile.city}
                onChange={handleChange}
            />
            <label>State</label>
            <input
                className='profileInputs'   
                type="text"
                name="state"
                value={profile.state}
                onChange={handleChange}
            />
            <label>Zip code</label>
            <input
                className='profileInputs'
                type="text"
                name="zipCode"
                value={profile.zipCode}
                onChange={handleChange}
            />
            <label>Billing card number</label>
            <input
                className='profileInputs'
                type="text"
                name="billingCardNumber"
                value={profile.billingCardNumber}
                onChange={handleChange}
            />
            <label>Billing card expiration date</label>
            <input
                className='profileInputs'
                type="text"
                name="billingCardExpirationDate"
                value={profile.billingCardExpirationDate}
                onChange={handleChange}
            />
            <label>Billing card security code</label>
            <input
                className='profileInputs'
                type="text"
                name="billingCardSecurityCode"
                value={profile.billingCardSecurityCode}
                onChange={handleChange}
            />

            <label>Billing address</label>
            <input
                className='profileInputs'
                type="text"
                name="billingAddress"
                value={profile.billingAddress}
                onChange={handleChange}
            />
            <label>Billing city</label>
            <input
                className='profileInputs'
                type="text"
                name="billingCity"
                value={profile.billingCity}
                onChange={handleChange}
            />
            <label>Billing state</label>
            <input
                className='profileInputs'
                type="text"
                name="billingState"
                value={profile.billingState}
                onChange={handleChange}
            />
            <label>Billing zip code</label>
            <input
                className='profileInputs'
                type="text"
                name="billingZipCode"
                value={profile.billingZipCode}
                onChange={handleChange}
            />
            <button className='signupButton' type='submit'>submit</button>
        </form>
        
        
    );

};
export default Profile;