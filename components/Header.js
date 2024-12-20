// components/Header.js
import React from 'react';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import Constants from 'expo-constants';
import { useRouter } from 'expo-router';

const NavButton = ({ title, iconPath, onPress, extraContent }) => (
     <TouchableOpacity style={styles.navButton} onPress={onPress}>
          <View style={styles.navContent}>
               <Image
                    source={{ uri: iconPath }}
                    style={styles.navIcon}
                    resizeMode="contain"
               />
               <Text style={styles.navText}>{title}</Text>
          </View>
          {extraContent && (
               <View style={styles.extraContent}>
                    {extraContent}
               </View>
          )}
     </TouchableOpacity>
);

const Header = () => {
     const router = useRouter();

     const navItems = [
          {
               title: "Home",
               icon: "https://www.shakeyspizza.ph/logos/shakeys@1024.png",
               route: '/'
          },
          {
               title: "Late Night Deals",
               icon: "https://d56cx1n31amxi.cloudfront.net/images/PROJ-BATMAN-WEB_ICON-800x800-2.png",
               route: '/late-night-deals',
               extraContent: (
                    <Text style={styles.dealText}>40% OFF</Text>
               )
          },
          {
               title: "Chicken N Mojos",
               icon: "https://d56cx1n31amxi.cloudfront.net/images/Solo-pack_dF2anVL.png",
               route: '/chicken-mojos'
          }
     ];
     return (
          <View style={styles.headerContainer}>
               <View style={styles.header}>
                    <Image
                         source={{ uri: "https://www.shakeyspizza.ph/logos/shakeys@1024.png" }}
                         style={styles.logo}
                         alt="Shakey's Logo"
                    />
               </View>
               <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.navScroll}
                    contentContainerStyle={styles.navContainer}
               >
                    {navItems.map((item, index) => (
                         <NavButton
                              key={index}
                              title={item.title}
                              iconPath={item.icon}
                              onPress={() => router.push(item.route)}
                              extraContent={item.extraContent}
                         />
                    ))}
               </ScrollView>
          </View>
     );
};

const styles = StyleSheet.create({
     headerContainer: {
          backgroundColor: '#121315',
          paddingTop: Constants.statusBarHeight,
     },
     header: {
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#1B1C1F',
     },
     logo: {
          width: 150,
          height: 50,
          resizeMode: 'contain',
     },
     navScroll: {
          backgroundColor: '#FF0000',
     },
     navContainer: {
          paddingHorizontal: 10,
          paddingVertical: 5,
          gap: 10,
          alignItems: 'center',
     },
     navButton: {
          backgroundColor: '#CC0000',
          borderRadius: 8,
          padding: 10,
          height: 60,
          minWidth: 150,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 5,
     },
     navContent: {
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
     },
     navIcon: {
          width: 40,
          height: 40,
     },
     navText: {
          color: '#FFFFFF',
          fontSize: 16,
          fontWeight: '500',
     },
     extraContent: {
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4,
     },
     dealText: {
          color: '#FFD700',
          fontSize: 14,
          fontWeight: 'bold',
     },
});

export default Header;