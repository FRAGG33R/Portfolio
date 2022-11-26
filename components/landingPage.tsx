import Image from "next/image"
import Me from '../assets/Me_2.jpg'
import styles from '../styles/landingPage.module.css'
import Spline from '@splinetool/react-spline';

import Typewriter from 'typewriter-effect';
import Github from '../assets/github.gif'
import Linkedin from '../assets/linkedin.gif'
import Twitter from '../assets/twitter.gif'
export default function LandingPage() {
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
				<div className="ext-white xs:text-xs md:text-lg md:w-3/4 font-extralight text-center md:pb-5">
						<p>
							Im a Web developer specializing in front-end, I have Strong background in HTML, CSS, Js and Ts, also proficient in Reactjs, Nextjs, and Web3js, I'm knowledgeable in newest blockchain technologies and web3 researching.
						</p>
				</div>
				<div className="flex flex-row flex-wrap lg:pt-6">
					<div className="h-20 w-20">
						<Image alt="Github icon" src={Github} width={100} height={100}/>
					</div>
					<div className="h-20 w-20">
						<Image alt="Linkedin icon" src={Linkedin} width={100} height={100}/>
					</div>
					<div className="h-20 w-20">
						<Image alt="Twitter icon" src={Twitter} width={100} height={100}/>
					</div>
				</div> 
			</div>
				<div className="xs:w-full lg:w-1/2 xl:w-2/6 h-full flex items-center justify-center">
					<Image alt="image" className={styles.Img} src={Me} width={550} height={550}/>
				</div>
		</div>
	);
}