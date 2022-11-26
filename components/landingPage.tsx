import Image from "next/image"
import Me from '../assets/Me_2.jpg'
import styles from '../styles/landingPage.module.css'
import Spline from '@splinetool/react-spline';

import Typewriter from 'typewriter-effect';
import Github from '../assets/github.gif'
import Linkedin from '../assets/linkedin.gif'
import Twitter from '../assets/twitter.gif'
import Link from "next/link";
export default function LandingPage()
{
	return (
		<div className="flex flex-row-reverse flex-wrap justify-center  h-4/5 w-screen">
				{/* <div className="flex self-start justify-center">
					<Image className={styles.Img} src={Me} width={480} height={480}/>
				</div>
				<div className="flex justify-center items-center flex-col h-4/6 md:w-2/4 xl:w-3/12 flex-wrap font-mono text-white lg:text-3xl sm:text-xl ubpixel-antialiased font-semibold tracking-wide text-left">
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
				</div> */}
		</div>
	);
}