import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: "space-around",
    // alignItems: 'center',
    backgroundColor: "#FFF",
  },
  logo: {
    // flexBasis: "10%",
    alignSelf: "center",
  },

  logoImage: {
    // width: 100,
    // height: 100
  },

  imageContainer: {
    // flexBasis: "50%",
    alignSelf: "center",
  },

  image: {
    width: 300,
    height: 300,
  },

  btns: {
    marginTop: 20,
    alignItems: "center",
  },

  btn: {
    width: "90%",
    marginHorizontal: "auto",
  },
});

export default styles;
