import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { map, type LocationEvent } from "leaflet";
import React, { useEffect } from "react";

function LocationMarker() {
  const map = useMap();

  useEffect(() => {
    function onLocationFound(e: LocationEvent) {
      const radius = e.accuracy;
      L.marker(e.latlng).addTo(map).bindPopup(`You are here.`).openPopup();
      L.circle(e.latlng, { radius }).addTo(map);
    }

    function onLocationError(e: L.ErrorEvent) {
      alert(e.message);
    }

    map.on("locationfound", onLocationFound);
    map.on("locationerror", onLocationError);
    map.locate({ setView: true, maxZoom: 16 });

    return () => {
      map.off("locationfound", onLocationFound);
      map.off("locationerror", onLocationError);
    };
  }, [map]);

  return null;
}

export default function Map() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
}
