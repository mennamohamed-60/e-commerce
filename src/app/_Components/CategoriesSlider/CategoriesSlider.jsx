

import React from "react";
import MySwiper from "../MySwiper/MySwiper";

import { getAllCategories } from "../../_services/getAllCategories";

export default async function CategoriesSlider() {
  const allCategories = await getAllCategories();
  if (allCategories == null) {
    return null;
  }
  return (
    <>
      <MySwiper
        imagesList={allCategories.map((category) => ({
          src: category.image,          
          caption: category.name,       
        }))}
        slidesPerView={7}
        autoplay={false}
        navigation={true}
        pagination={false}
        height={300}
        
         breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 0 },   
        640: { slidesPerView: 3, spaceBetween: 0 },   
        768: { slidesPerView: 4, spaceBetween: 0 },   
        1024: { slidesPerView: 6, spaceBetween: 0 },  
        1280: { slidesPerView: 7, spaceBetween: 0 },  
      }}
      ></MySwiper>
    </>
  );
}
