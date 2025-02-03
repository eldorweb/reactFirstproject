import { App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';

function App() {
    const colorSet = {
        '--sendbird-light-primary-500': '#066858',
        '--sendbird-light-primary-400': '#027d69',
        '--sendbird-light-primary-300': '#259c72',
        '--sendbird-light-primary-200': '#69c085',
        '--sendbird-light-primary-100': '#a8e2ab',
    }
  return (
    
    <div style={{ width:'100vw', height:'80vh' }}>
      <SendbirdApp
        appId={'F201D723-F4B7-4F1F-8B1A-17F64FDA827D'}
        userId={'userId'}
        accessToken={'9815f026f6e6f60aa2fbf5b0d03ddc29c26cbcc9'} 
        colorSet={colorSet}
      />
    </div>
  )
}

export default App;