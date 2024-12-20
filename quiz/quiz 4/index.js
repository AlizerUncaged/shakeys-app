// app/index.jsx
import { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
     const router = useRouter();

     const bannerImages = [
          "https://zeus-promotion-prod-v2.s3.amazonaws.com/banners/1732813125.629898.jpeg",
          "https://zeus-promotion-prod-v2.s3.amazonaws.com/banners/1732289163.167487.jpeg",
          "https://zeus-promotion-prod-v2.s3.amazonaws.com/banners/1734448259.856753.jpeg",
          "https://zeus-promotion-prod-v2.s3.amazonaws.com/banners/1724819400.717521.jpeg",
          "https://zeus-promotion-prod-v2.s3.amazonaws.com/banners/1732813125.629898.jpeg"
     ];

     return (
          <SafeAreaView style={styles.container}>
               <Header />
               <ScrollView
                    style={styles.content}
                    showsVerticalScrollIndicator={false}
               >
                    {bannerImages.map((imageUrl, index) => (
                         <TouchableOpacity
                              key={index}
                              style={styles.bannerContainer}
                              onPress={() => {
                                   // Handle banner press
                              }}
                         >
                              <Image
                                   source={{ uri: imageUrl }}
                                   style={styles.bannerImage}
                                   resizeMode="contain"
                              />
                         </TouchableOpacity>
                    ))}
               </ScrollView>
               <Footer />
          </SafeAreaView>
     );
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#1B1C1F',
     },
     content: {
          flex: 1,
     },
     bannerContainer: {
          width: '100%',
          paddingHorizontal: 0,
          marginBottom: 0,
     },
     bannerImage: {
          width: '100%',
          height: undefined,
          aspectRatio: 1.8, // Adjust this value to match your banner images' aspect ratio
     },
});

export default Home;