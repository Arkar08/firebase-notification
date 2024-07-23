import { Button, Form, Input } from "antd";
import { useState } from "react";

const Signin = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 20,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 20,
            offset: 4,
          },
        }
      : null;
  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}
      style={{
        maxWidth: formLayout === "inline" ? "none" : 600,
      }}
      className=" mx-auto mt-8"
    >
      <h1 className="text-2xl font-bold text-center p-2 m-4">Sign In</h1>
      <Form.Item label="Email">
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password
          placeholder="password"
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
        />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary">Sign In</Button>
      </Form.Item>
    </Form>
  );
};

export default Signin;
