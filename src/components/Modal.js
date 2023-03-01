import { Modal } from "antd";
import React, { forwardRef, useImperativeHandle, useState } from "react";

const ModalComponent = forwardRef((props, ref) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   useImperativeHandle(ref, () => ({
      showAlert(id) {
         setIsModalOpen(true);
         console.log("id", id)
      }
   }), []);
   const handleOk = () => {
      setIsModalOpen(false);
   };
   const handleCancel = () => {
      setIsModalOpen(false);
   };
   console.log("render")
   return (
      <>

         <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
         </Modal>
      </>
   );
});

export default ModalComponent;