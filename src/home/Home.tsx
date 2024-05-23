import React, {useEffect} from 'react';
import { Button } from 'antd';
import Header from "../Header"


function Home() {
  useEffect(() => {
    document.title = 'Home Page';
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="home">
      <Header />
      <Button type={"primary"}
              className="mt-16 ml-16"
              data-tally-open="n0ENDP">
        Click me</Button>
    </div>
  );
}

export default Home;