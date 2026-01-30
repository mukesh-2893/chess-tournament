"use client";

interface Props {
  message: string;
  onClose: () => void;
}

export default function Modal({ message, onClose }: Props) {
  return (
    <div className="modalOverlay" role="dialog" aria-modal="true">
      <div className="modalContent">
        <h3>Success</h3>
        <p>{message}</p>
        <button onClick={onClose} className="modalButton">
          Close
        </button>
      </div>
    </div>
  );
}
