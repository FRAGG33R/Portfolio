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
				<div className="flex md:justify-center items-center flex-col h-4/6 flex-wrap font-mono text-white sm:text-3xl subpixel-antialiased font-semibold tracking-wide text-left">
					<p>Hi, I'm <span className="text-fav-color">Aissam</span></p>
					<div>
						<Typewriter
							options={{
								autoStart: true,
								loop: true,
								cursorClassName: "text-fav-color",
							}}
							onInit={(typewriter) => {
								typewriter.typeString('web developer.')
								.pauseFor(2200)
								.deleteAll()
								typewriter.typeString('web3 researcher.')
								.pauseFor(2200)
								.deleteAll()
								typewriter.typeString('blockchain enthusiast.')
								.start();
							}}
						/>
					</div>
					{/* <p>blockchain enthusiast</p> */}
				</div>
		</div>
	);
}