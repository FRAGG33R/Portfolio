import Image from "next/image"
import Me from '../assets/Me_2.jpg'
import styles from '../styles/landingPage.module.css'
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useRef } from "react"
import Typewriter from 'typewriter-effect';
import Link from "next/link"

export default function LandingPage() {
	const container = {
		hidden: { opacity: 1, scale: 0 },
			visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.1,
				staggerChildren: 0.27
			}
		}
	};
	const __img_container = {
		hidden: { opacity: 0 },
			visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.40,
				staggerChildren: 0.1,
				duration: 2.7
			}
		}
	};
	const item = {
		hidden: { x : -150, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1
		}
	};
	const __img = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1
		}
	};
	return (
		<div className="flex flex-col items-center justify-end h-screen w-screen">
		{/* <div className="flex lg:flex-row xs:flex-col-reverse lg:justify-center items-center h-4/5 w-screen">
			<motion.div
					variants={container}
					initial="hidden"
					animate="visible"
					className="xs:w-full lg:w-1/2 xl:w-2/6 h-full flex flex-col items-center justify-center lg:text-5xl xs:text-3xl text-white font-Bai">
				<motion.div variants={item} className="text-white md:text-lg xs:text-xs font-extralight md:pb-5">
					<p>WELCOME TO MY WORLD</p>
				</motion.div>
				<motion.div variants={item} className="text-white text-left">
					<p>Hi, I'm <span className="text-fav-color">Aissam</span></p>
				</motion.div>
				<motion.div variants={item} className="md:pb-5">
					<Typewriter
						options={{
							autoStart: true,
							loop: true,
							cursorClassName: "text-fav-color",
							delay: 110,
						}}
						onInit={(typewriter) => {
							typewriter.typeString('')
							.deleteAll()
							.pauseFor(350)
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
				</motion.div>
				<motion.div variants={item} className="flex items-center justify-centertext-white xs:text-xs md:text-lg lg:text-xl xl:w-[700px] lg:w-[500px] md:w-[500px] xs:w-[300px] font-light  xl:text-center xs:text-left md:pb-5 tracking-widest md:pt-6">
					<p>
						For more than three years, I work hard everyday to turn code into magic.
						However, I found out that  web3 is the magic itself.
					</p>
				</motion.div>
				<motion.div variants={item} className="flex flex-row  justify-center items-center pt-6">
					<div className="h-20 w-20">
						<Link href="https://github.com/FRAGG33R" target="_blank">
							<FontAwesomeIcon className="hover:text-fav-color w-9 h-9" icon={faGithub} />
						</Link>
					</div>
					<div className="h-20 w-20">
						<Link href="https://www.linkedin.com/in/aissam-barchil-846408211/" target="_blank">
							<FontAwesomeIcon className="hover:text-fav-color w-9 h-9" icon={faLinkedin} />
						</Link>
					</div>
					<div className="h-20 w-20">
						<Link href="https://twitter.com/FR4_GG3R" target="_blank">
							<FontAwesomeIcon className="hover:text-fav-color w-9 h-9" icon={faTwitter} />
						</Link>
					</div>
				</motion.div> 
			</motion.div>
			<motion.div
			variants={__img_container}
			initial="hidden"
			animate="visible"
			className="xs:w-full lg:w-1/2 xl:w-2/6 h-full flex items-center justify-center pb-6">
				<motion.div variants={__img}>
					<Image alt="image" className={styles.Img} src={Me} width={550} height={550}/>
				</motion.div>
			</motion.div>
		</div>
			<div className="flex items-end justify-center md:h-1/5 md:w-full pb-5">
			<div className={styles.mouse}></div>	 
			</div> */}
		</div>
		
	);
}