import { useState } from 'react'
import Form from './components/Form'
import './App.css'

function App() {
  const [someImage, setSomeImage] = useState('');

  const getData = (image) => {
    setSomeImage(image);

  }

  return (
    <>
    <div className='card'>
    <h1>Image Board</h1>
    <Form action={getData}/>


    </div>
    
    </>
  )
}

export default App
