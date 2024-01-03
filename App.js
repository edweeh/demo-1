
import React from 'react';
import AdminPage from './components/Adminside/Adminpage';
import DeleteList from './components/Adminside/DeleteList';
import Login from './components/Login/Login';

import Psignup from './components/Psignup';

// import Navbar from './components/Navbar';
// import LoginPage from './LoginPage'; // Adjust the path based on your project structure

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Psignup/> */}
      {/* <Login/> */}
      <AdminPage/>
      <DeleteList/>
      
    </div>
  );
};

export default App;

