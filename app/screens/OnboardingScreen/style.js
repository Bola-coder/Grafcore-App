import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  onboarding: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  onboardingImageContainer: {
    alignSelf: "center",
    marginTop: "15%",
  },

  image: {
    width: 300,
  },

  contents: {
    flexBasis: "50%",
    alignSelf: "center",
  },

  textContainer: {
    alignItems: "center",
    padding: 10,
    marginTop: 30,
  },

  mainText: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 5,
  },

  subText: {
    fontSize: 18,
    padding: 5,
    textAlign: "center",
    fontWeight: "medium",
  },

  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  icon: {
    margin: 5,
  },

  btns: {
    marginTop: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },

  skipBtn: {
    padding: 10,
    // backgroundColor: "#E5E5E5",
    borderRadius: 10,
  },

  skipBtnText: {
    color: "#F3387E",
    fontSize: 18,
    fontWeight: "bold",
  },

  nextBtn: {
    padding: 12,
    backgroundColor: "#F3387E",
    width: 100,
    borderRadius: 50,
  },

  nextBtnText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
