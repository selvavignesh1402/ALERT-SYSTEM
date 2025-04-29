import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitle: 'Alert System',
        headerTitleAlign: 'left',
        // headerStyle: {
        //   backgroundColor: '#FFA500', // Orange background
        // },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight  : 'semibold',
          fontSize : 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"            
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="Alert"            
        options={{
          title: 'Alert',
        }}
      />

      <Tabs.Screen
        name="ProfileScreen"            
        options={{
          title: 'Profile',
        }}
      />
    </Tabs>
  );
}
