export default function Contact() {
  return (
    <>
      <div id="contact" className="bg-white pt-40">
        <div className="mx-auto w-9/12 flex flex-row items-center">
          <div className="basis-1/2">
            <div className="flex flex-col">
              <div className="flex items-center">
                <svg className="stroke-gray-400 stroke-2 h-5 w-5">
                  <line x1="0" y1="10px" x2="10px" y2="10px" />
                </svg>
                <h2 className="uppercase text-xs font-extralight tracking-ngangkang">
                  Inquiry
                </h2>
              </div>
              <h3 className="text-3xl text-gray-800">Contact Me</h3>
            </div>

            <form action="#" method="POST" className="max-w-md mt-10">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold"
                >
                  name
                </label>
                <input
                  className="bg-blue-100 rounded-md px-4 py-2 w-full focus:ring-blue-950"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold"
                >
                  Email
                </label>
                <input
                  className="bg-blue-100 rounded-md px-4 py-2 w-full focus:ring-blue-950"
                  type="email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold"
                >
                  Message
                </label>
                <textarea
                  className="bg-blue-100 rounded-md px-4 py-2 w-full focus:ring-blue-950"
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                ></textarea>
              </div>
              <div>
                <button
                  className="hover:bg-blue-600 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md w-full "
                  type="submit"
                >
                  Send Email
                </button>
              </div>
            </form>
          </div>

          <div className="basis-1/2 ml-10">
            <div className="flex flex-row gap-5 p-5">
              <div className="w-10 h-10 p-2 bg-blue-100 rounded-2xl">
                <img className="w-full" src="img/pin.svg" alt="" />
              </div>
              <div>
                <h4 className="text-lg text-gray-800 font-medium">Address</h4>
                <h5 className="font-thin">Jalanin Saja Doeloe, Indonesia</h5>
              </div>
            </div>

            <div className="flex flex-row gap-5 p-5">
              <div className="w-10 h-10 p-2 bg-blue-100 rounded-2xl">
                <img className="w-full" src="img/phone call.svg" alt="" />
              </div>
              <div>
                <h4 className="text-lg text-gray-800 font-medium">
                  Phone Call
                </h4>
                <h5 className="font-thin">(+62) 8123 123 123</h5>
              </div>
            </div>

            <div className="flex flex-row gap-5 p-5">
              <div className="w-10 h-10 p-2 bg-blue-100 rounded-2xl">
                <img className="w-full" src="img/mail.svg" alt="" />
              </div>
              <div>
                <h4 className="text-lg text-gray-800 font-medium">E-Mail</h4>
                <h5 className="font-thin">anggasatria@purwadhika.com</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
