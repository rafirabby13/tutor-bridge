const ContactInfo = () => {
    return (
      <div className="">
        <div className=" p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold  mb-6">Contact Info</h3>
          <ul className="space-y-6">
            {/* Email Section */}
            <li className="flex   items-center space-x-4">
              <div className="bg-[#6B8A7A] p-4 rounded-lg hidden md:flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#DAD3BE"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12h.008v.008H16.5V12zm-9 0h.008v.008H7.5V12zm1.5-4.5h9m-9 9h9M4.5 12h.008v.008H4.5V12zm15 0h.008v.008H19.5V12z"
                  />
                </svg>
              </div>
              <div className="">
                <h4 className="text-lg font-medium ">
                  Mail Address
                </h4>
                <p className=" hover:underline">
                  rafiahmedrabby282@gmail.com
                </p>
              </div>
            </li>
            {/* Phone Section */}
            <li className="flex items-center space-x-4">
              <div className="bg-[#6B8A7A] p-4 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#DAD3BE"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 00-2 2v12a2 2 0 002 2h6l2 3h4l2-3h6a2 2 0 002-2V7a2 2 0 00-2-2H3z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium ">Call Me</h4>
                <p className="">+8801750296501</p>
              </div>
            </li>
            {/* WhatsApp Section */}
            <li className="flex items-center space-x-4">
              <div className="bg-[#6B8A7A] p-4 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#DAD3BE"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 00-2 2v12a2 2 0 002 2h6l2 3h4l2-3h6a2 2 0 002-2V7a2 2 0 00-2-2H3z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium ">
                  WhatsApp Number
                </h4>
                <a
                  href="https://wa.me/8801234567890"
                  className=" hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +8801894356001
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default ContactInfo;
  