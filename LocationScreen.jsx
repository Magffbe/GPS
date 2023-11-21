import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';

    export default function LocationScreen() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }

          let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View>
      {location ? (
        <Text>
          Latitud: {location.coords.latitude}, Longitud: {location.coords.longitude}
        </Text>
      ) : (
        <Text>Obteniendo ubicación...</Text>
      )}
      {errorMsg && <Text>Error de ubicación: {errorMsg}</Text>}
    </View>
  );
}