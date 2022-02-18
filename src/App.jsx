import React from 'react';
// import { Counter } from './features/counter/Counter';
import SelectedImages from './app/selected-images/selected-images.entry';
import ImageSelector from 'app/image-selector/image-selector.entry'
import Layout from 'components/layout'
import './App.css';

function App() {
  return (
    <Layout>
        <SelectedImages />
        <ImageSelector />
        {/* <Counter /> */}
    </Layout>
  );
}

export default App;
