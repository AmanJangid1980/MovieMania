import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: "white",
    },
    statusBar: {
      width: "100%",
      paddingVertical: 17,
      paddingHorizontal: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
    },
    statusBarLeftCon: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    titleView: {},
    statusBarRightCon: {
      flex: 1.4,
      flexDirection: "row",
      alignItems: "center",
    },
    statusIcon: {
      width: 20,
      height: 20,
      marginRight: 8,
    },
    imageViewContainer: {
      flex: 1,
      marginHorizontal: 5,
    },
    activityIndicatorContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    movieImage: {
      width: 20,
      height: 20,
    },
    movieCardImage: {
      width: "100%",
      height: 230,
      borderRadius: 10,
      justifyContent: "center", // Center the image horizontally
      alignItems: "center", // Center the image vertically
      overflow: "hidden", // Ensure the image doesn't overflow the container
      backgroundColor: "#000", // Add a background color to see the full area
    },
  
    searchIconBtn: {
      marginHorizontal: 8,
    },
    textInput: {
      flex: 1,
      fontSize: 14,
      fontWeight: "400",
      color: "black",
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#94A3B8",
      backgroundColor: "white",
    },
    renderItemStyle: {
      flex: 1,
      padding: 8,
      borderRadius: 10,
      backgroundColor: "white",
      borderColor: "#AFB3F862",
      borderWidth: 1,
      marginHorizontal: 5,
    },
    imageTitleText: {
      fontSize: 16,
      color: "black",
      fontWeight: "400",
      marginTop: 5,
    },
    releaseDateTxt: {
      fontSize: 12,
      color: "#545454",
      fontWeight: "400",
      marginTop: 4,
    },
    myTextTitle: {
      fontSize: 24,
      color: "black",
      fontWeight: "700",
    },
    noDataContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    noDataText: {
      fontSize: 18,
      color: "#545454",
      fontWeight: "500",
    },
  });