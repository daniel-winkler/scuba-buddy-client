import React from 'react'
import { useState } from 'react';
import { useForm } from '../../hooks/useForm'
import { POST_URL } from '../../config';
import Badges from './Badges';

export default function Post() {

    const [languageArray, setLanguageArray] = useState([])

    const formInitialState = {shopname: "", shoplocation: ""};
    const [form, handleInputChange] = useForm(formInitialState);

    async function handleSubmit(e){
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(POST_URL, options);
        const data = await response.json();
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} method="POST" className="postform diveform">
                <h4>Post you shop here!</h4>
                <label htmlFor="shopname">Name:</label>
                <input onChange={handleInputChange} value={form.shopname} type="text" name="shopname" id="shopname" required/>
                <label htmlFor="shoplocation">Location:</label>
                <input onChange={handleInputChange} value={form.shoplocation} type="text" name="shoplocation" id="shoplocation" required/>
                
                <Badges setLanguageArray={setLanguageArray} />

                {/* TODO: crear multiples selecciones de idiomas y enviarlas como array  */}
                {/* TODO: Google Maps clickable que recoja coordenadas */}
                {/* https://stackoverflow.com/questions/58869132/react-select-multi-select-custom-way-to-display-multiple-options */}

                <button type="submit">Submit your shop!</button>

            </form>
        </div>
    )
}