// app/promos/index.jsx
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

export default PromosScreen = () => {
     const [selectedItem, setSelectedItem] = useState(null);
     const [modalVisible, setModalVisible] = useState(false);

     const items = [
          {
               title: "Classic Hero Bundle for 2",
               description: "Combination of 2 Classic Hero, 1 Mojos n'Dip and 2 glasses of Coke or House Blend Iced Tea",
               price: "398.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/CLASSIC_HERO-Product_Image500x500_HXhXJmv.png",
               isNew: true
          },
          {
               title: "Classic Hero Bundle for 3",
               description: "Combination of 3 Classic Hero, 1 Mojos n'Dip and 3 glasses of Coke or House Blend Iced Tea",
               price: "597.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/GF_-_HERO_BUNDLE_FOR_2.png",
               isNew: true
          },
          {
               title: "Classic Hero Bundle for 4",
               description: "Combination of 4 Classic Hero, 2 Mojos n'Dip and 4 glasses of Coke or House Blend Iced Tea",
               price: "796.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/Classic-Hero-Bundle-4_2023.png",
               isNew: true
          },
          {
               title: "Merry Meal DELI DEAL",
               description: "Enjoy 1 Large Thin Crust All-Time Favorite or Classic Pizza, 3pcs Chicken 'N' Mojos, 6pc...",
               price: "999.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/Merry-Meal_2023.png",
               isNew: true
          }
     ];

     return (
          <SafeAreaView style={styles.container}>
               <Header />
               <Text style={styles.screenTitle}>Promos</Text>
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