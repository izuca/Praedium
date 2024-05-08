import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button className="w-56 py-2 px-3 bg-orange text-white-600 text-sm font-thin">
      {label}
    </button>
  );
}
