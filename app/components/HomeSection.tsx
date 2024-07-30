import Image from 'next/image';
import chickenImage from "../images/chicken.png";

const HomeSection = () => {
    return (
        <section className="w-4/5 mx-auto flex flex-col lg:flex-row justify-between items-center p-12 bg-gray-0 h-screen space-y-10 lg:space-y-1 lg:space-x-1">
        <div className="flex-1 max-w-md flex flex-col justify-center lg:text-left mb-8 lg:mb-0 lg:mr-4">
            <h1 className="text-6xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Enjoy Delicious Food in <span className="text-yellow-500">Healthy Life</span>
            </h1>
            <p className="mt-4 text-3xl text-gray-600">
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
