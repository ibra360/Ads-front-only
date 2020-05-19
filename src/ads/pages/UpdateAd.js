import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Input from "../../shared/components/FromElements/Input";
import Card from "../../shared/components/UIElements/Card";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

const DUMMY_ADS = [
  {
    id: "p1",
    title: "3 piece Coat",
    description: "Lunda ka coat nhy hai bhai ye Branded hai",
    imageUrl:
      "https://i.pinimg.com/originals/7f/ab/90/7fab909dfe8cf80d86fc7013ccb35d9b.jpg",
    address: "Shadman Side aajao dasti",
    creator: "u1",
  },
  {
    id: "p2",
    title: "3 piece Coat",
    description: "Lunda ka coat nhy hai bhai ye Branded hai",
    imageUrl:
      "https://i.pinimg.com/originals/7f/ab/90/7fab909dfe8cf80d86fc7013ccb35d9b.jpg",
    address: "Shadman Side aajao dasti",
    creator: "u2",
  },
];

const UpdateAd = () => {
  const [isLoading, setIsLoading] = useState(true);
  const adId = useParams().adId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedAd = DUMMY_ADS.find((a) => a.id === adId);

  useEffect(() => {
    if (identifiedAd) {
      setFormData(
        {
          title: {
            value: identifiedAd.title,
            isValid: true,
          },
          description: {
            value: identifiedAd.description,
            isValid: true,
          },
        },
        true
      );
    }

    setIsLoading(false);
  }, [setFormData, identifiedAd]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedAd) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find this Ad</h2>
        </Card>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE]}
        errorText="Please add a valid Title"
        onInput={inputHandler}
        // initialValue={formState.inputs.title.value}
        // initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        // type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please add a valid description"
        onInput={inputHandler}
        // initialValue={formState.inputs.description.value}
        // initialValuid={formState.inputs.description.isValid}
      />
      <Link>
        <button
          onClick={placeUpdateSubmitHandler}
          disabled={!formState.isValid}
          class="btn btn-primary"
        >
          Update PLace
        </button>
      </Link>
    </form>
  );
};
export default UpdateAd;
