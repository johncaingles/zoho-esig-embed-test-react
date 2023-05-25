import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [url, setUrl] = useState('')
  const [actualUrl, setActualUrl] = useState(undefined)
  const iframeRef = useRef();

  useState(
    () => {
      console.log({iframeRef})
    }
    ,[iframeRef]
  );

  const onIframeClick = e => {
    console.log({e})
  }

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
      <iframe id="zoho-embed" src={actualUrl} ref={iframeRef} onClick={onIframeClick} 
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
