import React from "react";
import { View } from "react-native";
import { AdMobBanner } from "expo-ads-admob";

export default function BannerInferior() {
  return (
    <View style={{ alignItems: "center", marginVertical: 10 }}>
      <AdMobBanner
        bannerSize="banner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" //  ID de prueba de AdMob
        servePersonalizedAds
        onDidFailToReceiveAdWithError={(error) => console.log("Error cargando el anuncio:", error)}
      />
    </View>
  );
}
