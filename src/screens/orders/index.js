import React, { useEffect } from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { OrderItem } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, deleteOrder } from "../../store/actions/order.action";

const OrdersScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.items);

  const onDeleteOrder = (id) => {
    dispatch(deleteOrder(id));
  };
  const renderItem = ({ item }) => (
    <OrderItem item={item} onDelete={onDeleteOrder} />
  );

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <View style={styles.orderList}>
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
    </SafeAreaView>
  );
};

export default OrdersScreen;
