import { DataType } from "../data";

export const useSearchProject = (
  projects: DataType[],
  searchTerm: string
): DataType[] => {
  const lowerCasedSearchTerm = searchTerm.toLowerCase();
  const filteredProjects: DataType[] = [];

  for (const project of projects) {
    if (doesProjectMatchSearch(project, lowerCasedSearchTerm)) {
      filteredProjects.push(project);
    }
  }

  return filteredProjects;
};

const doesProjectMatchSearch = (
  project: DataType,
  searchTerm: string
): boolean => {
  const projectName = project.projectName.toLowerCase();
  const category = project.category.toLowerCase();
  const stackItems = project.stack.map((stackItem) => stackItem.toLowerCase());

  return (
    projectName.includes(searchTerm) ||
    category.includes(searchTerm) ||
    stackItems.some((item) => item.includes(searchTerm))
  );
};
