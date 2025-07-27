import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <Text style={style.textStyle}>Welcome to this random shop!</Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
        }}
      >
        This shop sells random stuff (crazy, i know)
      </Text>
      <Image
        style={{ width: 200, height: 200 }}
        source={require("@/assets/images/diagonalley.webp")}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    margin: 30,
  },

  textStyle: {
    fontSize: 30,
    textAlign: "center",
  },
});
