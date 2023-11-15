import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import styles from "./Map.module.scss";
import CallBlock from "../CallBlock/CallBlock";
const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCQ8PsYKFAzDh5apq16MTDyNBt8h0ETsBQ",
  });
  const center = useMemo(() => ({ lat: 53.921793, lng: 27.597354 }), []);

  return (
    <div className={styles.App}>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap mapContainerClassName={styles.mapContainer} center={center} zoom={15} />
      )}
      <div className={styles.callBlockWrapper}>
        <CallBlock />
      </div>
    </div>
  );
};

export default App;
