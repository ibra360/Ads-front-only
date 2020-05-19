import React from "react";
import Input from "../../shared/components/FromElements/Input";
import { Link } from "react-router-dom";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import { useForm } from '../../shared/hooks/form-hook';
import "./NewPlace.css";


const NewAd = () => {

    const [formState, inputHandler] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        },
        address: {
            value: '',
            isValid: false
        }

    }, false);

    const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); // send this to the backend!
    };
    
    return (
        <form className="place-form" >
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE]}
                errorText="Please add a valid Title"
                onInput={inputHandler}
            />
            <Input
                id="description"
                // element="input"
                type="text"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please add a valid description"
                onInput={inputHandler}
            />
            <Input
                id="address"
                element="input"
                type="text"
                label="Address"
                validators={[VALIDATOR_REQUIRE]}
                errorText="Please add a valid address"
                onInput={inputHandler}
            />
            <Link><button onClick={placeSubmitHandler} disabled={!formState.isValid} class="btn btn-primary"> Create Ad</button></Link>
        </form>
    );
};
export default NewAd;
