import Image from 'next/image';
import specialOfferImage from '../images/specialOffer.png'; 

const SpecialOffer = () => {
    return (
        <section className="flex flex-col lg:flex-row justify-between items-center bg-gray-100 h-screen">
            <div className="flex-1 max-w-md flex flex-col justify-center lg:text-left mb-8 lg:mb-0 lg:mr-12">
                <button className="mt-6 px-6 py-2 bg-primary text-white text-lg rounded-md">
                    -50%
                </button>
                <h1 className="text-5xl font-bold text-gray-800">
                    Our Special Offer<span className="text-yellow-500">.</span>
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Best cooks and the best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
                </p>
                <button className="mt-6 px-6 py-2 bg-primary text-white text-lg rounded-md">
                    See All Menu
                </button>
            </div>
            <div className="flex-1 max-w-md flex items-center justify-center lg:justify-end">
                <Image src={specialOfferImage} alt="Delicious Chicken" className="w-full h-auto rounded-md" />
            </div>
        </section>
    );
};

export default SpecialOffer;
