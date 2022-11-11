import './App.css';
import { Boton } from './components/Boton.jsx'
import { Pantalla } from './components/Pantalla.jsx';
import { BotonClear } from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const renderInput = valor => {
      setInput( input + valor );
  };

  const renderResult = () => {
    if(input){
      setInput(evaluate(input));
    }
  };
  return (
    <div className='App'>
      <div className='contenedor'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton clickHandler={renderInput}>1</Boton>
          <Boton clickHandler={renderInput}>2</Boton>
          <Boton clickHandler={renderInput}>3</Boton>
          <Boton clickHandler={renderInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton clickHandler={renderInput}>4</Boton>
          <Boton clickHandler={renderInput}>5</Boton>
          <Boton clickHandler={renderInput}>6</Boton>
          <Boton clickHandler={renderInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton clickHandler={renderInput}>7</Boton>
          <Boton clickHandler={renderInput}>8</Boton>
          <Boton clickHandler={renderInput}>9</Boton>
          <Boton clickHandler={renderInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton clickHandler={renderResult}>=</Boton>
          <Boton clickHandler={renderInput}>0</Boton>
          <Boton clickHandler={renderInput}>.</Boton>
          <Boton clickHandler={renderInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear clearHandler={() => setInput()}>
            Clear
          </BotonClear>  
        </div>    
      </div>
    </div>
  );
};

export default App;
