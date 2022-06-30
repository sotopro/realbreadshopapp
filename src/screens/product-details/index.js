import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Button } from "react-native";
import { addItem } from "../../store/actions/cart.action";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const ProductDetailsScreen = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selected);

  const onHandlerAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.text}>id: {product.id}</Text>
        <Text style={styles.text}>{product.name}</Text>
        <Text style={styles.text}>{product.description}</Text>
        <Text style={styles.text}>{product.weight}</Text>
        <Text style={styles.text}>${product.price.toFixed(2)}</Text>
        <Button
          color={colors.primary}
          title="Add to cart"
          onPress={() => onHandlerAddToCart()}
        />
      </View>
    </View>
  );
};

export default ProductDetailsScreen;
