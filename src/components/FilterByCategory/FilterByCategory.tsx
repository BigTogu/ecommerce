import { JSX, useMemo } from "react";
import { SelectableFilterButton } from "@/components/UI/SelectableFilterButton/SelectableFilterButton";
import { ProjectsFilters } from "@/services/services/projects";
import { Category } from "@/types/projects";
import { ALL_CATEGORIES_LABEL, CATEGORY_FILTER_OPTIONS } from "@/utils/constants";
import { addItem, removeItem } from "@/utils/helpers";

interface Props {
  onChange: (filters: ProjectsFilters) => void;
  selectedFilters: ProjectsFilters;
}

export default function FilterByCategory({ onChange, selectedFilters }: Readonly<Props>): JSX.Element {
  const { category: selectedCategories } = selectedFilters;

  const selectedCategorySet = useMemo(() => new Set(selectedCategories), [selectedCategories]);

  const toggleCategory = (category: Category) => {
    const isAlreadySelected = selectedCategorySet.has(category);

    const updatedCategories = isAlreadySelected
      ? removeItem(selectedCategories, category)
      : addItem(selectedCategories, category);

    onChange({ category: updatedCategories });
  };

  const handleResetFilters = () => onChange({ category: [] });

  return (
    <section className="flex flex-wrap gap-x-7 gap-y-4 justify-center items-center w-1/2 mx-auto mb-24 px-4">
      <SelectableFilterButton
        isSelected={selectedCategories.length === 0}
        label={ALL_CATEGORIES_LABEL}
        onClick={handleResetFilters}
      />

      {CATEGORY_FILTER_OPTIONS.map(({ value, label }) => (
        <SelectableFilterButton
          isSelected={selectedCategorySet.has(value)}
          key={value}
          label={label}
          onClick={() => toggleCategory(value)}
        />
      ))}
    </section>
  );
}
