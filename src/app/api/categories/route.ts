import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { Category } from "@/models";


// Get request to fetch all categories
export async function GET() {
  const categories = await prisma.category.findMany({
    include: {
      subcategories: true, // Direct subcategories
    },
  });

  // Helper function to nest categories
  const nestCategories = (categories: Category[], parent_id: Number | null = null): any => {
    return categories
      .filter(category => category.parent_id === parent_id)
      .map(category => ({
        id: category.id,
        name: category.name,
        cover: category.cover,
        parent_id: category.parent_id,
        subcategories: nestCategories(categories, category.id),
      }));
  }

  const nestedCategories = nestCategories(categories);

  return NextResponse.json(nestedCategories);
}