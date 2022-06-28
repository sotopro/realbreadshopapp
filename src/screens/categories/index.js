import React from "react";
import { View, FlatList } from "react-native";
import { CategoryItem } from "../../components/index";
import { useSelector } from "react-redux";
import { styles } from "./styles";

const CategoriesScreen = ({ navigation }) => {
  const categories = useSelector((state) => state.category.categories);
  const categorySelected = useSelector((state) => state.category.selected);

  console.log(categories, categorySelected);
  const onSelected = (item) => {
    navigation.navigate("Products", {
      categoryId: item.id,
      title: item.title,
    });
  };

  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CategoriesScreen;
