import Image from 'next/image';
import chickenImage from "../images/chicken.png";

const HomeSection = () => {
    return (
        <section className="flex flex-col lg:flex-row justify-between items-center p-12 bg-gray-0 h-screen">
            <div className="flex-1 max-w-md flex flex-col justify-center lg:text-left mb-8 lg:mb-0 lg:mr-12">
                <h1 className="text-5xl font-bold text-gray-800">
                    Enjoy Delicious Food in <span className="text-yellow-500">Healthy Life</span>
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Tandoori masala is an Indian spice blend consisting of a variety of spices. Tandoori masala is an Indian spice blend consisting of a variety of spices.
                </p>
                <button className="mt-6 px-6 py-2 bg-primary text-white text-lg rounded-md">
                    Order Now
                </button>
            </div>
            <div className="flex-1 max-w-md flex items-center justify-center lg:justify-end">
                <Image src={chickenImage} alt="Delicious Chicken" className="w-full h-auto rounded-full"/>
            </div>
        </section>
    );
};

export default HomeSection;
