import { SetStateAction, useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState('');
  const [operator, setOperator] = useState('');
  const [operations, setOperations] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
    setOperations((prevOperations) => prevOperations + value);
  };

  const handleOperatorClick = (value: SetStateAction<string>) => {
    if (input) {
      setOperator(value);
      setOperations((prevOperations) => prevOperations + value);
    }
  };

  const handleCalculate = () => {
    if (input && operator) {
      const numA = parseFloat(operations.substring(0, operations.length - 1));
      const numB = parseFloat(input);
      let calculatedResult;

      switch (operator) {
        case '+':
          calculatedResult = numA + numB;
          break;
        case '-':
          calculatedResult = numA - numB;
          break;
        case '*':
          calculatedResult = numA * numB;
          break;
        case '/':
          if (numB !== 0) {
            calculatedResult = numA / numB;
          } else {
            alert("Cannot divide by zero!");
            return;
          }
          break;
        default:
          return;
      }

      setResult(calculatedResult.toString());
    }
  };

  const handleClear = () => {
    setInput('');
    setOperator('');
    setOperations('');
    setResult('');
  };

  return (
    <>
      <div className='wrapper'>
        <h1>
          Calculator
        </h1>
        <div className='inner'>
          <div className='operations'>{operations}</div>
          <div className='result'>{result}</div>
        </div>
        <div className='pad'>
          <div className='row'>
            <button onClick={() => handleNumberClick('1')}>1</button>
            <button onClick={() => handleNumberClick('2')}>2</button>
            <button onClick={() => handleNumberClick('3')}>3</button>
            <button className='operator' onClick={() => handleOperatorClick('/')}>/</button>
          </div>
          <div className='row'>
            <button onClick={() => handleNumberClick('4')}>4</button>
            <button onClick={() => handleNumberClick('5')}>5</button>
            <button onClick={() => handleNumberClick('6')}>6</button>
            <button className='operator' onClick={() => handleOperatorClick('*')}>*</button>
          </div>
          <div className='row'>
            <button onClick={() => handleNumberClick('7')}>7</button>
            <button onClick={() => handleNumberClick('8')}>8</button>
            <button onClick={() => handleNumberClick('9')}>9</button>
            <button className='operator' onClick={() => handleOperatorClick('+')}>+</button>
          </div>
          <div className='row'>
            <button>0</button>
            <button className='red' onClick={handleClear}>C</button>
            <button className='calculate' onClick={handleCalculate}>=</button>
            <button className='operator' onClick={() => handleOperatorClick('-')}>-</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
