import Image from "next/image"
import Me from '../assets/Me.jpg'
import styles from '../styles/landingPage.module.css'
export default function LandingPage()
{
	return (
		<div className="flex flex-row-reverse flex-wrap justify-evenly h-4/5 w-full">
				<div className="flex self-start justify-center">
					<Image className={styles.Img} src={Me} width={450} height={450}/>
				</div>
				<div className="flex justify-center items-center h-4/6">
					<h1 className="text-white">Hi, I'm Aissam a web3 developer</h1>
				</div>
		</div>
	);
}