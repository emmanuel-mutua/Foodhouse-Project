import Image from 'next/image';
import burger from '../images/burger.jpg'
// import burger from '../images/burger.jpg'

export const BestOffer = () => {
    return (
        <section className="w-full p-8 space-y-8 bg-gray-100">
            <div className="text-center space-y-2">
                <p className="text-lg font-semibold text-yellow-500">Quality Food👌</p>
                <h1 className="text-4xl font-bold">Get The Best Offers</h1>
                <p className="text-gray-600">
                    The food at your doorstep. Why starve when you have us. Your hunger partner.
                    Straight out of the oven to your doorstep.
                </p>
            </div>
            <div className="flex flex-wrap justify-evenly gap-8">
                <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                    <Image src={burger} alt="Any day offers" className="w-32 h-32 mb-4" />
                    <h2 className="text-xl font-semibold">Any day offers</h2>
                    <p className="text-gray-600">New phenomenon Burger taste</p>
                    <p className="text-yellow-500 font-semibold">$12.90</p>
                </div>
                <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                    <Image src={burger}  alt="Other flavors" className="w-32 h-32 mb-4" />
                    <h2 className="text-xl font-semibold">Other flavors</h2>
                    <p className="text-gray-600">Save room. We made salads</p>
                    <p className="text-yellow-500 font-semibold">$12.90</p>
                </div>
                <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                    <Image src={burger}  alt="Find a poco store near you" className="w-32 h-32 mb-4" />
                    <h2 className="text-xl font-semibold">Find a poco store near you</h2>
                    <p className="text-gray-600">Locate your nearest store</p>
                </div>
            </div>
        </section>
    );
};




export default BestOffer;