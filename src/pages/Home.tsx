import { NavigationBar } from "@/components/NavigationBar";
import { Banner } from "@/components/Banner";
import { About} from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Home = () => {
    return(
      <div className="flex flex-col p-0 m-0 w-full">
        <NavigationBar className="fixed top-0 left-0 w-full z-50 bg-transparent" /> 
        <Banner className= "h-screen"/> 
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  };

export default Home;