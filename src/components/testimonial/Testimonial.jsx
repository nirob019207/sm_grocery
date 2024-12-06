import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles (optional)
import { Pagination, Autoplay } from 'swiper/modules';
import testimoinal1 from '../../assets/testimonial.jpg';

const testimonials = [
  {
    image: testimoinal1,
    description: "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
    name: "John Doe",
    profession: "Software Engineer",
  },
  {
    image: testimoinal1,
    description: "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
    name: "Jane Smith",
    profession: "Nutritionist",
  },
  {
    image: testimoinal1,
    description: "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
    name: "Michael Brown",
    profession: "Chef",
  },
  {
    image: testimoinal1,
    description: "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
    name: "Emily White",
    profession: "Blogger",
  },
];

export const Testimonial = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center">
        <h3 className="text-green-title bg-green-50 py-1 px-2 rounded-lg inline-block text-lg font-primary text-[20px]">
          Testimonial
        </h3>
        <p className="text-[32px] font-primary font-bold mt-3">
          What Our Customers Say
        </p>
        <p className="text-md mt-4 lg:max-w-[720px] max-w-[350px] mx-auto text-center">
          Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:
        </p>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // Time between slides in milliseconds
          disableOnInteraction: false, // Keeps autoplay active even after user interaction
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mt-10"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center py-16">
              <div className="flex justify-center items-center ">
                <div className="rounded-xl ">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-[80px] h-[350px] w-[260px]"
                  />
                </div>
              </div>
              <div className="bg-slate-100 p-10 rounded-md">
                <p className="mt-6 text-lg text-gray-600 italic font-primary mx-auto">
                  "{testimonial.description}"
                </p>
                <div className="flex items-center mt-4 ">
                  <span className="font-bold font-primary text-xl text-gray-800 mr-4">
                    {testimonial.name} -
                  </span>
                  <span className="text-sm text-gray-500">
                    {testimonial.profession}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
