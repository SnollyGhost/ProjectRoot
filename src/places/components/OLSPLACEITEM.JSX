import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../shared/components/UIElements/Modal";

const Button = ({ color, hoverColor, text, to, onClick }) => {
  const buttonStyle = {
    backgroundColor: `#${color}`,
    color: "#ffffff",
    fontWeight: "bold",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.25rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    outline: "none",
    transition: "background-color 0.3s ease-in-out",
    cursor: "pointer",
  };

  if (to) {
    return (
      <Link to={to} style={buttonStyle}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} style={buttonStyle}>
      {text}
    </button>
  );
};

const PlaceItem = ({ id, image, title, address, description }) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="p-0"
        footerClass="text-right"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="h-60 w-full flex items-center justify-center">
          <h2>THE MAP!</h2>
        </div>
      </Modal>

      <li className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
        <figure className="place-item__image">
          <img
            className="w-full h-64 object-cover object-center"
            src={image}
            alt={title}
          />
        </figure>
        <div className="place-item__info mt-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <address className="text-gray-600 not-italic">{address}</address>
          <p className="mt-2 text-gray-700">{description}</p>
        </div>
        <div className="place-item__actions mt-4 flex justify-between">
          <Button
            text="VIEW ON MAP"
            color="3498db"
            hoverColor="2980b9"
            onClick={openMapHandler}
          />
          <Button
            text="EDIT"
            to={`/places/${id}`}
            color="27ae60"
            hoverColor="219653"
          />
          <Button text="DELETE" color="e74c3c" hoverColor="c0392b" />
        </div>
        {showMap && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-4">
              <h3>Map Component Goes Here</h3>
              <button
                className="absolute top-0 right-0 m-2"
                onClick={closeMapHandler}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </li>
    </>
  );
};

export default PlaceItem;
