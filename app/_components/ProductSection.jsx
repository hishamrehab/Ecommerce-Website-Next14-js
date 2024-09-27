import ProductList from "./ProductList"
async function getData() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {

    throw new Error('Fail to fetch data ')
  }
  return res.json();
}

export default async function ProductSection() {
  const data = await getData();



  return (
    <div className=" py-7 container">
      <h2 className="my-4 text-2xl ">Our Latest Products</h2>
      <div
        className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  gap-8"
      >
        {data.map((product) => (
          <div key={product.id} ><ProductList product={product} /></div>
        ))}

      </div>

    </div>
  )
};



