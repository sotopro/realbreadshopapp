import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { OrderItem } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../store/actions/order.action";

const OrdersScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.items);

  const onDeleteOrder = () => {
    console.log("delete order");
  };
  const renderItem = ({ item }) => (
    <OrderItem item={item} onDelete={onDeleteOrder} />
  );

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.orderList}>
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default OrdersScreen;
