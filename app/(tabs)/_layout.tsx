import { Tabs } from "expo-router";
import React, { useEffect } from "react";
import { Platform, View } from "react-native";
import mobileAds from "react-native-google-mobile-ads"; // Importamos Google Mobile Ads

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

// import BannerAdComponent from "@/components/BannerAdComponent"; // Importamos el componente del banner

export default function TabLayout() {
  const colorScheme = useColorScheme();

  // Inicializamos Google Mobile Ads al montar el componente
  useEffect(() => {
    mobileAds().initialize().then(adapterStatuses => {
      console.log("Google Mobile Ads SDK iniciado", adapterStatuses);
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Navegación de pestañas */}
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: {
            display: "none", // Oculta la barra de navegación
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="paperplane.fill" color={color} />
            ),
          }}
        />
      </Tabs>

      {/* Banner publicitario en la parte inferior */}
      {/* <BannerAdComponent /> */}
    </View>
  );
}
