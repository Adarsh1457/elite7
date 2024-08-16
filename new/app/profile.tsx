import React from 'react';
import ProfileScreen from '../components/ProfileScreen';
import { useColorScheme } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function ProfileRoute() {
  const colorScheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = React.useState(colorScheme === 'dark');
  const theme = useTheme();

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    // Here you would typically update your app's theme context
  };

  return (
    <ProfileScreen
      toggleTheme={toggleTheme}
      isDarkTheme={isDarkTheme}
    />
  );
}