import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MIN,
} from "../../shared/util/validators";
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
  const { placeId } = useParams();

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div>
        <h2>Could not find place!</h2>
      </div>
    );
  }
  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="PLEASE ENTER VALID TITLE"
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="PLEASE ENTER VALID description"
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
