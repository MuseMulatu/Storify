import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-12 lg:gap-10 items-center px-4 sm:px-6 lg:px-1 ">
      <div className="text-center lg:text-left lg:mb-6 mr-10">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold dark:text-teal-400 lg:text-gray-950  tracking-tight mb-4 lg:mb-6">
          Elegant Home Furnishings
        </h1>
        <p className="max-w-lg text-base sm:text-lg lg:text-base text-gray-500 leading-relaxed mb-8">
          Create your perfect sanctuary with style and comfort. At Storify,
          craftsmanship meets design to offer you an exceptional range of
          furniture and decor.
        </p>
        <Link
          to="/products"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md transition duration-300"
        >
          Explore Our Products
        </Link>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center lg:mt-6 lg:order-1 ml-10">
        <div className="lg:carousel lg:carousel-center lg:p-4 lg:space-x-4 bg-gray-900 rounded-lg overflow-hidden">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`lg:carousel-item ${index === 0 ? "lg:current" : ""}`}
            >
              <img
                src={image}
                alt={`Hero Image ${index + 1}`}
                className="lg:rounded-lg lg:h-80 lg:w-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
