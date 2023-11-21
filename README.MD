Mi Aplicacion de ubicacion

Esta aplicacion utiliza la biblioteca Expo Location para acceder a la ubicacion actual del dispositivo a traves del GPS.

Acceso al Hardware

La función `getCurrentPositionAsync` de `expo-location` se utiliza para obtener la ubicación actual del dispositivo.

jsx
import * as Location from 'expo-location';

// ...

let location = await Location.getCurrentPositionAsync({});

Magda Figueroa
T620410130