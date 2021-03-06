import React from 'react'
import { useForm } from '../../hooks/useForm'
import { ACCOUNT_URL } from '../../config'
import { useAuthContext } from '../../contexts/AuthContext';

export default function EditAccount({user}) {

    // TODO: recoger info del usuario para ponerlos como initial state

    const { getToken, signOut } = useAuthContext();

    const formInitialState = {username: "", email: "", password: ""};
    const [form, handleInputChange] = useForm(formInitialState);

    async function handleSubmit(e){
        e.preventDefault();

        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getToken()}`
                },
            body: JSON.stringify(form)
        }

        const response = await fetch(ACCOUNT_URL, options);
        // eslint-disable-next-line
        const data = await response.json();

        if(response.status === 202 || response.status === 200){
            alert("Account updated successfully! Please log in again with your new credentials.")
            signOut()
         } else if (response.status === 401){
            alert("Something happened. Please log in again.")
            signOut()
        } else if (response.status === 500) {
            alert("Whoops, something happened. Try again later.")
        }
    }


    return (
        <div className="registercomponent d-flex">
            <form onSubmit={handleSubmit} className="registerform divebox" id="editform">

                <label htmlFor="username">Username:</label>
                <input onChange={handleInputChange} value={form.username} type="text" name="username" id="username" />

                <label htmlFor="email">Email:</label>
                <input onChange={handleInputChange} value={form.email} type="email" name="email" id="email" />

                <label htmlFor="password">Password:</label>
                <input onChange={handleInputChange} value={form.password} type="password" name="password" id="password" />

                <button type="submit">Update your account!</button>
            </form>
            
        </div>
    )
}
