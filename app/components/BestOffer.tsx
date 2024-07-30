import Image from 'next/image';
import burger from '../images/burger.jpg'
// import burger from '../images/burger.jpg'

export const BestOffer = () => {
    return(
    <div>
    <div>
   <p>Quality Food</p>
   <p className="font-bold text-4xl">Get the Best Offers</p>
   <p className="ml-24 text-[25px] font-light text-zinc-550" >The food at your door step.Why Starve when you have us.You hunger <br></br>
    patner.Striaght out of the oven to your doorstep</p>
</div>
<br></br><br></br><br></br>
<div className="flex justify-evenly"></div>
<div className="flex ">
  <div className="">
      <p className="font-bold text-4xl">Any day Offers</p>
      <p  className=" text-[25px] font-light text-zinc-550">New Phenonem <br></br>
       burger taste</p>
      <p className="text-orange-500">$12.90</p>
  </div>
    <img src="images/burger.jng" alt="" />
</div>


</div>
    )
}



export default BestOffer;