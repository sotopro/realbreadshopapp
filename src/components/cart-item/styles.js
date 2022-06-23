import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 90,
  },
  headerContainer: {},
  header: {
    fontSize: 16,
    fontFamily: "Lato-Bold",
  },
  containerDetail: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detail: {},
  detailQty: {
    fontSize: 14,
    fontFamily: "Lato-Regular",
  },
  detailPrice: {
    fontSize: 16,
    fontFamily: "Lato-Bold",
  },
});
