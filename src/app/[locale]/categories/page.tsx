// app/page.tsx
'use client';

import { useEffect, useState } from 'react';

type Category = {
  id: number;
  name: string;
  parent_id?: number;
};

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data: Category[]) => {
        // Convert Decimal.js instances to strings or numbers as needed
        const formattedCategories = data.map((category) => ({
          ...category,
        }));
        setCategories(formattedCategories);
      });
  }, []);

  const getProducts = async (categoryId: number) => {
    const resp = await fetch(`/api/categories/${categoryId}`);
    const products = await resp.json();
    console.log(products);
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id} onClick={() => getProducts(cat.id)}>
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
