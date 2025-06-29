import Map from "./components/Map";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import React from "react";
import { isLoggedIn } from "../../utils/isLoggedIn";
import { isGrouped } from "../../utils/isGrouped"; // Assuming this utility checks if the user is part of a group/team
import { Navigate } from "react-router-dom";

const MainPage: React.FC = () => {
  return isLoggedIn() && isGrouped() ? (
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
  ) : (
    <Navigate to="/login" />
  );
};

export default MainPage;
