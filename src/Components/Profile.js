import React, { useState } from "react";
const Profile = () => {
    const [profile, setProfile] = useState({});
    const handleChange = (event) => {
        setProfile({
            ...profile,
            [event.target.name]: event.target.value,
        });
    };
    return (
        <form>
            <label>First name</label>
            <input
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleChange}
            />
            <label>Last name</label>
            <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleChange}
            />
            <label>Address</label>
            <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleChange}
            />
            <label>City</label>
            <input
                type="text"
                name="city"
                value={profile.city}
                onChange={handleChange}
            />
            <label>State</label>
            <input
                type="text"
                name="state"
                value={profile.state}
                onChange={handleChange}
            />
            <label>Zip code</label>
            <input
                type="text"
                name="zipCode"
                value={profile.zipCode}
                onChange={handleChange}
            />
            <label>Billing card number</label>
            <input
                type="text"
                name="billingCardNumber"
                value={profile.billingCardNumber}
                onChange={handleChange}
            />
            <label>Billing card expiration date</label>
            <input
                type="text"
                name="billingCardExpirationDate"
                value={profile.billingCardExpirationDate}
                onChange={handleChange}
            />
            <label>Billing card security code</label>
            <input
                type="text"
                name="billingCardSecurityCode"
                value={profile.billingCardSecurityCode}
                onChange={handleChange}
            />

            <label>Billing address</label>
            <input
                type="text"
                name="billingAddress"
                value={profile.billingAddress}
                onChange={handleChange}
            />
            <label>Billing city</label>
            <input
                type="text"
                name="billingCity"
                value={profile.billingCity}
                onChange={handleChange}
            />
            <label>Billing state</label>
            <input
                type="text"
                name="billingState"
                value={profile.billingState}
                onChange={handleChange}
            />
            <label>Billing zip code</label>
            <input
                type="text"
                name="billingZipCode"
                value={profile.billingZipCode}
                onChange={handleChange}
            />

        </form>
        
        
    );

};
export default Profile;