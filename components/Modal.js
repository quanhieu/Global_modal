import { forwardRef, useImperativeHandle, useState } from "react";

const Modal = (_, ref) => {
  const [modalState, setModalState] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => setModalState(true),
    returnVisible: () => modalState
  }));

  console.log("child rendered", modalState);

  if (!modalState) return null;

  return (
    <div className="modal">
      <p>This is my modal!</p>
      <button onClick={() => setModalState(false)}>Close</button>
    </div>
  );
};

export default forwardRef(Modal);
