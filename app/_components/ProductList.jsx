import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { List } from 'lucide-react';

const ProductList = ({ product }) => {

    return (
        <Link href={`/product-details/${product.id}`} key={product.id}>
            <div className="flex flex-col items-center justify-between gap-6 hover:border p-1 m-3 hover:shadow-md rounded-lg border-teal-400  min-w-80 overflow-hidden ">


                <div className="m-3" >
                    <Image
                        className="rounded-t-lg h-[250px] object-contain"
                        src={product.image}
                        width={350}
                        height={250}
                        alt="post image"
                    />
                    <div className='flex justify-between pl-3 items-start bg-gray-50 w-full  h-auto'>
                        <div className="flex flex-col justify-between  items-center rounded-b-lg ">
                            <h2 className="text-[17px] font-medium p-3">{product.title}</h2>
                            <h2 className="text-[14px]  text-gray-400 flex items-center gap-1.5 p-3"><List className='w-4 h-4' />{product.category}</h2>
                        </div>
                        <h2 className="text-lg mt-3 pr-10 pt-4" >{product.price}$</h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductList;


