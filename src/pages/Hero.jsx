export default function Hero() {
  return (
    <>
      <div className="bg-gray-950">
        <div className="mx-auto flex h-screen items-center w-9/12 ">
          <div className="basis-1/2">
            <div className="flex items-center">
              <svg className="stroke-gray-400 stroke-2 h-5 w-5">
                <line x1="0" y1="10px" x2="10px" y2="10px" />
              </svg>
              <h2 className="uppercase text-xs font-extralight tracking-spaci">
                My Name Is
              </h2>
            </div>
            <h3 className="font-bold text-4xl text-white">
              <span>Angga </span>
              <span className="text-blue-700">Satria Bima.</span>
            </h3>
            <p className="font-light">
              Creative front-end developer with more than 5+ years of experience
              in enterprise companies and startups. Proficient in HTML, Tailwind
              CSS, Javascript, NextJS, and ReactJS. Passionate about Cats.
            </p>
            <div className="flex flex-row mt-5 space-x-3">
              <img className="w-6 h-6" src="img/Instagram.svg" alt="" />
              <img className="w-6 h-6" src="img/Github.svg" alt="" />
              <img className="w-6 h-6" src="img/Twitter.svg" alt="" />
              <img className="w-6 h-6" src="img/Linkedin.svg" alt="" />
            </div>
          </div>
          <div className="basis-1/2">
            <img className="mx-auto" src="img/prabowo1.png" alt="foto ketje" />
          </div>
        </div>
      </div>
    </>
  );
}
