import React from 'react';
import { Box } from 'native-base';
import { StyleSheet } from 'react-native';

const BottomNavBar = () => {
  const styles = StyleSheet.create({
    NavBar: {
      width: '100%',
      height: '10%',
      position: 'absolute',
    },
  });
  return (
    <>
      <Box style={styles.NavBar}>
        
      </Box>
    </>
  );
};

export default BottomNavBar;
