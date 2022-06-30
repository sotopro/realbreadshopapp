import React from "react";
import { orders } from "../../data/orders";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { OrderItem } from "../../components/index";

const OrdersScreen = () => {
  const items = orders;

  const onDeleteOrder = () => {
    console.log("delete order");
  };
  const renderItem = ({ item }) => (
    <OrderItem item={item} onDelete={onDeleteOrder} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.orderList}>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default OrdersScreen;
