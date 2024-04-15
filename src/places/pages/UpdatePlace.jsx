import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

import { useForm } from "../../shared/hooks/form-hook";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Rock-Hewn Churches",
    description:
      "Collection of 11 churches carved out of the rock in the 13th century, some decorated with frescoes.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Lalibela%2C_san_giorgio%2C_esterno_24.jpg/1200px-Lalibela%2C_san_giorgio%2C_esterno_24.jpg",
    address: "22MV+79C, Unnamed Road, Lalibela",
    creator: "u1",
    location: {
      lat: 12.0331956,
      lng: 39.0408048,
    },
  },
  {
    id: "p2",
    title: "AKSUM",
    description: "Carved obelisks, relics of the ancient Kingdom of Aksum.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Obelisk_of_Aksum_Remains4.jpg/800px-Obelisk_of_Aksum_Remains4.jpg",
    address: "22MV+79C, Unnamed Road, Lalibela",
    creator: "u2",
    location: {
      lat: 14.135526668375128,
      lng: 38.7452174925443,
    },
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { placeId } = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm({
    title: {
      value: "",
      isValid: false,
    },
    description: {
      value: "",
      isValid: false,
    },
  });

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }

    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="text-center mt-8">
        <h2 className="text-xl font-bold text-red-600">
          Could not find place!
        </h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="text-center mt-8">
        <h2 className="text-xl font-bold text-red-600">LOADING...</h2>
      </div>
    );
  }

  return (
    <form onSubmit={placeUpdateSubmitHandler} className="max-w-lg mx-auto mt-8">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="PLEASE ENTER VALID TITLE"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
        className="mb-4"
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="PLEASE ENTER VALID description"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
        className="mb-4"
      />
      <Button
        type="submit"
        disabled={!formState.isValid}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
