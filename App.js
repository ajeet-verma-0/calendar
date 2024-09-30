// App.js

import React from 'react';
import Datepickertofrom from './Datepickertofrom'; // Adjust the path if the file is located in a different folder
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is loaded

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Date Picker Example</h2>
      </header>

      {/* Rendering the Datepickertofrom component */}
      <Datepickertofrom />
    </div>
  );
}

export default App;
