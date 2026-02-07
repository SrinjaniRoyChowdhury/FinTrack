import React from 'react';
import HomeLayout from "../../layout/HomeLayout";
import Login from './Login';


const Homepage: React.FC = () => {
  return (
    <HomeLayout>  
      <Login />
    </HomeLayout>
  );
};

export default Homepage;