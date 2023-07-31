export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
  show: boolean;
}

export enum VisabilityFilter {
  All = "All",
  Active = "Active",
  Completed = "Completed"
}
