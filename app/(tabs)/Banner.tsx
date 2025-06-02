import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import React from "react";
import { View, StyleSheet } from "react-native";
import * as Device from "expo-device";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : Device.osName === "Android"
  ? "ca-app-pub-7620083100302566/1361947462"
  : "TU_ID_DE_BANNER_IOS";

const BannerAdComponent = () => {
  return (
    <View style={styles.bannerContainer}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdLoaded={() => console.log("Banner cargado")}
        onAdFailedToLoad={(error) =>
          console.error("Error al cargar banner:", error)
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
  },
});

export default BannerAdComponent;

// ID = "ca-app-pub-7620083100302566/1361947462" El bueno
// ID = "ca-app-pub-3940256099942544/6300978111" Prueba
