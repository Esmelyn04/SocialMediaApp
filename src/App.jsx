import React from 'react';
import './App.css'
// import Post from './components/Post'
import Feed from './components/Feed'
import CreatePostForm from './components/CreatePostFrom'
import { useState } from 'react'

function App(){

  let [feedData, setFeedData] = useState([])

  let onNewMessage = (data) => {
    // receives data from CreatePostForm

    // updates state
      setFeedData([...feedData, data])
  }

  return(
    <div>
      <h1>Fakebook!</h1>

      <CreatePostForm handleSubmit={onNewMessage}/>

      <Feed data={feedData}/>

      {/* <Post content="This is a test post!" />
      <Post content="This is another test post!" /> */}

    </div>
    )
}

export default App