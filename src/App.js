import React, { useRef } from "react";
import ModalComponent from "./components/Modal";

function App() {
  const ref = useRef();
  const id = 1;
  const onClick = () => {
    ref.current.showAlert(id);
  }
  return (
    <div>
      <button onClick={onClick}>
        CliCk Me
      </button>
      <ModalComponent ref={ref} />
    </div>
  );
}

export default App;
