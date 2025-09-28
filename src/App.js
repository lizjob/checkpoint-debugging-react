import React, { useState } from 'react';
import Parent from './Parent';

function App() {
  const [text, setText] = useState("Hello");

  return (
    <div>
      <h1>React Debugging Checkpoint</h1>
      <input onChange={(e) => setText(e.target.value)} />
      <Parent msg={text} /> {/* BUG: 'msg' should be 'message' */}
    </div>
  );
}

export default App;
