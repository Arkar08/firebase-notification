import { Button, Form, Input } from "antd";
import { useState } from "react";

const CreatProject = () => {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
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
      <h1 className="text-2xl font-bold text-center p-2 m-4">New Project</h1>
      <Form.Item label="Title">
        <Input placeholder="Title" />
      </Form.Item>
      <Form.Item label="Content">
        <TextArea rows={4} placeholder="Plz write something" maxLength={6} />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary">Create</Button>
      </Form.Item>
    </Form>
  );
};

export default CreatProject;
