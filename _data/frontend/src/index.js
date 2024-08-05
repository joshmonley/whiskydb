import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    fetch('http://localhost:5000')
      .then(response => response.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

