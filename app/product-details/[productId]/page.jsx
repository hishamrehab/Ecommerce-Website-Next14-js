
import React from "react";
import Image from "next/image"
import ProductBanner from "../_components/ProductBanner"
import ProductInfo from "../_components/ProductInfo"

import ProductsCategory from "../_components/ProductsCategory";
import ProductList from "../../_components/ProductList";

export default async function Post({ params }) {
  const id = params.productId;





  async function getData(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)

    return res.json();

  }

  const product = await getData(id);
  const category = product.category;



  return (
    <div className="px-10 pt-8 md:px-28 container ">

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 justify-around gap-5 sm:gap-0 ">
        <ProductBanner product={product} />
        <ProductInfo product={product} />
      </div>
      <h2 className="mt-24 text-3xl">Similar Products</h2>
      <ProductsCategory category={category} />
    </div>

  )
}

{/* <div className={styles.container}>
<header className={styles.header}>
  <div className={styles.info}>
    <h1 className={styles.title}>{product.title}</h1>
    <p className={styles.desc}>{product.description}</p>
  </div>
  <div className={styles.imageContainer}>
    <Image src={product.thumbnail} alt={product.title} fill={true} className={styles.postImage} />
    <span className={styles.author}>Hisham Rehab</span>
  </div>

</header>
<div className={styles.content}>
  <div className={styles.gallery}>
    {product.images.map((image) => (
      <Image key={product.id} src={image} width={100} height={100} alt={product.title} />
    )
    )}
  </div>
  <p className={styles.text}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, voluptates ea, eveniet corrupti beatae dolorum sapiente fuga quisquam doloremque ex,
    enim error maiores? Molestias id quo quasi laborum qui dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nostrum recusandae? Harum
    dolor non neque ipsum tempora voluptates eos eaque, fugit sit quisquam, magnam dolorum enim. Atque dignissimos molestiae quisquam. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Officiis fugit expedita, quod perspiciatis velit delectus voluptatibus natus at. Obcaecati maxime officiis beatae neque dolor
    illum quae atque accusantium aliquid voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non aspernatur optio, minus repudiandae eius porro.        </p>
</div>
</div> */}