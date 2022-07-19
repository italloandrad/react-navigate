import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import AppRotas from './src/routes/AppRotas';
import useProdutores from './src/hooks/useProdutores';


export default function App() {
  const produtores = useProdutores(false);
  
  return <SafeAreaView style={{ flex: 1 }}>
    <StatusBar />
    <AppRotas />
  </SafeAreaView>
}
