export default function Services() {
  return (
    <>
      <div id="services" className="bg-slate-50 pt-20 pb-20">
        <div className="w-9/12 mx-auto">
          <div className="flex flex-col place-items-center">
            <div>
              <div className="flex items-center">
                <svg className="stroke-gray-400 stroke-2 h-5 w-5">
                  <line x1="0" y1="10px" x2="10px" y2="10px" />
                </svg>
                <h2 className="uppercase text-xs font-extralight tracking-spaci">
                  services
                </h2>
              </div>
              <h3 className="text-3xl">Specialized in</h3>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 py-10">
            <div className="rounded-lg bg-white shadow-lg">
              <div className="flex flex-col items-center py-10 px-10">
                <div className="h-10 w-10 p-2 bg-blue-100 rounded-2xl">
                  <img className="w-full" src="img/crown.svg" alt="" />
                </div>
                <h4 className="text-black mt-5">UI/UX Design</h4>
                <p className="text-center font-extralight text-sm mt-2 text-gray">
                  Turn what you have in mind of a digital product into reality.
                  For any platform you consider.
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-lg">
              <div className="flex flex-col items-center py-10 px-10">
                <div className="h-10 w-10 p-2 bg-blue-100 rounded-2xl">
                  <img className="w-full" src="img/app.svg" alt="" />
                </div>
                <h4 className="text-black mt-5">Application Development</h4>
                <p className="text-center font-extralight text-sm mt-2 text-gray">
                  Standard designing, building, and implementing your
                  applications with documentation.
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-lg">
              <div className="flex flex-col items-center py-10 px-10">
                <div className="h-10 w-10 p-2 bg-blue-100 rounded-2xl">
                  <img className="w-full" src="img/globe.svg" alt="" />
                </div>
                <h4 className="text-black mt-5">Web Development</h4>
                <p className="text-center font-extralight text-sm mt-2 text-gray">
                  Create and maintain your websites and also take care of its
                  performance and traffic capacity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
