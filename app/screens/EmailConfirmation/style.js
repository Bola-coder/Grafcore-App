import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  emailConfirmation: {
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

  formText: {
    textAlign: "left",
    fontSize: 24,
    color: "#333",
    fontWeight: "bold",
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
    // fontWeight: "bold",
  },

  actions: {
    marginTop: 20,
    alignItems: "center",
  },

  actionBtn: {
    padding: 10,
    marginVertical: 5,
  },

  resendBtnText: {
    color: "#9380B0",
    fontSize: 18,
    fontWeight: "bold",
  },

  emailBtnText: {
    color: "#222",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
