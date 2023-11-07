import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import moment from 'moment-timezone';

const Clock = () => {
  const [quitoTime, setQuitoTime] = useState(moment().tz('America/Guayaquil'));

  useEffect(() => {
    const timer = setInterval(() => {
      setQuitoTime(moment().tz('America/Guayaquil'));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <View style={styles.clockContainer}>
      <Text style={styles.clockText}>
        {quitoTime.format('HH:mm:ss')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  clockContainer: {
    alignItems: 'center',
  },
  clockText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default Clock;