import { JSX } from "react";
import { SelectableFilterButton } from "../UI/SelectableFilterButton/SelectableFilterButton";
import { CATEGORY_FILTER_OPTIONS } from "@/services/constants";
import { ProjectsFilters } from "@/services/services/projects";
import { Category } from "@/types/projects";
import { addItem, removeItem } from "@/utils/helpers";

interface Props {
  onChange: (filters: ProjectsFilters) => void;
  selectedFilters: ProjectsFilters;
}

export default function FilterByCategory({ onChange, selectedFilters }: Props): JSX.Element {
  const handleCategoryToggle = (option: Category) => {
    const isSelected = selectedFilters.category.includes(option);
    const updatedOptions = isSelected
      ? removeItem(selectedFilters.category, option)
      : addItem(selectedFilters.category, option);
    onChange({ category: updatedOptions });
  };

  return (
    <section className="flex flex-wrap gap-2 justify-center items-center w-1/3">
      <SelectableFilterButton
        isSelected={selectedFilters.category.length === 0}
        label="TODOS"
        onClick={() => onChange({ category: [] })}
      />

      {CATEGORY_FILTER_OPTIONS.map(({ value, label }) => (
        <SelectableFilterButton
          isSelected={selectedFilters.category.includes(value)}
          key={value}
          label={label}
          onClick={() => handleCategoryToggle(value)}
        />
      ))}
    </section>
  );
}
