import { CategoryTab, HomepageHero, Section } from "@/components";
import { Category } from "@/models";
import { getTranslations } from "next-intl/server";

import './page.css';
import { Product } from "@prisma/client";

const getCategories = async () => {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`);
  return resp.json();
}

export default async function Home() {
  const categories: Category[] = await getCategories();
  const t = await getTranslations();
  let products: Array<Product>;

  return (
    <main>
      <HomepageHero />
      <Section
        className={`items`}
        title={<>{t('store_name')}</>}
      >
        {categories &&
          <CategoryTab
            // onSelectTab={(prs: Product[]) => {
            //   products = prs;
            // }}
            slidesPerView={"auto"}
            spaceBetween={18}
            items={categories}
            dir="rtl"
            loop
          />
        }
      </Section>
    </main>
  );
}
