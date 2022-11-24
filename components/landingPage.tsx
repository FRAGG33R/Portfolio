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
				<div className="flex justify-center items-center h-4/6 flex-wrap font-mono subpixel-antialiased text-4xl font-semibold tracking-wide text-left">
					<p className="text-white">Hi, I'm <span className="text-fav-color">Aissam</span></p>
					{/* <Typewriter
						options={{
							autoStart: true,
							loop: true,
						}}
						onInit={(typewriter) => {
						typewriter.typeString('a web3 developer')
						.pauseFor(2500)
						.deleteAll()
						typewriter.typeString('a blockchain enthusiast')
						.start();
						}}
					/> */}
				</div>
		</div>
	);
}