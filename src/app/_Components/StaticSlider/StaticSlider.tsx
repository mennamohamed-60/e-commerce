import React from "react";
import Image from "next/image";
import MySwiper from "../MySwiper/MySwiper";
import slider1 from "@images/slider-image-1.jpeg";
import slider2 from "@images/slider-image-2.jpeg";
import slider3 from "@images/slider-image-3.jpeg";

import blog1 from "@images/blog-img-1.jpeg";
import blog2 from "@images/blog-img-2.jpeg";

export default function StaticSlider() {
  return (
    <div className="mt-15 flex flex-col md:flex-row ">
     
      <div className="w-full md:w-2/3">
        <MySwiper
          imagesList={[
            { src: slider1.src },
            { src: slider2.src },
            { src: slider3.src },
          ]}
          pagination={true}
          autoplay={{ delay: 2000 }}
          height={400}
          navigation={false}
          
        />
      </div>

      
      <div className="w-full md:w-1/3 flex flex-col">
        <Image
          className="w-full h-[200px] object-cover"
          src={blog1}
          alt="blog1"
        />
        <Image
          className="w-full h-[200px] object-cover"
          src={blog2}
          alt="blog2"
        />
      </div>
    </div>
  );
}
