import Map from "./components/Map";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import React from "react";

const MainPage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Map />
    </div>
  );
};

export default MainPage;
