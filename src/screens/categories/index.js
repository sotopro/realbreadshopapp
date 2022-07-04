import React from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import { CategoryItem } from "../../components/index";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../../store/actions/category.action";
import { styles } from "./styles";

const CategoriesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate("Products", {
      title: item.title,
    });
  };

  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
    </SafeAreaView>
  );
};

export default CategoriesScreen;
