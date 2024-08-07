export default function Experiences() {
  return (
    <div id="experiences" className="bg-gray-950 py-40">
      <div className="mx-auto w-9/12 flex flex-row items-center">
        <div className="basis-1/3">
          <div className="flex flex-col">
            <div className="flex items-center">
              <svg className="stroke-gray-400 stroke-2 h-5 w-5">
                <line x1="0" y1="10px" x2="10px" y2="10px" />
              </svg>
              <h2 className="uppercase text-xs font-extralight tracking-spaci">
                career path
              </h2>
            </div>
            <h3 className="text-3xl text-white">Experiences</h3>

            <div className="flex flex-col gap-y-5 mt-10 pr-20">
              <a
                className="hover:bg-blue-200 hover:text-blue-800 flex flex-row justify-between bg-white w-full p-4 rounded-lg"
                href="https://www.apple.com/id/iphone/?&cid=wwa-id-kwgo-iphone-slid----Announce-&mnid=siUBJGkbW-dc_mtid_209252fb69410_pcrid_696755123268_pgrid_164192290274_pexid__&mtid=209252fb69410&aosid=p238"
              >
                <span>Apple</span>
              </a>
              <a
                className="hover:bg-blue-200 hover:text-blue-800 flex flex-row justify-between bg-white w-full p-4 rounded-lg"
                href="https://www.microsoft.com/id-id"
              >
                <span>Microsoft</span>
              </a>
              <a
                className="hover:bg-blue-200 hover:text-blue-800 flex flex-row justify-between bg-white w-full p-4 rounded-lg"
                href="https://www.google.com/"
              >
                <span>Google</span>
              </a>
              <a
                className="hover:bg-blue-200 hover:text-blue-800 flex flex-row justify-between bg-white w-full p-4 rounded-lg"
                href="https://purwadhika.com/"
              >
                <span>Purwadhika</span>
              </a>
            </div>
          </div>
        </div>

        <div className="basis-2/3 pl-20">
          <h4 className="text-2xl font-bold text-gray-200">
            Web Developer Purwadhika
          </h4>
          <h5 className="text-sm font-light">
            Jakarta, DKI Jakarta, Indonesia
          </h5>
          <p className="mt-5 text-light text-gray-200">
            Januari 2025 - Present : Full Time
          </p>
          <div className="mt-2">
            <span className="border-white border border-solid px-2 py-1 rounded-md text-sm font-mono">
              Swift
            </span>
            <span className="border-white border border-solid px-2 py-1 rounded-md text-sm font-mono">
              Go
            </span>
          </div>
          <hr className="my-5" />
          <ul className="list-disc list-inside leading-10">
            <li>Improving overall website performance for mobile users,</li>
            <li>
              Collaborate with back-end developers and web designers to improve
              usability,
            </li>
            <li>Add voice search feature for mobile app using dictation,</li>
            <li>
              Developing an admin panel to comply with spatial computing for
              Vision Pro.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
