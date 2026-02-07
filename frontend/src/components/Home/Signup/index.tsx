import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Card, Form } from "antd";
import { Input } from "antd";
import { Link } from "react-router-dom";
import HomeLayout from "../../../layout/HomeLayout";

const Signup: React.FC = () => {
  return (
    <HomeLayout>
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
              Register To Track Your Expense
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
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Enter your name"
                />
              </Form.Item>
              <Form.Item
                name="mobile"
                label="Mobile"
                rules={[
                  { required: true, message: "Please valid phone number!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Enter your phone number"
                />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  { required: true, message: "Please input valid password!" },
                ]}
              >
                <Input prefix={<LockOutlined />} placeholder="password" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full bg-[#7209B7]! hover:bg-[#3A0CA3]! border-none"
                >
                  Signup
                </Button>
              </Form.Item>
            </Form>
            <div className="flex items-center justify-between">
              <></>
              <Link
                style={{ textDecoration: "underline" }}
                to="/"
                className="text-[#ec4177]! font-bold!"
              >
                Already have an account?
              </Link>
            </div>
          </Card>
        </article>
      </section>
    </HomeLayout>
  );
};

export default Signup;
