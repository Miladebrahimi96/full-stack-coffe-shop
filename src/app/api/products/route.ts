import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";


// Get request to fetch all categories
export async function GET() {
  const products = await prisma.product.findMany({
    include: {
      category: true, // Direct subcategories
    },
  });
  return NextResponse.json(products);
}