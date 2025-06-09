export function HeroSection() {
  return (
    <div className="p-4 relative z-10 w-full text-center">
        <div className="flex">
      {/* Left Image */}
      <div className="w-full md:w-[40%] mb-10 md:mb-0 md:mt-25">
        <div className="relative w-56 h-56 md:w-80 md:h-80 mx-auto">
          <div className="relative w-full h-full border-2 border-white animate-morph overflow-hidden">
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center text-xl">
              Your Photo Here
            </div>
          </div>

          {/* Badges */}
          <div className=" bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 absolute -top-5 -right-5 text-white px-3 py-1 rounded-full text-sm border-2 ">
            Developer
          </div>

          <div className=" bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 absolute -bottom-3 -left-3 bg-black text-white px-3 py-1 rounded-full text-sm border-2">
            Designer
          </div>
        </div>
      </div>
      <div>
        <h1 className="mt-20 md:mt-40 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Hi, I'm Ankit Kumar
        </h1>
        <h2>I'm </h2>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
      </div>
      </div>
    </div>
  );
}
