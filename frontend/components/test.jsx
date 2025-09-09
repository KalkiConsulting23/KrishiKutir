import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  DatePicker,
  Select,
  InputNumber,
  Button,
  Space,
  Divider,
  message,
} from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

// NOTE: In your app entry (e.g., main.tsx / index.tsx), include AntD styles:
// import "antd/dist/reset.css"; // Ant Design v5

const ITEM_OPTIONS = [
  { label: "Notebook (A5)", value: "notebook_a5" },
  { label: "Gel Pen (Blue)", value: "gel_pen_blue" },
  { label: "Stapler (Medium)", value: "stapler_m" },
  { label: "Highlighter Set", value: "highlighter_set" },
  { label: "Printer Paper (A4)", value: "paper_a4" },
  { label: "Marker (Black)", value: "marker_black" },
];

// Helper: block past dates for delivery
const disablePastDates = (current) => {
  if (!current) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return current.toDate() < today;
};

export default function OrderModalForm() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleOpen = () => {
    form.resetFields();
    form.setFieldsValue({ items: [{ item: undefined, qty: 1 }] });
    setOpen(true);
  };

  const handleCancel = () => setOpen(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      // Pretend to submit to API
      await new Promise((r) => setTimeout(r, 400));
      console.log("Submitted payload:", values);
      message.success("Order submitted");
      setOpen(false);
    } catch (e) {
      message.error("Failed to submit");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      {/* Launcher Button */}
      <Button type="primary" onClick={handleOpen} icon={<PlusOutlined />}> 
        New Order
      </Button>

      <Modal
        title="Create Order"
        open={open}
        onCancel={handleCancel}
        footer={null}
        destroyOnClose
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ items: [{ item: undefined, qty: 1 }] }}
        >
          <Divider orientation="left">Customer Details</Divider>

          <Form.Item
            name="customerName"
            label="Customer Name"
            rules={[{ required: true, message: "Please enter customer name" }]}
          >
            <Input placeholder="e.g., Acme Corp" allowClear />
          </Form.Item>

          <Form.Item
            name="deliveryDate"
            label="Delivery Date"
            rules={[{ required: true, message: "Please select delivery date" }]}
          >
            <DatePicker className="w-full" disabledDate={disablePastDates} />
          </Form.Item>

          <Divider orientation="left">Items</Divider>

          <Form.List name="items" rules={[{
            validator: async (_, items) => {
              if (!items || items.length < 1) {
                return Promise.reject(new Error("Add at least one item"));
              }
            },
          }]}
          >
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map(({ key, name, ...restField }, idx) => (
                  <Space
                    key={key}
                    align="start"
                    className="w-full mb-3"
                    wrap
                  >
                    <Form.Item
                      {...restField}
                      name={[name, "item"]}
                      label={idx === 0 ? "Item" : ""}
                      className="min-w-[240px]"
                      rules={[{ required: true, message: "Please choose an item" }]}
                    >
                      <Select
                        placeholder="Select an item"
                        options={ITEM_OPTIONS}
                        showSearch
                        filterOption={(input, option) =>
                          option?.label?.toLowerCase().includes(input.toLowerCase())
                        }
                      />
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      name={[name, "qty"]}
                      label={idx === 0 ? "Quantity" : ""}
                      rules={[{ required: true, message: "Enter quantity" }]}
                    >
                      <InputNumber min={1} max={9999} className="w-32" />
                    </Form.Item>

                    {fields.length > 1 ? (
                      <Button
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => remove(name)}
                        className="mt-7"
                      >
                        Remove
                      </Button>
                    ) : null}
                  </Space>
                ))}

                <Form.ErrorList errors={errors} />

                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add({ item: undefined, qty: 1 })}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add Item
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Divider />

          <Space style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit Order
            </Button>
          </Space>
        </Form>
      </Modal>
    </div>
  );
}
