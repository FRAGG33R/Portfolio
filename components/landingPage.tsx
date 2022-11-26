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
		<div className="flex lg:flex-row xs:flex-col-reverse lg:justify-center items-center h-4/5 w-screen">
				<div className="xs:w-full lg:w-1/2 h-full lg:flex lg:items-center lg:justify-center">
					<p>Hi, I'm <span className="text-fav-color">Aissam</span></p>
							<div>
								<Typewriter
									options={{
										autoStart: true,
										loop: true,
										cursorClassName: "text-fav-color",
										delay: 65,
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
									<Image src={Github} width={100} height={100}/>
								</div>
								<div>
									<Image src={Linkedin} width={100} height={100}/>
								</div>
								<div>
									<Image src={Twitter} width={100} height={100}/>
								</div>
							</div>
						<div>
					</div>
				</div>
				<div className="xs:w-full lg:w-1/2 h-full flex items-center justify-center">
					<Image className={styles.Img} src={Me} width={450} height={450}/>
				</div>
		</div>
	);
}