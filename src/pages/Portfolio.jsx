export default function Portfolios() {
  return (
    <div id="portfolio" className="bg-gray-950 py-40">
      <div className="w-9/12 mx-auto">
        <div className="flex flex-col">
          <div className="flex items-center">
            <svg className="stroke-gray-400 stroke-2 h-5 w-5">
              <line x1="0" y1="10px" x2="10px" y2="10px" />
            </svg>
            <h2 className="uppercase text-xs font-extralight tracking-spaci">
              my works
            </h2>
          </div>
          <h3 className="text-3xl text-white">Featured Portfolios</h3>
        </div>

        <div className="grid grid-cols-4 gap-20 mt-20">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              className="object-cover h-48 opacity-50"
              src="img/companyprofile.png"
              alt=""
            />
            <div className="bg-white py-2 px-4">
              <h4 className="text-sm font-medium text-gray-800">
                Company Profile
              </h4>
              <h5 className="text-sm font-mono">Tailwind CSS</h5>
            </div>
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              className="object-cover h-48 opacity-50"
              src="img/dashboard.png"
              alt=""
            />
            <div className="bg-white py-2 px-4">
              <h4 className="text-sm font-medium text-gray-800">Dashboard</h4>
              <h5 className="text-sm font-mono">React JS</h5>
            </div>
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              className="object-cover h-48 opacity-50"
              src="img/lms.png"
              alt=""
            />
            <div className="bg-white py-2 px-4">
              <h4 className="text-sm font-medium text-gray-800">LMS</h4>
              <h5 className="text-sm font-mono">PHP</h5>
            </div>
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              className="object-cover h-48 opacity-50"
              src="img/agency.png"
              alt=""
            />
            <div className="bg-white py-2 px-4">
              <h4 className="text-sm font-medium text-gray-800">
                Agency Website
              </h4>
              <h5 className="text-sm font-mono">Wordpress</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
