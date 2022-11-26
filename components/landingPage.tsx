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
					<p>Hi, I'm <span className="text-fav-color">Aissam</span></p>
							<div>
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
							<div className="flex flex-row flex-wrap pt-32">
								<div>
									<Image alt="Github icon" src={Github} width={100} height={100}/>
								</div>
								<div>
									<Image alt="Linkedin icon" src={Linkedin} width={100} height={100}/>
								</div>
								<div>
									<Image alt="Twitter icon" src={Twitter} width={100} height={100}/>
								</div>
							</div>
						<div>
					</div>
				</div>
				<div className="xs:w-full lg:w-1/2 xl:w-2/6 h-full flex items-center justify-center">
					<Image alt="image" className={styles.Img} src={Me} width={550} height={550}/>
				</div>
		</div>
	);
}