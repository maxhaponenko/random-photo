import React, { useCallback } from 'react';
import SelectedImages from './app/selected-images/selected-images.entry';
import ImageSelector from 'app/image-selector/image-selector.entry'
import Layout from 'components/layout'
import { useDispatch } from 'react-redux';
import { disposeState } from 'store/image-selector.slice'
import { useDispose } from 'hooks/use-dispose'
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer />
    </Layout>
  );
}

export default App;
