import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/reducer/ProjectSlice";

const CreatProject = () => {
  const projects = useSelector((state) => state.project.data);
  const dispatch = useDispatch();
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const [newProject, setNewProject] = useState({
    id: projects.length + 1,
    title: "",
    content: "",
    date: new Date().toString(),
  });

  const handleChange = (e) => {
    return setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(newProject));
    history.back("/");
  };
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
        <Input placeholder="Title" name="title" onChange={handleChange} />
      </Form.Item>
      <Form.Item label="Content">
        <TextArea
          rows={4}
          placeholder="Plz write something"
          name="content"
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary" onClick={handleSubmit}>
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreatProject;
