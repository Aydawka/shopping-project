import React from 'react';
import { Button } from 'antd';
import Header from "../Header"


 function Home() {
  return (
    <div className="home">
        <Header />
      <Button type="primary" className="bg-amber-700">Primary Button</Button>
    </div>
  );
}

export default Home;
