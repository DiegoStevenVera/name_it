import './App.css';
import UploadAndDisplayImage from '../Uploader/Uploader.js';

function App() {
  return (
    <div className="App">
      <div className='Content'>
        <div className='Message'>
          <h2>Name It!</h2>
          <p>Con esta simple aplicación puedes escoger de los mejores nombres para tu mascota. Realizado con inteligencia artificial para que puedas escoger un buen nombre.</p>
        </div>
        <div className='Response'>
          <UploadAndDisplayImage />
        </div>
      </div>
      
    </div>
  );
}

export default App;
