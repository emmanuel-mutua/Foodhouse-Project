import Image from "next/image";
import service from '../images/service.png';
export const Services = () => {
    return (
        <section className="w-full p-8 space-y-8">
            <h1 className="text-3xl text-center font-semibold">Our Services</h1>
            <div className="flex flex-wrap justify-evenly gap-8">
                <div className="flex flex-col items-center text-center">
                    <Image src={service} alt="Restaurants" className="w-32 mb-4" />
                    <p className="font-semibold">55+ Restaurants</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Image src={service} alt="Good Quality" className="w-32 mb-4" />
                    <p className="font-semibold">Good Quality</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Image src={service} alt="Discount System" className="w-32 mb-4" />
                    <p className="font-semibold">Discount System</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Image src={service} alt="Fast Delivery" className="w-32 mb-4" />
                    <p className="font-semibold">Fast Delivery</p>
                </div>
            </div>
        </section>
    );
};

