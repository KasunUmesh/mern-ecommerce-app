import React from 'react'
import ProductHd from '../components/productHd/ProductHd'
import { useParams } from 'react-router-dom'
import all_products from '../utils/all_products';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import ProductDescription from '../components/productDescription/ProductDescription';
import PopularProducts from '../components/layout/PopularProducts';

const Product = () => {

  const {productId} = useParams();
  
  const product = all_products.find((e) => e.id === Number(productId));
  if (!product) {
    return <div>Product Not Found!</div>
  }
  

  return (
    <section>
      <div>
        <ProductHd product={product} />
        <ProductDisplay product={product}/>
        <ProductDescription/>
        <PopularProducts/>
      </div>
    </section>
  )
}

export default Product