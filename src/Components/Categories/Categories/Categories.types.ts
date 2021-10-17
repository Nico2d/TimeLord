export type CategoryType = {
  id: string;
  name: string;
  color: string;
};

export type CategoriesProps = {
  categories: CategoryType[];
  onNewCategoryAdd?: () => void;
  filterList: CategoryType[];
  setFilterList: React.Dispatch<React.SetStateAction<CategoryType[]>>;
  projectID: string;
};
