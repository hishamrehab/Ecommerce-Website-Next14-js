"use client"
import { ShoppingCart } from 'lucide-react'
import React, { useEffect, useState } from 'react'
// import ProductsCategory from './ProductsCategory'
import SkeletonProductInfo from "./SkeletonProductInfo"
import { useUser } from '@clerk/nextjs';
import { useCart } from '../../_context/CartContext';
import { useRouter } from 'next/navigation';

const ProductInfo = ({ product }) => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);
  let category = product.category;
  const { user } = useUser();
  const router = useRouter();
  useEffect(() => {
    const productIsInCart = cartList.find(cartItem => cartItem.id === product.id);
    if (productIsInCart) {
      setIsInCart(true)
    } else {
      setIsInCart(false)
    }
  }, [isInCart, cartList]);

  const handleAdd = () => {
    if (!user) {
      router.push('/sign-in')
    } else {
      // logic to Add to cart
      addToCart(product);
      console.log(cartList);
    }
  }


  return (
    <>
      {product ? (<div>
        <h2 className='text-[25px]'>{product.title}</h2>
        <h2 className='text-[20px] text-gray-400'>{category}</h2>
        <h2 className='text-[22px] text-gray-400 mt-2'>Rate : {product.rating.rate}/10</h2>

        <h2 className='text-[15px] mt-5' >{product.description}</h2>
        <h2 className='text-[32px] text-primary mt-3'>${product.price}</h2>
        {isInCart ? (
          <button className='flex gap-2 text-white bg-red-500 p-3 rounded-lg  hover:bg-red-600 mt-6' onClick={() => removeFromCart(product)}>Remove From Cart</button>
        ) : (<button className='flex gap-2 text-white bg-primary p-3 rounded-lg  hover:bg-teal-600 mt-6' onClick={handleAdd}><ShoppingCart />Add To Cart</button>)}

        {/* <ProductsCategory category={category} /> */}
      </div >) : (<SkeletonProductInfo />)
      }
    </>
  )
}

export default ProductInfo




