import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { DrawerActions, ParamListBase, useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export default function Layout() {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        initialRouteName='cotacao-dolar/index'
        screenOptions={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Ionicons name="menu" size={30} color="black" />
            </TouchableOpacity>
          ),
        }}
      >
        <Drawer.Screen
          name="cotacao-dolar/index" // Tela de cotação do dólar
          options={{
            drawerLabel: 'Cotação Dólar',
          }}
        />
        <Drawer.Screen
          name="cotacao-euro/index" // Tela de cotação do euro
          options={{
            drawerLabel: 'Cotação Euro',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
