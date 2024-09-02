import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
      flexGrow: 1,
      padding: 20,
      backgroundColor: "white",
    },
    profileContainer: {
      alignItems: "center",
      marginBottom: 30,
    },
    profileImage: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 15,
      borderWidth: 2,
      borderColor: "#5664F5",
    },
    nameText: {
      fontSize: 26,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 8,
    },
    bioText: {
      fontSize: 16,
      color: "#777",
      textAlign: "center",
      paddingHorizontal: 20,
    },
    statsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: 30,
      paddingHorizontal: 10,
    },
    statBox: {
      alignItems: "center",
      flex: 1,
    },
    statNumber: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#333",
    },
    statLabel: {
      fontSize: 14,
      color: "#777",
      marginTop: 4,
    },
    sectionContainer: {
      marginBottom: 20,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 8,
    },
    sectionContent: {
      fontSize: 16,
      color: "#555",
      lineHeight: 24,
    },
    projectItem: {
      marginBottom: 20,
    },
    projectTitle: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 2,
    },
    projectCompany: {
      fontSize: 14,
      color: "#777",
      marginBottom: 6,
    },
    projectDescription: {
      fontSize: 14,
      color: "#555",
      marginBottom: 4,
    },
    projectDetail: {
      fontSize: 14,
      color: "#666",
      marginBottom: 4,
      paddingLeft: 10,
    },
    projectOutcome: {
      fontSize: 14,
      color: "#777",
      fontStyle: "italic",
      marginTop: 6,
      paddingLeft: 10,
    },
    actionContainer: {
      width: "100%",
      alignItems: "center",
      marginTop: 20,
    },
    actionButton: {
      backgroundColor: "#5664F5",
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 25,
      marginVertical: 5,
      width: "90%",
      alignItems: "center",
    },
    actionButtonText: {
      fontSize: 16,
      color: "#fff",
      fontWeight: "bold",
    },
  });