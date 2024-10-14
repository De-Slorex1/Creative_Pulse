import Navbar from "./navbar";
import frame from '/Frame.png'


const Header = () => {
    return ( 
        <>
            <div className="bg-[url('/home.png')] bg-cover bg-no-repeat w-full">
                <Navbar />
                <div className="text-grey py-10"> 
                    <div className="text-center">
                        <p className="text-xl">5 SPOT LEFT</p>
                        <div className="py-4">
                            <h2 className="text-5xl text-grey font-general-sans-semibold leading-relaxed">
                                Double Your Leads And Land High-Paying<br/>
                                Clients With Custom Web Design
                            </h2>
                        </div>
                        <div className="pb-4">
                            <p className="text-grey text-lg font-gilroy-regular leading-8">
                                Our tailored website converts visitors into customers, helping you <br/>
                                land 4-5 figure clients faster than ever.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 justify-center items-center">
                        <button className="px-8 font-light text-grey text-md bg-light-orange rounded-full py-2 hover:bg-transparent hover:border">Book A Call</button>
                        <button className="px-8 font-light text-grey text-md border bg-transparent rounded-full py-2 hover:bg-light-orange hover:border-none">See Our Works</button>
                    </div>
                    <div className="flex flex-col justify-center items-center py-5">
                        <img src={frame} alt={frame} className="w-[15%] h-[15%]" />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Header;