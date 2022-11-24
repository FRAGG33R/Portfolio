import Image from "next/image"
import Me from '../assets/Me_2.jpg'
import styles from '../styles/landingPage.module.css'
import Typewriter from 'typewriter-effect';

export default function LandingPage()
{
	return (
		<div className="flex flex-row-reverse flex-wrap justify-evenly h-4/5 w-full">
				<div className="flex self-start justify-center">
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
					{/* <p>blockchain enthusiast</p> */}
				</div>
		</div>
	);
}