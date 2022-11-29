import Spline from '@splinetool/react-spline';

export default function AboutMe(){
	return (
		<div className="flex lg:flex-row xs:flex-col-reverse lg:justify-center items-center h-4/5 w-screen 2xl:bg-red-500">
			<div className="xs:w-full lg:w-1/2 xl:w-2/6 h-full flex flex-col items-center justify-center lg:text-5xl xs:text-3xl text-white font-Bai ">
				<Spline scene="https://prod.spline.design/vG42Fqg6duViAFup/scene.splinecode" />
			</div>
			<div className="xs:w-full lg:w-1/2 xl:w-2/6 h-full flex items-center justify-center pb-6">

			</div>
		</div>
	)
}