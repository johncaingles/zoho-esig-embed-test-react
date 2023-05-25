import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [url, setUrl] = useState('')
  const [actualUrl, setActualUrl] = useState(undefined)
//   style="
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   gap: 10px;
// "
// style="width: 100%;height: 70vh;">
  return (
    <>  
      <div id="urlInput"  className='read-the-docs'>
        <input 
          type="text" id="url" name="url" onChange={ e => setUrl(e.target.value)} 
          value={url}
        />
        <button id="btn" onClick={ () => {
          console.log('yo')
          console.log({actualUrl})
          setActualUrl(url)
        } }>Set URL</button>
      </div>
      <iframe id="zoho-embed" src={actualUrl}
        style={{
          width: '100%',
          height: '70vh'
        }}
      >
      </iframe>
    </>
  )
}

export default App
