import React from 'react'
import { Products } from '../../components/products/Products'
import { About } from '../../components/about/About'
import { FoodBundle } from '../../components/foodBundle/FoodBundle'
import { Testimonial } from '../../components/testimonial/Testimonial'
import { Blog } from '../../components/blog/Blog'
import Hero from '../../components/hero/Hero'


export const Home = () => {
  return (
    <div>
     
        <Products/>
        <About/>
        <FoodBundle/>
        <Testimonial/>
        <Blog/>

    </div>
  )
}
