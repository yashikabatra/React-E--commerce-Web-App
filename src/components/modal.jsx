import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";
import { useState } from "react";
import { Checkbox } from "antd";

const BrandModal = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <button className='brand_btn' onClick={showModal}>
        +
      </button>

      <Modal
        title='Brands'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {props.brand.map((c) => (
          <div>
            <Checkbox>{c}</Checkbox> <br />
          </div>
        ))}
      </Modal>
    </div>
  );
};

export default BrandModal;
