import React, { useRef, useEffect } from "react";

const Map = ({ center, zoom, className }) => {
  const mapRef = useRef();

  useEffect(() => {
    if (window.ol) {
      new window.ol.Map({
        target: mapRef.current?.id,
        layers: [
          new window.ol.layer.Tile({
            source: new window.ol.source.OSM(),
          }),
        ],
        view: new window.ol.View({
          center: window.ol.proj.fromLonLat([center.lng, center.lat]),
          zoom,
        }),
      });
    }
  }, [center, zoom]);

  return <div ref={mapRef} className={`map ${className} w-full h-1/2`} id="map"></div>;
};

export default Map;
