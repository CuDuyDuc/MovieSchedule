import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import AuthNavigator from './src/navigators/AuthNavigator';
import { SplashScreen } from './src/screens';
import { StatusBar } from 'react-native';

const App = () => {
  const [isShowSplash, setIsShowSpalsh] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSpalsh(false);
    }, 2000);
    return () => clearTimeout(timeout)
  }, []);
  return (
    <>
      <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent />
      {isShowSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      )}
    </>
  )
}

export default App;