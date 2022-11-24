import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navBar'
import LandingPage from '../components/landingPage'
export default function Home(){
  return (
	//include my component
	<div className='h-screen w-screen'>
		<NavBar />
		<LandingPage />
	</div>
  )
}
