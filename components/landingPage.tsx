import Image from "next/image"
import Me from '../assets/Me_2.jpg'
import styles from '../styles/landingPage.module.css'
// import Spline from '@splinetool/react-spline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useInView } from "framer-motion";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useRef } from "react"
import Typewriter from 'typewriter-effect';
export default function LandingPage() {
	function Section({ children }) {
		const ref = useRef(null);
		const isInView = useInView(ref, { once: true });
	  
		return (
		  <section ref={ref}>
			<span
			  style={{
				transform: isInView ? "none" : "translateX(-200px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
			  }}
			>
			  {children}
			</span>
		  </section>
		);
	  }
	return (
		<div className="flex lg:flex-row xs:flex-col-reverse lg:justify-center items-center h-4/5 w-screen 2xl:bg-red-500">
			<div className="xs:w-full lg:w-1/2 xl:w-2/6 h-full flex flex-col items-center justify-center lg:text-5xl xs:text-3xl text-white font-Bai">
				<div className="text-white md:text-lg xs:text-xs font-extralight md:pb-5">
					<p>WELCOME TO MY WORLD</p>
				</div>
				<div className="text-white text-left">
					<p>Hi, I'm <span className="text-fav-color">Aissam</span></p>
				</div>
				<div className="md:pb-5">
					<Typewriter
						options={{
							autoStart: true,
							loop: true,
							cursorClassName: "text-fav-color",
							delay: 110,
						}}
						onInit={(typewriter) => {
							typewriter.typeString('web developer.')
							.pauseFor(2000)
							.changeDeleteSpeed(65)
							.deleteAll()
							typewriter.typeString('web3 researcher.')
							.pauseFor(2000)
							.changeDeleteSpeed(65)
							.deleteAll()
							typewriter.typeString('blockchain enthusiast.')
							.pauseFor(2000)
							.start();
						}}
					/>
				</div>
				<div className="ext-white xs:text-xs md:text-lg lg:text-xl md:w-3/4 font-light  text-center md:pb-5 tracking-widest pt-6">
					<p>
						Im a Web developer specialized in front-end. I'm also passionate about the newest technologies such as blockchain, web3, smart contracts, decentralized applications.
					</p>
				</div>
				<div className="flex flex-row  justify-center items-center pt-6">
					<div className="h-20 w-20">
						<FontAwesomeIcon className="hover:text-fav-color w-9 h-9" icon={faGithub} />
					</div>
					<div className="h-20 w-20">
						<FontAwesomeIcon className="hover:text-fav-color w-9 h-9" icon={faLinkedin} />
					</div>
					<div className="h-20 w-20">
						<FontAwesomeIcon className="hover:text-fav-color w-9 h-9" icon={faTwitter} />
					</div>
				</div> 
			</div>
				<div className="xs:w-full lg:w-1/2 xl:w-2/6 h-full flex items-center justify-center pb-6">
					<Image alt="image" className={styles.Img} src={Me} width={550} height={550}/>
				</div>
		</div>
	);
}