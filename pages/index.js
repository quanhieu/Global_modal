import React, { useRef } from 'react'

import Modal from '../components/Modal'
import styles from '../styles/Home.module.css'

export default function Home() {
  const modalRef = useRef(null);

  const handleOpenModal = () => {
    modalRef.current.openModal();
  };

  const handleShowLog = () => {
    console.log("log ", modalRef.current.returnVisible());
  };

  return (
    <main className="App">
      <p>Parent Component</p>
      <Modal ref={modalRef} />
      <button onClick={handleOpenModal}>Open</button>
      <button
        onClick={handleShowLog}
        style={{ position: "fixed", top: 0, left: 0 }}
      >
        Access child value
      </button>

      <h5>Inspect console to look miraculous</h5>
    </main>
  )
}
