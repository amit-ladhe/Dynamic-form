import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Styleform from './component/Styleform';
import StyledPreview from './component/StylePreview';

function App() {

  const [style, setStyle] = useState({
    backgroundColor: '#ffffff',
    textColor: '#000000',
    fontStyle: 'Arial',
    fontSize: 16,
  });

  const applyStyle = (newStyle) => {
    setStyle(newStyle);
  };


  return (
     <div className="container">
      <h1 className="text-center">Dynamic CSS Styling Form</h1>
      <Styleform onApplyStyle={applyStyle} />
      <StyledPreview style={style} />
    </div>
  );
}

export default App;
