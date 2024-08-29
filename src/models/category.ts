import { Product } from "@prisma/client";

export interface Category {
  id: number;
  parent_id?: number | null;
  parent?: Category;
  name: string;
  subcategories?: Category[];
  cover?: string | null;
  products?: Product[]
}