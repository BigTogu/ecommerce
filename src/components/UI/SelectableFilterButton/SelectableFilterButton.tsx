import { JSX } from "react";

interface Props {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export const SelectableFilterButton = ({ label, isSelected, onClick }: Props): JSX.Element => {
  return (
    <button
      className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
        isSelected ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
      }`}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
};
