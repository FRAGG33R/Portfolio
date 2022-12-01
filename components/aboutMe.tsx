import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import Me from '../assets/Me_2.jpg'
export default function AboutMe(){
	return (
		<div className="flex lg:flex-row xs:flex-col lg:justify-center items-center lg:h-4/5 xs:h-[1800px] w-screen">
			<div className="xs:w-full lg:w-1/2 xl:w-2/6 h-full flex flex-col items-center justify-center">
				<Spline scene="https://prod.spline.design/vG42Fqg6duViAFup/scene.splinecode" />
			</div>
			<div className="flex items-center justify-center xs:w-full lg:w-1/2 xl:w-2/6 h-full text-left text-black">
				<div className="mx-5 min-h-screen grid place-content-center">
					<div className="bg-black rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
						<h1 className="text-3xl mb-3">About me</h1>
						<p className="text-md text-left">Im a Web developer specialized in front-end. I'm also passionate about the newest technologies such as blockchain, web3.0, smart contracts, decentralized applications.</p>
					</div>
					<div className="bg-white py-8 rounded-md shadow-2xl transform -translate-y-20 sm:-translate-y-24 w-10/12 mx-auto">
						<div className="flex flex-col space-y-9 lg:text-xl items-start pl-5">
						<div className='flex flex-row space-x-6'><b>Name:</b> <p className='text-lg'>Aissam Barchil</p></div>
						<div className='flex flex-row space-x-2'><b>Date of birth: </b> <p className='text-lg'>Septembrt 17, 2002</p></div>
						<div className='flex flex-row space-x-2'><b>Email:</b><p className='text-lg'>aissambarchil70@gmail.com</p></div>
						<div className='flex flex-row space-x-9'><b>Phone: </b><p className='text-lg'>+212625386430</p></div>
					</div>
					<div className='flex w-full justify-center pt-5'>
						<button className="flex self-center rounded-md bg-black text-lg text-white pt-3 pb-4 px-4 ">Download resume</button>
					</div>
					</div>
				</div>
			</div>
		</div>
	)
}
