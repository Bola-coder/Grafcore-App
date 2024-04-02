import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  addressInformation: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  content: {
    flex: 1,
    marginTop: 30,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#392E32",
    marginTop: 10,
  },
  form: {
    marginTop: 20,
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
    padding: 15,
    borderWidth: 1,
    borderColor: "#B0ABAD",
    backgroundColor: "#ECECEC",
    borderRadius: 8,
    color: "#333",
  },
  footer: {
    alignSelf: "flex-end",
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  footerText: {
    fontSize: 16,
  },
});

export default styles;
