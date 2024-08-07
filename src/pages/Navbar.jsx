export default function Navbar() {
  return (
    <>
      <header className="z-10 sticky top-0 bg-gray-950 py-5">
        <nav className="w-9/12 flex flex-row mx-auto">
          <div className="uppercase text-lg basis-1/4">
            <a href="#hero">
              <span className="font-extrabold text-white">Angga </span>
              <span className="font-extralight text-blue-400 mb-5">
                Satria Bima
              </span>
            </a>
          </div>
          <div className="basis-1/2 flex items-center justify-evenly">
            <a href="#services">
              <span>services</span>
            </a>
            <a href="#portfolio">
              <span>portfolios</span>
            </a>
            <a href="#experiences">
              <span>experiences</span>
            </a>
            <a href="#contact">
              <span>contact</span>
            </a>
          </div>
          <div className="basis-1/4 flex justify-end">
            <span className="hidden dark:inline end:0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6"
                alt="Icon"
              >
                {/* ... */}
              </svg>
            </span>
          </div>
        </nav>
      </header>
    </>
  );
}
