interface modalProps {
  isOpen: boolean;
  onClose: () => void;
  
}

export default function Modal({ isOpen, onClose, children }: modalProps) {
  if (!isOpen) return null;

  return (
    <div className="min-w-max fixed  justify-center  bg-black">
      <h1 className="text-white-900">Oiii</h1>
    </div>
  );
}
