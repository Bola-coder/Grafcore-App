import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  accountCreationSuccess: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "space-between",
  },

  logo: {
    // width: 200,
    // height: 200,
    marginTop: "20%",
    alignSelf: "center",
  },

  imageContainer: {
    // flex: 1,
    marginTop: "20%",
    justifyContent: "center",
    alignItems: "center",
  },

  textContainer: {
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
  },

  mainText: {
    fontSize: 22,
    fontWeight: "bold",
  },

  subText: {
    fontSize: 16,
    color: "#392E32",
    marginTop: 10,
  },

  footer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default styles;
