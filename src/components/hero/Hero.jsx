import { FaApple, FaGooglePlay } from "react-icons/fa";
import fresh from "../../assets/fruit-bundle.jpg"

const Hero = () => {
  return (
    <section className=" py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
     
        <div className="flex flex-col gap-6 md:w-1/2">
      
          <div className="relative">
          <h3 className="text-green-title bg-green-50 py-1 my-2 px-2 rounded-lg inline-block text-lg font-primary text-[20px]">
            Welcome to Fresh Haravest
          </h3>
      
            <h1 className="lg:text-[80px] md:text-5xl text-3xl font-[500] leading-tight text-dark-bg">
            Fresh Fruits and Vegetables
            </h1>
            <p className="mt-16">
            At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables
            </p>
            <div className="mt-8">
                <button className="bg-orange-500 text-white px-8 rounded-2xl py-2">Shop Now</button>
            </div>
          </div>


          <div className="flex justify-end items-center  lg:p-6">
  <div className="bg-gray-100 h-[160px] flex items-center lg:w-auto w-full justify-between gap-8 px-6 rounded-lg shadow-lg  ">
    {/* Text Section */}
    <div className="text-left">
      <p className="text-sm text-green-700 bg-green-100 p-1 inline-block my-1 font-medium">Special Offer</p>
      <p className="text-2xl font-bold text-gray-800">Fresh Salad</p>
      <p className="text-lg text-green-500">
        Up to <span className="text-black font-semibold">70%</span> off
      </p>
      <p className="text-sm text-bold text-white  bg-green-600 rounded-full inline-block py-1.5 px-2 my-3">
        Code: <span className="text-orange-500 font-bold">Fresh25</span>
      </p>
    </div>
    {/* Image Section */}
    <div className="border-4 border-orange-500 rounded-full ">
      <img src={fresh} alt="Fresh Salad" className="h-24 w-24 rounded-full object-cover" />
    </div>
  </div>
</div>


          <div>
          <div className="flex gap-4 mt-4">
            <a href="#" className="flex items-center bg-black text-white shadow-md p-2 rounded-md hover:shadow-lg transition">
              <FaGooglePlay className="mr-2 text-blue-700 " />
              <div>
                <p className="text-xs">GET IT ON</p>
                <p className="font-bold">Google Play</p>
              </div>
            </a>
            <a href="#" className="flex items-center bg-black text-white shadow-md p-2 rounded-md hover:shadow-lg transition">
              <FaApple className="mr-2 text-white" />
              <div>
                <p className="text-xs">Download on the</p>
                <p className="font-bold">App Store</p>
              </div>
            </a>
          </div>
          </div>

      

         </div>

       
      </div>
    </section>
  );
};

export default Hero;
