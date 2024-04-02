import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

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

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(
    (places) => places.creator === userId
  );
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
