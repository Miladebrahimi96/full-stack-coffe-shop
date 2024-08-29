import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

// Get request to fetch all categories
export async function GET(req: NextRequest, { params }: { params: { categoryId: string } }) {
  const { categoryId } = params;

  if (!categoryId) {
    return new NextResponse(JSON.stringify({ message: 'Category ID is required' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    const products = await prisma.product.findMany({
      where: {
        category_id: parseInt(categoryId, 10),
      },
      include: {
        category: true,
        cover: true,
      },
    });

    return new NextResponse(JSON.stringify(products), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}