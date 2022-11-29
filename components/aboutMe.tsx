import Spline from '@splinetool/react-spline';

export default function AboutMe(){
	return (
		<div className="flex lg:flex-row xs:flex-col lg:justify-center items-center lg:h-4/5 xs:h-[1800px] w-screen">
			<div className="xs:w-full lg:w-1/2 xl:w-2/6 h-full flex flex-col items-center justify-center">
				<Spline scene="https://prod.spline.design/vG42Fqg6duViAFup/scene.splinecode" />
			</div>

			<div className="flex items-center xs:w-full lg:w-1/2 xl:w-2/6 h-full text-left text-white">
				<div className='flex flex-col items-center space-y-8 '>
					<div className='lg:text-4xl xs:text-2xl flex items-center'>About Me</div>
					<div className='xs:w-9/12 md:w-8/12'><p className='lg:text-lg xs:text-md text-light'>Im a Web developer specialized in front-end . I'm also passionate about the newest technologies such as blockchain, web3.0, smart contracts, decentralized applications.</p></div>
					<div className="flex flex-col space-y-12 lg:text-2xl items-center">
						<div className='flex flex-row space-x-20 self-start'><b>Name:</b> <p>Aissam Barchil</p></div>
						<div className='flex flex-row space-x-3 self-start '><b>Date of birth: </b> <p>Septembrt 17, 2002</p></div>
						<div className='flex flex-row space-x-3'><b>Email:</b><p>aissambarchil70@gmail.com</p></div>
						<div className='flex flex-row space-x-20 self-start'><b>Phone: </b><p>+212625386430</p></div>
					</div>
				</div>
			</div>
		</div>
	)
}
