// components/ItemDetailsModal.jsx
import React, { useEffect, useRef } from 'react';
import {
     Modal,
     View,
     Text,
     Image,
     TouchableOpacity,
     StyleSheet,
     ScrollView,
     Animated,
     Dimensions,
     TouchableWithoutFeedback
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const ItemDetailsModal = ({ isVisible, onClose, item }) => {
     const slideAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

     useEffect(() => {
          if (isVisible) {
               Animated.spring(slideAnim, {
                    toValue: 0,
                    useNativeDriver: true,
                    bounciness: 5
               }).start();
          } else {
               Animated.timing(slideAnim, {
                    toValue: SCREEN_HEIGHT,
                    duration: 250,
                    useNativeDriver: true
               }).start();
          }
     }, [isVisible]);

     if (!item) return null;

     return (
          <Modal
               transparent={true}
               visible={isVisible}
               onRequestClose={onClose}
               animationType="fade"
          >
               <TouchableWithoutFeedback onPress={onClose}>
                    <View style={styles.overlay}>
                         <TouchableWithoutFeedback>
                              <Animated.View
                                   style={[
                                        styles.modalContainer,
                                        {
                                             transform: [{ translateY: slideAnim }]
                                        }
                                   ]}
                              >
                                   <View style={styles.modalHeader}>
                                        <View style={styles.dragIndicator} />
                                        <TouchableOpacity
                                             style={styles.closeButton}
                                             onPress={onClose}
                                        >
                                             <AntDesign name="close" size={24} color="#666666" />
                                        </TouchableOpacity>
                                   </View>

                                   <ScrollView
                                        style={styles.modalContent}
                                        showsVerticalScrollIndicator={false}
                                        bounces={false}
                                   >
                                        <Image
                                             source={{ uri: item.image }}
                                             style={styles.modalImage}
                                             resizeMode="contain"
                                        />

                                        <View style={styles.detailsContainer}>
                                             {item.isNew && (
                                                  <View style={styles.newBadge}>
                                                       <Text style={styles.newBadgeText}>NEW</Text>
                                                  </View>
                                             )}

                                             <Text style={styles.title}>{item.title}</Text>

                                             <Text style={styles.description}>{item.description}</Text>

                                             {item.code && (
                                                  <View style={styles.codeContainer}>
                                                       <Text style={styles.codeLabel}>Product Code:</Text>
                                                       <Text style={styles.code}>{item.code}</Text>
                                                  </View>
                                             )}

                                             <View style={styles.priceContainer}>
                                                  <Text style={styles.priceLabel}>Starts at</Text>
                                                  <Text style={styles.price}>₱{item.price}</Text>
                                             </View>
                                        </View>
                                   </ScrollView>

                                   <View style={styles.footer}>
                                        <TouchableOpacity
                                             style={styles.orderButton}
                                             onPress={() => {
                                                  // Handle order
                                                  onClose();
                                             }}
                                        >
                                             <Text style={styles.orderButtonText}>ORDER NOW</Text>
                                        </TouchableOpacity>
                                   </View>
                              </Animated.View>
                         </TouchableWithoutFeedback>
                    </View>
               </TouchableWithoutFeedback>
          </Modal>
     );
};

const styles = StyleSheet.create({
     overlay: {
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          justifyContent: 'flex-end',
     },
     modalContainer: {
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          maxHeight: SCREEN_HEIGHT * 0.8, // 80% of screen height
          width: '100%',
          overflow: 'hidden',
     },
     modalHeader: {
          paddingVertical: 10,
          alignItems: 'center',
          borderBottomColor: '#EEEEEE',
          borderBottomWidth: 1,
          position: 'relative',
     },
     dragIndicator: {
          width: 40,
          height: 4,
          backgroundColor: '#DDDDDD',
          borderRadius: 2,
     },
     closeButton: {
          position: 'absolute',
          right: 15,
          top: 10,
          padding: 5,
     },
     modalContent: {
          padding: 15,
     },
     modalImage: {
          width: '100%',
          height: 200,
          marginBottom: 15,
          backgroundColor: '#F8F8F8',
     },
     detailsContainer: {
          paddingHorizontal: 5,
     },
     newBadge: {
          backgroundColor: '#FF0000',
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 5,
          alignSelf: 'flex-start',
          marginBottom: 10,
     },
     newBadgeText: {
          color: '#FFFFFF',
          fontWeight: 'bold',
          fontSize: 12,
     },
     title: {
          fontSize: 22,
          fontWeight: 'bold',
          marginBottom: 10,
          color: '#000000',
     },
     description: {
          fontSize: 15,
          color: '#666666',
          marginBottom: 15,
          lineHeight: 22,
     },
     codeContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 15,
     },
     codeLabel: {
          fontSize: 14,
          color: '#666666',
          marginRight: 10,
     },
     code: {
          fontSize: 14,
          fontWeight: 'bold',
          color: '#000000',
          backgroundColor: '#FFD700',
          paddingHorizontal: 8,
          paddingVertical: 4,
          borderRadius: 4,
     },
     priceContainer: {
          marginBottom: 15,
     },
     priceLabel: {
          fontSize: 14,
          color: '#666666',
     },
     price: {
          fontSize: 24,
          fontWeight: 'bold',
          color: '#FF0000',
     },
     footer: {
          padding: 15,
          borderTopColor: '#EEEEEE',
          borderTopWidth: 1,
          backgroundColor: '#FFFFFF',
     },
     orderButton: {
          backgroundColor: '#FF0000',
          paddingVertical: 15,
          borderRadius: 25,
          alignItems: 'center',
     },
     orderButtonText: {
          color: '#FFFFFF',
          fontSize: 16,
          fontWeight: 'bold',
     },
});

export default ItemDetailsModal;