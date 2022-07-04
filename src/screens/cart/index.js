import React from "react";
import { FlatList, TouchableOpacity, Text, View, SafeAreaView } from "react-native";
import { CartItem } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, confirmCart } from "../../store/actions/cart.action";
import { styles } from "./styles";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const onHandlerDeleteItem = (id) => {
    dispatch(removeItem(id));
  };

  const onHandlerConfirmCart = () => {
    dispatch(confirmCart(cart, total));
  };
  const renderItem = ({ item }) => (
    <CartItem item={item} onDelete={onHandlerDeleteItem} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <View style={styles.cartList}>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.buttonConfirm}
          onPress={() => onHandlerConfirmCart()}
        >
          <Text style={styles.buttonText}>Confirm</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalTitle}>Total</Text>
            <Text style={styles.total}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default CartScreen;
