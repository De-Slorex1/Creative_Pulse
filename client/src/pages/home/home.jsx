import { headerBg, sectionBg } from '../../modules/component/bg';
import Footer from '../../modules/component/footer';
import Header from '../../modules/component/header';
import Section from '../../modules/component/section';



const HomePage = () => {
    return ( 
        <div className='w-full m-0 p-0'>
            <div style={headerBg}>
               <Header />
            </div>
           <div style={sectionBg}>
            <Section />
           </div>
           <Footer />
        </div>
     );
}
 
export default HomePage;