import React from 'react'
import {Provider} from 'react-redux'
import generateStore from './Redux/store'
import Pokemones from './Components/Pokemones'
import PostLists from './Components/PostsLists'

function App() {
  const store = generateStore()
  return (
    <Provider store={store}>
      <Pokemones />
      <PostLists />
    </Provider>
  );
}

export default App;
