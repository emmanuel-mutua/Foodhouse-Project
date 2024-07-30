import Image from "next/image";
import foodImage from "../images/food.jpeg";

const PopularFoods = () => {
  return (
    <section className="w-4/5 p-6 md:p-12 bg-white rounded-md">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8">Popular Foods</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        <div className="text-center">
          <Image src={foodImage} alt="Fruit Dish" className="w-50 h-50 md:w-40 md:h-40 mb-4 rounded-full mx-auto" />
          <h3 className="text-lg md:text-xl font-semibold">Fruit Dish</h3>
          <p className="text-gray-600">Dinko Food</p>
          <p className="text-center mt-[20px]">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
          <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md">Add to Cart - $696</button>
        </div>
        <div className="text-center">
          <Image src={foodImage} alt="Fruit Dish" className="w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full mx-auto" />
          <h3 className="text-lg md:text-xl font-semibold">Fruit Dish</h3>
          <p className="text-gray-600">Dinko Food</p>
          <p className="text-center mt-[20px]">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
          <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md">Add to Cart - $696</button>
        </div>
        <div className="text-center">
          <Image src={foodImage} alt="Sea Fish Dish" className="w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full mx-auto" />
          <h3 className="text-lg md:text-xl font-semibold">Sea Fish Dish</h3>
          <p className="text-gray-600">Dinko Food</p>
          <p className="text-center mt-[20px]">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
          <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md">Add to Cart - $696</button>
        </div>
        <div className="text-center">
          <Image src={foodImage} alt="Pizza" className="w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full mx-auto" />
          <h3 className="text-lg md:text-xl font-semibold">Pizza</h3>
          <p className="text-gray-600">Dinko Food</p>
          <p className="text-center mt-[20px]">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
          <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md">Add to Cart - $696</button>
        </div>
      </div>
    </section>
  );
};

export default PopularFoods;
