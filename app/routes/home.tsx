import type { Route } from "./+types/home";
import { ProductPreview } from "~/product-preview/product-preview";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Product Preview" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <ProductPreview />;
}
