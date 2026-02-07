import { UserOutlined, LockOutlined} from "@ant-design/icons";
import { Button, Card, Form } from "antd";
import { Input } from "antd";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <section className="flex">
      <aside className="w-1/2 hidden md:flex items-center justify-center">
        <img
          src="/login-pic.png"
          alt="welcome"
          className="object-contain"
        ></img>
      </aside>
      <article className="w-full md:w-1/2 flex items-center justify-center p-2 md:p-6 bg-white ">
        <Card className="w-full max-w-sw shadow-xl">
          <h2 className="font-bold text-[#7209B7] text-2xl text-center mb-6">
            Track Your Expense
          </h2>
          <Form name="login-form" layout="vertical">
            <Form.Item
              name="email"
              label="Username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Enter your username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please input valid password!"}
              ]}>
                <Input prefix={<LockOutlined />} placeholder="password" />
            </Form.Item>
            <Form.Item>
                <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-[#7209B7]! hover:bg-[#3A0CA3]! border-none"
                >
                    Login
                </Button>
            </Form.Item>
          </Form>
          <div className="flex items-center justify-between">
            <Link
            style={{ textDecoration: "underline"}}
            to="#"
            className=" font-medium!">
              Forgot password?
            </Link>
            <Link 
              style={{textDecoration: "underline"}}
              to="/signup"
              className="text-[#ec4177]! font-bold!">
              Don't have an account?
            </Link>
          </div>
        </Card>
      </article>
    </section>
  );
};

export default Login;

