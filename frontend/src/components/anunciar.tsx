"use client";

import { useState } from "react";
import Modal from "./modal";

export default function Anunciar() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <button onClick={handleButtonClick} className="text-orange font-normal">Anunciar</button>
      <Modal isOpen={modalOpen} onClose={closeModal}/>
    </div>
  );
}
