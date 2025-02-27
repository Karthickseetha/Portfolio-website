import { TypeAnimation } from 'react-type-animation';
import SkillSection from '../skills/skill.component';
import { Link } from 'react-router-dom';
import profile from '../../../public/assets/profile.jpeg'

const Hero = () => {
    return ( 
        <section className='mt-10 sm:mt-16 md:mt-20'>
  <div className="grid grid-cols-1 sm:grid-cols-12">
    <div className="col-span-7 place-self-center text-center sm:text-left">
      <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
        <span className="text-transparent bg-clip-text text-yellow-500">
          Hi, I'm{" "}
        </span>
        <br />
        <TypeAnimation
          sequence={[
            "Karthick",
            1000,
            "Software Developer Associate",
            1000,
            "MindfulAi Technologies",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>
      <p className="text-slate-200 sm:text-lg mb-6 lg:text-xl">
        I'm currently working as a <strong>Software Developer Associate</strong>{" "}
        at <strong>MindfulAi Technologies</strong>.
      </p>
      <div>
        <Link to="https://www.linkedin.com/in/karthick-it/">
          <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 text-white hover:text-black border border-slate-300 hover:bg-yellow-500">
            Hire Me
          </button>
        </Link>
        <Link to="">
          <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent text-white hover:text-black border border-slate-300 mt-3 hover:bg-yellow-500">
            Download CV
          </button>
        </Link>
      </div>
    </div>
    <div className="col-span-5 place-self-center mt-6 sm:mt-8 lg:mt-0">
      <div className="w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]">
        <img
          src={profile}
          alt="portfolio"
          width={300}
          height={300}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
        />
      </div>
    </div>
  </div>

  <SkillSection />
</section>
     );
}
 
export default Hero;