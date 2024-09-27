import React from "react";
import Image from "next/image";
import { List } from "lucide-react";
import Link from "next/link";

export default async function ProductsCategory({ category }) {
  console.log(category);

  async function getData(category) {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );

    return res.json();
  }

  const products = await getData(category);

  return (
    <div className="flex flex-row gap-4  justify-between p-5 flex-wrap mt-7 ">
      {products.map((product) => {
        return (
          <Link
            href={`/product-details/${product.id}`}
            key={product.id}
            className="flex flex-col items-center justify-between gap-6 hover:border p-1 hover:shadow-md rounded-lg border-teal-400  overflow-hidden mt-5"
          >
            <div className="w-[350px] h-[400px]">
              <Image
                className="rounded-t-lg h-[250px] object-contain"
                src={product.image}
                width={400}
                height={250}
                alt="post image"
              />
              <div className="flex justify-between pl-3 items-start bg-gray-50 w-[350px] h-[250px] overflow-hidden">
                <div className="flex flex-col justify-between  items-center rounded-b-lg ">
                  <h2 className="text-[17px] font-medium  p-3">
                    {product.title}
                  </h2>
                  <h2 className="text-[14px]  text-gray-400 flex items-center gap-1.5">
                    <List className="w-4 h-4" />
                    {product.category}
                  </h2>
                </div>
                <h2 className="text-lg mt-3 pr-10">{product.price}$</h2>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
