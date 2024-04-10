import React, { useRef, useEffect } from "react";

const Map = ({ center, zoom, markerCoordinate, className }) => {
  const mapRef = useRef();

  useEffect(() => {
    if (window.ol) {
      // Create a new map instance
      const map = new window.ol.Map({
        target: mapRef.current,
        layers: [
          new window.ol.layer.Tile({
            source: new window.ol.source.OSM(),
          }),
        ],
        view: new window.ol.View({
          center: window.ol.proj.fromLonLat([center.lng, center.lat]),
          zoom: zoom,
        }),
      });

      // Add zoom controls
      map.addControl(new window.ol.control.Zoom());

      // Add panning control
      map.addInteraction(new window.ol.interaction.DragPan());

      // Add a marker at the specified coordinate
      if (markerCoordinate) {
        const markerLayer = new window.ol.layer.Vector({
          source: new window.ol.source.Vector({
            features: [
              new window.ol.Feature({
                geometry: new window.ol.geom.Point(
                  window.ol.proj.fromLonLat([
                    markerCoordinate.lng,
                    markerCoordinate.lat,
                  ])
                ),
              }),
            ],
          }),
          style: new window.ol.style.Style({
            image: new window.ol.style.Circle({
              radius: 8,
              fill: new window.ol.style.Fill({ color: "red" }),
              stroke: new window.ol.style.Stroke({
                color: "white",
                width: 2,
              }),
            }),
          }),
        });
        map.addLayer(markerLayer);
      }
    } else {
      console.error("OpenLayers library is not loaded.");
    }
  }, [center, zoom, markerCoordinate]);

  return (
    <div
      ref={mapRef}
      className={`map ${className} w-full h-full bg-gray-800 rounded-lg shadow-md overflow-hidden`}
      id="map"
    ></div>
  );
};

export default Map;
