// app/drinks/index.jsx
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

const DrinksScreen = () => {
     const [selectedItem, setSelectedItem] = useState(null);
     const [modalVisible, setModalVisible] = useState(false);



     // Inside drinks/index.jsx, update the items array:

     const items = [
          {
               title: "Bottled House Blend Iced Tea",
               description: "1l bottled house blend iced tea",
               price: "130.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/HB-Iced-tea.png"
          },
          {
               title: "Coke 1.5L",
               description: "Coke XL",
               price: "120.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/coke-1-5L.png"
          },
          {
               title: "Coke 500 Ml",
               description: "Coke 500 Ml",
               price: "90.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/coke-bottle.png"
          },
          {
               title: "Coke in Can",
               description: "Coke in Can",
               price: "79.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/4_Coke_in_Can.png"
          },
          {
               title: "Mineral Water",
               description: "Mineral Water",
               price: "70.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/Bottled_Water_1zZ9wpF.png"
          },
          {
               title: "Sprite in Can",
               description: "Sprite in can",
               price: "79.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/sprite-in-can.png"
          }
     ];


     return (
          <SafeAreaView style={styles.container}>
               <Header />
               <Text style={styles.screenTitle}>Drinks</Text>
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
     }
});

export default DrinksScreen;