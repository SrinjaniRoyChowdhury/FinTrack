import Homepage from "./components/Home";
import { ConfigProvider } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from "./components/Home/Signup";

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: '#F0F2F5', // Globally sets the container background
          borderRadiusLG: 8,
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;