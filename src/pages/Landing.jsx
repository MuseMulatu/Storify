import { FeaturedProducts, Hero } from "../components";

import { customFetch } from "../utils";
const url = "/products?featured=true";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);

  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <footer className="bg-gray-800 text-gray-300 pb-3 pt-7 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">About Us</h3>
              <p className="text-sm leading-relaxed">
                Muse is a web developer specializing in front-end technologies.
                He has extensive experience in the field with a range of elegant
                projects to show for it. Email him for more inquiries.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Quick Links</h3>
              <ul className="text-sm">
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:text-gray-200 transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:text-gray-200 transition duration-300"
                  >
                    Products
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:text-gray-200 transition duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:text-gray-200 transition duration-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Contact Info</h3>
              <p className="text-sm leading-relaxed">
                123 Elegant Street, Cityville, Country
                <br />
                <a href="mailto:name@rapidtables.com">
                  Email: musemulatu.g@gmail.com
                </a>
                <br />
                <a href="tel:251934963090">Call us at +(251) 93 496 3090</a>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-6 pt-4 flex justify-between items-center">
            <p className="text-sm">
              &copy; 2024 Muse Mulatu. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-gray-200 transition duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-gray-200 transition duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Landing;
