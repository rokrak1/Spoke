import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    color: "gray",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10,
  },
  badgeContainer: {
    backgroundColor: "#3777f0",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
    position: "absolute",
    left: 45,
    top: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
