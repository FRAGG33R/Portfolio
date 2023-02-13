import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navBar'
import LandingPage from '../components/landingPage'
import dynamic from 'next/dynamic'
import AboutMe from '../components/aboutMe'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
	ssr: false
  });  
export default function Home(){
  return (
	<div className='h-screen w-screen'>
		<NavBar />
		<AnimatedCursor/>
		<Parallax
		pages={2}
		style={{ top: '0', left: '0' }}>
		<ParallaxLayer
			offset={0}
			speed={0.5}
			>
			<LandingPage />
		</ParallaxLayer>
		<ParallaxLayer
			offset={1}
			speed={0.4}
			style={{backgroundColor: '#1aada6' }} />
		<ParallaxLayer
			offset={0.8}
			speed={0}
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				color: 'white',
			  }}
			>
		<AboutMe/>
		</ParallaxLayer>
		</Parallax>
	</div>
  )
  }		
