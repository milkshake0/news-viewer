import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    await axios
      .get(
        'http://newsapi.org/v2/top-headlines?country=kr&apiKey=10e11a02ae354fd19874b3bbebffb1e7',
      )
      .then((response) => {
        setData(response.data);
      });
  };
  return (
    <div className="App">
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly />
      )}
    </div>
  );
}

export default App;
