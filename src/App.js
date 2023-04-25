import React from 'react';
import ProfilePhoto from './components/ProfilePhoto';
import FullName from './components/FullName';
import Address from './components/Adress';
function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;