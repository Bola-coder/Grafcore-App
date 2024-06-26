import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },

  logo: {
    marginTop: "10%",
    alignSelf: "center",
  },

  textContainer: {
    marginTop: "4%",
    alignItems: "center",
  },

  text: {
    fontSize: 22,
    fontWeight: "bold",
  },

  form: {
    marginTop: "10%",
    paddingHorizontal: 10,
  },

  inputContainer: {
    marginVertical: 10,
  },

  label: {
    fontSize: 16,
    color: "#333",
    paddingBottom: 5,
  },

  input: {
    fontSize: 20,
    padding: 12,
    borderWidth: 1,
    borderColor: "#B0ABAD",
    backgroundColor: "#ECECEC",
    borderRadius: 8,
    color: "#333",
    // fontWeight: "bold",
  },

  btn: {
    marginTop: "5%",
  },

  changePasswordLink: {
    color: "#270162",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
  },

  fingerprintImageContainer: {
    marginTop: "4%",
    alignItems: "center",
  },

  subText: {
    fontSize: 16,
    color: "#392E32",
    marginTop: 10,
  },
});

export default styles;
