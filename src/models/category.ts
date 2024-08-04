export interface Category {
  id: number;
  parent_id?: number;
  parent?: Category;
  name: string;
  subcategories?: Category[];
}