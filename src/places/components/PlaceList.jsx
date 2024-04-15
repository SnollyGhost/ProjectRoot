import PlaceItem from "./PlaceItem";
import Button from "../../shared/components/FormElements/Button";

const PlaceList = (props) => {
  return (
    <div className="mt-4">
      {props.items.length === 0 ? (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">
            No places found. Maybe create one?
          </h2>
          <Button
            to="/places/new"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Share Place
          </Button>
        </div>
      ) : (
        <ul className="divide-y divide-gray-200">
          {props.items.map((place) => (
            <PlaceItem
              key={place.id}
              id={place.id}
              image={place.imageUrl}
              title={place.title}
              description={place.description}
              address={place.address}
              creatorId={place.creator}
              coordinates={place.location}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlaceList;
