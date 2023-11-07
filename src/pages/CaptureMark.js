import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native';

export default function CaptureMark (){

    const [hasPermission, setHasPermission] = useState(null);

    // const askForCameraPermission = () => {
    //     (async () => {
    //       const { status } = await BarCodeScanner.requestPermissionsAsync();
    //       setHasPermission(status === 'granted');
    //     })()
    //   }
    
    //   // Request Camera Permission
    //   useEffect(() => {
    //     askForCameraPermission();
    //   }, []);

  return (
    <View style={styles.container}>
    
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
