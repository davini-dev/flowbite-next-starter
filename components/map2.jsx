"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const [position, setPosition] = useState([51.505, -0.09]); // Posição inicial
  const [speed, setSpeed] = useState(null); // Estado para a velocidade
  const [accuracy, setAccuracy] = useState(null); // Estado para a precisão

  useEffect(() => {
    let watchId;

    // Função para atualizar a localização e velocidade
    const updatePosition = () => {
      if ("geolocation" in navigator) {
        watchId = navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude, speed, accuracy } = position.coords;
            setPosition([latitude, longitude]);
            setSpeed(speed); // Define a velocidade
            setAccuracy(accuracy); // Define a precisão
          },
          (error) => {
            console.error(error);
          },
          {
            enableHighAccuracy: true,
          }
        );
      } else {
        alert("Geolocalização não suportada pelo seu navegador");
      }
    };

    // Atualiza a posição a cada 5 segundos
    const intervalId = setInterval(updatePosition, 5000);

    // Atualiza a posição logo na montagem do componente
    updatePosition();

    return () => {
      clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
      navigator.geolocation.clearWatch(watchId); // Limpa o monitoramento de geolocalização
    };
  }, []);

  return (
    <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          <div>
            <p><strong>Localização Atual:</strong></p>
            <p>Latitude: {position[0]}</p>
            <p>Longitude: {position[1]}</p>
            <p>Velocidade: {speed} * 3.6).toFixed(2): "Não disponível"</p>
            <p>Precisão:   {accuracy} metros : "Não disponível"</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;