import Card from './cards';
import CardImgOne from '/cardImgOne.png';
import CardImgTwo from '/cardImgTwo.png';
import CardImgThree from '/cardImgThree.png';
import CardOne from '/card6.png';
import CardTwo from '/card7.png';
import CardThree from '/card8.png';
import IconOne from '/icon1.svg';
import IconTwo from '/icon2.svg';
import IconThree from '/icon3.svg';
import IconFour from '/icon4.svg';
import FAQsPage from '../../pages/faqs';
import { useNavigate } from 'react-router-dom';
import Faqs from './faqs';

function Section() {
    const navigate = useNavigate()

  return (
    <div className='scroll-smooth'>
        <div className='py-8'>
            <Card />
        </div>
        <div className='text-center mt-24'>
            <p className='text-lighter-grey text-xl uppercase leading-10 font-gilroy-light'>our services</p>
            <h1 className='text-grey text-5xl leading-2 py-2 font-general-sans-semibold'>
                Creating Unique Experiences For<br/>
                Unconventional Designs
            </h1>
            <p className='text-lighter-grey text-xl leading-10 py-0 font-gilroy-light'>The modular mix and match solution for your business</p>
        </div>
        <div className='flex flex-row items-center justify-center my-12'>
            <div className="bg-white relative rounded-3xl w-[330px] h-[420px] p-0 mx-2 hover:bg-orange-200 cursor-grab hover:scale-110 hover:mx-4 hover:duration-75">
                <img src={CardImgOne} alt={CardImgOne} className='w-[330px] h-[230px] p-3'  /> 
                <h2 className='text-2xl font-semibold text-black text-left px-3 py-1'>Design Experience</h2>
                <p className='text-md text-left text-light-black px-3 py-1'>
                    In todays digital world your websites is <br/>
                    the first impression you make. We will <br/>
                    help you create a website that is <br/>
                    visually stunning and user friendly <br/>
                    from a design to developement
                </p>
                <div className='bg-reddish w-[50px] absolute right-0 bottom-0 h-[50px] rounded-full'></div>
            </div>
            <div className="bg-white relative rounded-3xl w-[330px] h-[420px] p-0 mx-2 hover:bg-orange-200 cursor-grab hover:scale-110 hover:mx-4 hover:duration-75">
                <img src={CardImgTwo} alt={CardImgTwo} className='w-[330px] h-[230px] p-3' />
                <h2 className='text-2xl font-semibold text-black text-left px-3 py-1'>Brand Design</h2>
                <p className='text-md text-left text-light-black px-3 py-1'>
                   Your brand is your identity. Put your <br/>
                   best foot forward with a strong, <br/>
                   unique brand by your side which helps <br/>
                   you turn head and stand out from the <br/>
                   crowd
                </p>
                <div className='bg-greenish w-[50px] absolute right-0 bottom-0 h-[50px] rounded-full'></div>
            </div>
            <div className="bg-white relative rounded-3xl w-[330px] h-[420px] p-0 mx-2 hover:bg-orange-200 cursor-grab hover:scale-110 hover:mx-4 hover:duration-75">
                <img src={CardImgThree} alt={CardImgThree} className='w-[330px] h-[230px] p-3' /> 
                <h2 className='text-2xl font-semibold text-black text-left px-3 py-1'>Creative Design</h2>
                <p className='text-md text-left text-light-black px-3 py-1'>
                    Our team of creative designer will <br/>
                    work with you to create design that <br/>
                    reflects your unique identity and helps <br/>
                    you achieve marketing goals 
                </p>
                <div className='bg-yellowish w-[50px] absolute right-0 bottom-0 h-[50px] rounded-full'></div>
            </div>
        </div>
        <div className='flex flex-row justify-around mx-14 py-20'>
            <div>
                <p className='text-lighter-grey uppercase font-thin text-xl leading-10'>about us</p>
                <h1 className='text-grey text-4xl leading-2 py-2'>
                    I Make Creative <br/>
                    Things Everyday
                </h1>
            </div>
            <div>
                <p className='text-lighter-grey leading-6 font-thin text-lg'>
                    With a deep passion for design and technology, weve found our <br/>
                    purpose in crafting high-converting landing pages that not only <br/>
                    captivate but perform.
                </p>
                <p className='text-lighter-grey leading-6 py-2 font-thin text-lg'>
                    We help startup and enterprise design digital product that just <br/>
                    works
                </p>
                <button  onClick={() => navigate('/bookcall', {replace: true})} className="px-10 my-2 font-normal text-grey text-md border bg-transparent rounded-full py-2 hover:bg-light-orange hover:transition hover:ease-in-out hover:border-none hover:duration-0" >Book A Call</button>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center w-full px-44 mb-22'>
            <div className="bg-[url('/frame2.png')] bg-cover bg-no-repeat rounded-3xl w-full h-[300px] px-8 py-10 mx-2 hover:skew-x-3 hover:duration-0 hover:delay-0">
                <h2 className='text-black text-3xl font-medium leading-2 py-2'>
                    Enough Talk Lets<br/>
                    Get To Work!!
                </h2>
                <p className='text-dark leading-6 font-medium text-sm py-2'>
                    Its really competitive out there, We can help<br/>
                    you transvere in the right direction to take<br/> 
                    your project to new heights
                </p>
                <button onClick={() => navigate('/bookcall', {replace: true})} className="px-6 my-2 font-normal text-grey bg-black text-white text-md border border-black rounded-full py-2 hover:bg-orange-700 hover:border-none" >Start Your Project</button>
            </div>
        </div>
        <div className='w-full py-16 flex relative flex-col px-44'>
            <div>
                <p className='text-lighter-grey uppercase font-thin text-xl leading-10'>our works</p>
                <h2 className='text-grey text-4xl leading-2 py-2'>
                    Bringing Brands To <br/>
                    Life Digitally
                </h2>
            </div>
            <div className='flex flex-row justify-center items-center py-10 gap-5 cursor-pointer'>
                <div className='bg-neutral-300 relative w-[360px] h-[350px] rounded-2xl translate-y-0 hover:translate-y-16 hover:duration-75 hover:delay-0 hover:ease-linear'>
                    <img src={CardOne} alt={CardOne} className='w-[360px] px-0 h-[350px] rounded-lg mix-blend-multiply' />
                    <div className='absolute bottom-4 left-4'>
                        <button className='text-sm border font-normal text-white py-1 px-3 rounded-full bg-neutral-500 mx-1'>Ui Design</button>
                        <button className='text-sm border font-normal text-white py-1 px-3 rounded-full bg-neutral-500 mx-1'>Portfolio Website</button>
                    </div>
                </div>
                <div className='bg-neutral-300 relative w-[360px] h-[350px] rounded-2xl translate-y-8 hover:translate-y-14'>
                    <img src={CardTwo} alt={CardTwo} className='w-[360px] px-0 h-[350px] rounded-lg mix-blend-multiply'/>
                   <div className='absolute bottom-4 left-4'>
                        <button className='text-sm border font-normal text-white py-1 px-3 rounded-full bg-neutral-500 mx-1'>Ui Design</button>
                        <button className='text-sm border font-normal text-white py-1 px-3 rounded-full bg-neutral-500 mx-1'>Portfolio Website</button>
                    </div>
                </div>
                <div className='bg-neutral-300 relative w-[360px] h-[350px] rounded-3xl translate-y-16 hover:-translate-y-2'>
                    <img src={CardThree} alt={CardThree} className='w-[360px] px-0 h-[350px] rounded-3xl border-white mix-blend-multiply'/>
                    <div className='absolute bottom-4 left-4'>
                        <button className='text-sm border font-normal text-white py-1 px-3 rounded-full bg-neutral-500 mx-1'>Ui Design</button>
                        <button className='text-sm border font-normal text-white py-1 px-3 rounded-full bg-neutral-500 mx-1'>Portfolio Website</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center my-16 items-center'>
                <button  onClick={() => navigate('/works', {replace: true})} className="px-8 font-medium text-white text-md bg-light-orange rounded-full py-2 hover:bg-transparent hover:border">View More</button>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center w-full px-44 py-16'>
            <div className="bg-[url('/frame3.png')] bg-cover bg-no-repeat rounded-3xl w-full h-[280px] px-8 py-10 mx-2 hover:skew-x-3 hover:duration-0 hover:delay-0">
                <h2 className='text-center font-medium text-5xl'>Weve Worked On Over </h2>
                <div>
                    <div className='font-medium text-3xl py-10 flex items-center justify-center'>
                        <p className='flex items-center justify-center'>
                            <span className='text-7xl font-semibold'>10+</span>
                            <span className='text-lg pt-4 font-normal'>Industries</span>  
                            <span className='px-10 text-5xl'>|</span>
                        </p>
                        <p className='flex items-center justify-center'>
                            <span className='text-7xl font-semibold'>15+</span>
                            <span className='text-lg pt-4 font-normal'>Web Pages</span>   
                            <span className='px-10 text-5xl'>|</span>
                        </p>
                        <p className='flex items-center justify-center'>
                            <span className='text-7xl font-semibold'>10+</span>
                            <span className='text-lg pt-4 font-normal'>Clients</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center w-full px-44 py-16'>
            <div className='text-white'>
                <p className='uppercase font-normal text-bas text-lighter-grey leading-10'>our precious clients</p>
                <h2 className='text-4xl text-grey leading-10 py-2 font-medium'>
                    We Dont Work For Clients,<br/>
                    We Work With Clients
                </h2>
            </div>
            <div className='flex flex-row items-center justify-between py-5'>
                <img src={IconOne} alt={IconOne} className='h-[60px]' />
                <img src={IconTwo} alt={IconTwo} className='h-[27px]' />
                <img src={IconThree} alt={IconThree} className='h-[60px]' />
                <img src={IconFour} alt={IconFour} className='h-[27px]' />
                <img src={IconOne} alt={IconOne} className='h-[60px]' />
            </div>
        </div>
        <div className='flex flex-col justify-center items-center w-full px-44 py-16'>
            <div className="bg-[url('/frame4.png')] bg-cover bg-no-repeat rounded-3xl w-full h-[350px] px-8 py-12 mx-2 hover:skew-x-3 hover:duration-0 hover:delay-0">
                <div className='flex flex-row items-center justify-start gap-3'>
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <p className="text-xl">5 SPOT LEFT</p>
                </div>
                <h2 className='text-black text-4xl font-bold leading-2 py-2'>
                    Hey there, how can we <br/>
                    make a difference for you?
                </h2>
                <p className='text-dark leading-6 font-medium text-lg py-2'>Reach out to learn more about how we can impact your<br/> business</p>
                <button  onClick={() => navigate('/bookcall', {replace: true})} className="px-8 my-2 font-normal bg-black text-grey text-base border border-black rounded-full py-2 hover:bg-light-orange hover:border-none">Book A Call</button>
            </div>
        </div>
        <Faqs />
    </div>
  )
}

export default Section;