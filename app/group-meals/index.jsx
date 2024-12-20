// app/hero-sandwiches/index.jsx
import { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ItemDetailsModal from '../../components/ItemDetailsModal';

const MenuItem = ({ item, onPress }) => (
     <TouchableOpacity style={styles.menuItem} onPress={onPress}>
          <Image
               source={{ uri: item.image }}
               style={styles.itemImage}
               resizeMode="contain"
          />
          <View style={styles.itemContent}>
               <View style={styles.itemInfo}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemDescription}>{item.description}</Text>
                    <Text style={styles.startsAt}>Starts at</Text>
                    <Text style={styles.price}>₱{item.price}</Text>
               </View>
               <TouchableOpacity style={styles.orderButton}>
                    <Text style={styles.orderButtonText}>ORDER</Text>
               </TouchableOpacity>
          </View>
          {item.isNew && (
               <View style={styles.newBadge}>
                    <Text style={styles.newBadgeText}>NEW</Text>
               </View>
          )}
     </TouchableOpacity>
);

const HeroSandwichesScreen = () => {
     const [selectedItem, setSelectedItem] = useState(null);
     const [modalVisible, setModalVisible] = useState(false);

     const items = [
          {
               title: "Family Meal Deal 1",
               description: "Any Large Pizza, with a Pasta Platter or a Solo Pack Chicken 'n' Mojos (3 pcs). Comes with...",
               price: "1,149.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/WEB_AND_APP-FMD_1-_with_ICED_TEA-500x500.png"
          },
          {
               title: "Family Meal Deal 2",
               description: "Any Large Pizza, with a Pasta Platter and a Buddy Pack Chicken 'n' Mojos (5 pcs)...",
               price: "1,999.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/WEB_AND_APP-FMD_2-_with_ICED_TEA-500x500.png"
          },
          {
               title: "Family Meal Deal 3",
               description: "Any Party Pizza, with a Pasta Platter and a Family Pack Chicken 'n' Mojos (7 pcs)...",
               price: "2,699.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/WEB_AND_APP-FMD_3-_with_2_ICED_TEA-500x500.png"
          },
          {
               title: "Monster Meal Deal",
               description: "Any two Large Thin Crust Pizzas, with two Pasta Platters and a Party Pack Chicken 'n'...",
               price: "3,749.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/monster-meal.png"
          }
     ];

     return (
          <SafeAreaView style={styles.container}>
               <Header />
               <Text style={styles.screenTitle}>Hero Sandwiches</Text>
               <ScrollView
                    style={styles.content}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
               >
                    <View style={styles.itemsGrid}>
                         {items.map((item, index) => (
                              <MenuItem
                                   key={index}
                                   item={item}
                                   onPress={() => {
                                        setSelectedItem(item);
                                        setModalVisible(true);
                                   }}
                              />
                         ))}
                    </View>
               </ScrollView>
               <Footer />

               <ItemDetailsModal
                    isVisible={modalVisible}
                    onClose={() => {
                         setModalVisible(false);
                         setSelectedItem(null);
                    }}
                    item={selectedItem}
               />
          </SafeAreaView>
     );
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#1B1C1F',
     },
     screenTitle: {
          color: '#FFD700',
          fontSize: 24,
          fontWeight: 'bold',
          padding: 15,
          backgroundColor: '#121315',
     },
     content: {
          flex: 1,
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
     },
     scrollContent: {
          flexGrow: 1,
          paddingBottom: 20,
     },
     itemsGrid: {
          padding: 10,
          gap: 10,
     },
     menuItem: {
          backgroundColor: '#FFFFFF',
          borderRadius: 8,
          padding: 15,
          position: 'relative',
          marginBottom: 10,
     },
     itemImage: {
          width: '100%',
          height: 150,
          marginBottom: 10,
     },
     itemContent: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
     },
     itemInfo: {
          flex: 1,
          marginRight: 10,
     },
     itemTitle: {
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 4,
     },
     itemDescription: {
          fontSize: 14,
          color: '#666',
          marginBottom: 8,
     },
     startsAt: {
          fontSize: 12,
          color: '#666',
     },
     price: {
          fontSize: 18,
          fontWeight: 'bold',
          color: '#FF0000',
     },
     orderButton: {
          backgroundColor: '#FF0000',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 20,
     },
     orderButtonText: {
          color: '#FFFFFF',
          fontWeight: 'bold',
     },
     newBadge: {
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: '#FF0000',
          paddingHorizontal: 8,
          paddingVertical: 4,
          borderTopLeftRadius: 8,
          borderBottomRightRadius: 8,
     },
     newBadgeText: {
          color: '#FFFFFF',
          fontSize: 12,
          fontWeight: 'bold',
     },
});

export default HeroSandwichesScreen;