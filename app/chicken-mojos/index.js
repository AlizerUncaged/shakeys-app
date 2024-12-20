// app/chicken-mojos/index.jsx
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MenuItem = ({ item }) => (
     <View style={styles.menuItem}>
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
     </View>
);

const ChickenMojosScreen = () => {
     // Inside ChickenMojosScreen component
     const items = [
          {
               title: "2pc Chicken N Rice",
               description: "Two pieces of our signature chicken with rice and gravy.",
               price: "229.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/2pc-Chicken.png" // Replace with actual image
          },
          {
               title: "Basket of Mojos",
               description: "A basketful of our deep-fried potato slices with your choice of two dips.",
               price: "439.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/Basket-of-Mojos_l86ql95.png" // Replace with actual image
          },
          {
               title: "Buddy Pack (5pcs Chix)",
               description: "Juicy, flavor-packed fried chicken with Mojos. *Chicken parts may vary.",
               price: "715.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/Buddy_ykXZx1n.png" // Replace with actual image
          },
          {
               title: "Chicken 'N' Mojos Blowout",
               description: "Juicy, flavor-packed fried chicken with Mojos. *Chicken parts may vary.",
               price: "2,669.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/Blowout_i8qdmRi.png" // Replace with actual image
          },
          {
               title: "Family Pack (7pcs Chix)",
               description: "Juicy, flavor-packed fried chicken with our trademarked Mojos. *Chicken parts may vary.",
               price: "979.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/Family_53lSV7r.png" // Replace with actual image
          },
          {
               title: "Mojos Dip",
               description: "Our deep-fried potato slices with your choice of dip.",
               price: "199.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/Mojos-plate.png" // Replace with actual image
          },
          {
               title: "Mojos Supreme",
               description: "A bucketful of our deep-fried potato slices with your choice of three dips.",
               price: "589.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/Mojos-Supreme.png" // Replace with actual image
          },
          {
               title: "Party Pack (12pcs Chix)",
               description: "Juicy, flavor-packed fried chicken with Mojos. *Chicken parts may vary.",
               price: "1,629.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/Party_pQBVteY.png" // Replace with actual image
          },
          {
               title: "Solo Pack (3pcs Chix)",
               description: "Juicy, flavor-packed fried chicken with mojos. *Chicken parts may vary.",
               price: "449.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/Solo_KbvmfE4.png" // Replace with actual image
          },
          {
               title: "Tender Crrrunch Chicken Fingers Basket",
               description: "Shakey's Tender Crrrunch Chicken Fingers are delicious crispy chicken strips made...",
               price: "409.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/Tender_Crunch-removebg-preview_1_WNvWuHE.png", // Replace with actual image
               isNew: true
          },
          {
               title: "Tender Crrrunch Chicken Fingers Solo",
               description: "Shakey's Tender Crrrunch Chicken Fingers are delicious crispy chicken strips made...",
               price: "259.00",
               image: "https://d56cx1n31amxi.cloudfront.net/images/TCCF-6pcs-PRODUCT_IMAGE_hzCmrqg.png", // Replace with actual image
               isNew: true
          }
     ];

     return (
          <SafeAreaView style={styles.container}>
               <Header />
               <Text style={styles.screenTitle}>Chicken N Mojos</Text>
               <ScrollView style={styles.content}>
                    <View style={styles.itemsGrid}>
                         {items.map((item, index) => (
                              <MenuItem key={index} item={item} />
                         ))}
                    </View>
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
     itemsGrid: {
          padding: 10,
          gap: 10,
     },
     menuItem: {
          backgroundColor: '#FFFFFF',
          borderRadius: 8,
          padding: 15,
          position: 'relative',
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

export default ChickenMojosScreen;