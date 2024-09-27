import Image from 'next/image';

const ProductBanner = ({ product }) => {

  return (
    <div>
      {product ? (<Image src={product.image} alt={product.title} width={500} height={500} className='rounded-lg' />) : (<div className='w-[500px] h-[300px] bg-slate-200 rounded-lg animate-pulse'></div>)}
    </div>
  )
}

export default ProductBanner




{/* <div className={styles.container}>
     <div >
                <h1 >{product.title}</h1>
                <p >{product.description}</p>
            </div>
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