import React, { useState, useContext } from "react";
import Input from "../../shared/components/FromElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import "../../ads/pages/NewPlace.css";
import Card from "../../shared/components/UIElements/Card";
import { AuthContext } from "../../shared/context/auth-context";

const NewAd = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const SwitchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login();    // send this to the backend!
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name."
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          element="input"
          type="text"
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please add a valid Email"
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="text"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please add a valid description"
          onInput={inputHandler}
        />

        <button
          onClick={authSubmitHandler}
          disabled={!formState.isValid}
          class="btn btn-primary"
        >
          {isLoginMode ? "LOGIN" : "SIGNUP"}
        </button>
      </form>
      <button onClick={SwitchModeHandler} class="btn btn-secondary">
        Switch to {isLoginMode ? "SIGNUP" : "LOGIN"}
      </button>
    </Card>
  );
};
export default NewAd;
