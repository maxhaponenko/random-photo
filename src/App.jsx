import React, { useCallback } from 'react';
// import { Counter } from './features/counter/Counter';
import SelectedImages from './app/selected-images/selected-images.entry';
import ImageSelector from 'app/image-selector/image-selector.entry'
import Layout from 'components/layout'
import './App.css';
import { useDispatch } from 'react-redux';
import { disposeState } from 'store/image-selector.slice'
import { useDispose } from 'hooks/use-dispose'

function App() {

  const dispatch = useDispatch()
  const disposeImagesSelectionProcess = useCallback(() => {
    dispatch(disposeState())
  }, [dispatch])

  useDispose([disposeImagesSelectionProcess])

  return (
    <Layout>
      <SelectedImages />
      <ImageSelector />
    </Layout>
  );
}

export default App;
