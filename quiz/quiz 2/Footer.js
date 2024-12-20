// components/Footer.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Footer = () => {
     return (
          <View style={styles.footer}>
               <Image
                    source={{ uri: "https://www.shakeyspizza.ph/images/delivery-77777777@2x.png" }}
                    style={styles.logo}
                    alt="Shakey's Logo"
               />
          </View>
     );
};

const styles = StyleSheet.create({
     footer: {
          backgroundColor: '#121315',
          padding: 15,
          alignItems: 'center',
          borderTopWidth: 1,
          borderTopColor: '#1B1C1F',
     },
     text: {
          color: '#FFD700',
          fontSize: 14,
     },
     phone: {
          color: '#FFD700',
          fontSize: 24,
          fontWeight: 'bold',
     },
     subText: {
          color: '#FFD700',
          fontSize: 12,
     },
     logo: {
          width: 150,
          height: 60,
          resizeMode: 'contain',
     },
});

export default Footer;