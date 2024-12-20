// app/late-night-deals/index.jsx
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import ItemDetailsModal from '../../components/ItemDetailsModal';

const DealItem = ({ item, onPress }) => (
     <TouchableOpacity style={styles.dealItem} onPress={onPress}>
          <View style={styles.dealImageContainer}>
               <Image
                    source={{ uri: item.image }}
                    style={styles.dealImage}
                    resizeMode="contain"
               />
               <Text style={styles.codeText}>{item.code}</Text>
          </View>
          <View style={styles.dealInfo}>
               <Text style={styles.dealTitle}>{item.title}</Text>
               <Text style={styles.startsAt}>Starts at</Text>
               <Text style={styles.price}>₱ {item.price}</Text>
          </View>
          <TouchableOpacity style={styles.orderButton}>
               <Text style={styles.orderButtonText}>Order</Text>
          </TouchableOpacity>
     </TouchableOpacity>
);

const LateNightDealsScreen = () => {
     const [selectedItem, setSelectedItem] = useState(null);
     const [modalVisible, setModalVisible] = useState(false);

     const deals = [
          {
               title: "Hawaiian Delight - Thin Crust - Large - 40% OFF",
               price: "365.40",
               code: "P549",
               image: "https://d56cx1n31amxi.cloudfront.net/images/HDL-Product_Image500x500_copy.png"
          },
          {
               title: "Hi - Protein Supreme - Thin Crust - Large - 40% OFF",
               price: "365.40",
               code: "P669",
               image: "https://d56cx1n31amxi.cloudfront.net/images/HPL-Product_Image500x500_copy.png"
          },
          {
               title: "Manager's Choice - Thin Crust - Large - 40% OFF",
               price: "365.40",
               code: "P669",
               image: "https://d56cx1n31amxi.cloudfront.net/images/CML-Product_Image500x500_copy_zGUBukz.png"
          },
          {
               title: "Pepperoni Crrrunch - Thin Crust - Large - 40% OFF",
               price: "365.40",
               code: "P669",
               image: "https://d56cx1n31amxi.cloudfront.net/images/PCL-Product_Image500x500_copy.png"
          },
          {
               title: "Pepperoni Thin - Thin Crust - Large - 40% OFF",
               price: "329.40",
               code: "P549",
               image: "https://d56cx1n31amxi.cloudfront.net/images/PPL-Product_Image500x500_copy.png"
          }
     ];

     return (
          <SafeAreaView style={styles.container}>
               <Header />
               <Text style={styles.screenTitle}>Late Night Deals</Text>
               <ScrollView
                    style={styles.content}
                    showsVerticalScrollIndicator={false}
               >
                    {deals.map((deal, index) => (
                         <DealItem
                              key={index}
                              item={deal}
                              onPress={() => {
                                   setSelectedItem(deal);
                                   setModalVisible(true);
                              }}
                         />
                    ))}
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
     },
     dealItem: {
          flexDirection: 'row',
          backgroundColor: '#FFFFFF',
          borderRadius: 8,
          padding: 12,
          marginHorizontal: 10,
          marginVertical: 5,
          alignItems: 'center',
     },
     dealImageContainer: {
          position: 'relative',
          width: 100,
          height: 100,
     },
     dealImage: {
          width: '100%',
          height: '100%',
          borderRadius: 8,
     },
     codeText: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          backgroundColor: '#FFD700',
          padding: 4,
          borderRadius: 4,
          fontSize: 12,
     },
     dealInfo: {
          flex: 1,
          marginLeft: 12,
     },
     dealTitle: {
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom: 4,
     },
     startsAt: {
          fontSize: 12,
          color: '#666',
     },
     price: {
          fontSize: 16,
          fontWeight: 'bold',
          color: '#FF0000',
     },
     orderButton: {
          backgroundColor: '#FF0000',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 20,
          marginLeft: 8,
     },
     orderButtonText: {
          color: '#FFFFFF',
          fontWeight: 'bold',
     },
});

export default LateNightDealsScreen;