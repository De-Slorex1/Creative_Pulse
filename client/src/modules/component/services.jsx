import Footer from "./footer";
import Form from "./form";
import Slides from "./slider";


function Services() {
  return (
    <>
      <div className="scroll-smooth">
        <div className="bg-[url('/home.png')] bg-cover bg-no-repeat w-full">
            <Slides />
        </div>
        <Form/>
        <Footer />
      </div>
    </>
  )
}

export default Services;