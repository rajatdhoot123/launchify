const Hero = () => {
  return (
    <div className="space-y-20">
      <div className="flex gap-6 flex-col items-center">
        <p className="text-5xl font-extrabold max-w-3xl text-center">Boost your <span className="text-white productivity bg-cover bg-no-repeat -rotate-2 inline-block">productivity</span> with our cutting-edge software.</p>
        <p className="text-center md:text-xl font-medium text-light">Try it now and take your productivity to the next level</p>
      </div>
      
      <div className='text-center text-base text-light'>
      <span className='underline text-[#0500FF] font-semibold cursor-pointer'>Download now</span> and start achieving your goals👇
      </div>
    </div>
  )
}

export default Hero
