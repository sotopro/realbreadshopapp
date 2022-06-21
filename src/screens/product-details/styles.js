import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  details: {
    height: height / 2,
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontFamily: "Lato-Bold",
    fontSize: 20,
  },
});
