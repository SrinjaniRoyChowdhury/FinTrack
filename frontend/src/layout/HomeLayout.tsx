import React from 'react';
import { Layout, theme } from 'antd';

const { Header, Footer, Content } = Layout;

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  // Extracting design tokens for styling consistency
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout >
      <Header className='bg-[#7209B7]! flex items-center justify-center'>
        <h1 className='text-[#ebf7fb] text-lg md:text-2xl font-bold text-center'>
          FinTrack - Expense Tracking Web Application
        </h1>
      </Header>
      
      <Content 
        style={{
          margin: '24px 16px', 
          padding: '24px', 
          minHeight: '280px', 
          background: colorBgContainer, 
          borderRadius: borderRadiusLG, 
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)' 
        }} 
      >
        {children}
      </Content>
      <Footer className="bg-[#3A0CA3]! ">
        <h6 className='text-white text-center'>FinTrack ©{new Date().getFullYear()} - Managed Expenses, Simplified Life</h6>
      </Footer>
    </Layout>
  );
};

export default HomeLayout;