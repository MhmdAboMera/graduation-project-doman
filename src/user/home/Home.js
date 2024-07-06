import AzayAzaker from "./azayAzaker/azayAzaker";
import Eltwasole from "./eltwasole/eltwasole";
import HomeLearning from "./homelearning/home_learning";
import HomeLanding from "./landing/landing";
import Links from "./links/links";
import SectionUnderLinks from "./underlinks/section";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({duration:2000});
}, []);
  return (
    <section className="home my-5">
      <HomeLanding />
      <div>
      <div data-aos="zoom-in">
      <HomeLearning />
      </div>
      <div data-aos="zoom-in">
      <Links />
      </div>
      <div data-aos="zoom-in">
      <SectionUnderLinks />
      </div>
      <div data-aos="zoom-in">
      <AzayAzaker />
      </div>
      <div data-aos="zoom-in">
      <Eltwasole />
      </div>
      </div>
    </section>
  );
}
export default Home;
