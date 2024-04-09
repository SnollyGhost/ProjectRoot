import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import { geoMercator } from 'd3-geo';

// Simplified world geography data
const WORLD_GEOGRAPHY_DATA = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: 'Country1' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[0, 0], [0, 10], [10, 10], [10, 0], [0, 0]]],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Country2' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[10, 0], [10, 10], [20, 10], [20, 0], [10, 0]]],
      },
    },
  ],
};

const Map = ({ center }) => {
  return (
    <div className="w-full h-full">
      <ComposableMap
        projection={geoMercator}
        projectionConfig={{
          scale: 100,
          center: center, // Use the center prop to center the map
        }}
      >
        {/* Render the world map */}
        <Geographies geography={WORLD_GEOGRAPHY_DATA}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>

        {/* Add a marker at the specified coordinates (Ethiopia) */}
        <Marker coordinates={[40.4897, 9.1450]}>
          <circle r={8} fill="#F00" />
        </Marker>
      </ComposableMap>
    </div>
  );
};

export default Map;
