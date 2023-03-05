const Footer = () => {
  return (
    <>
      <footer className="fixed bottom-0 left-0 right-0 z-30 w-full text-pure-black bg-pure-white">
        <div className="flex flex-row items-center justify-between w-full px-5 py-1 mx-auto bg-black">
          <a
            className="flex items-center justify-center object-cover w-8 md:justify-start max-sm:mt-3"
            href="https://jemi.so/treciaks"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="treciaks_logo.png"
              alt="TreciaKS logo that is a coffee"
              className="w-8 h-8 rounded-full"
            />
          </a>
          <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:borderL-2 sm:border-gray-200 sm:py-2 sm:mt-0">
            ©2023 Trecia Kat |
            <a
              href="https://github.com/TreciaKS"
              className="ml-1 text-gray-600"
              rel="noopener noreferrer"
              target="_blank"
            >
              @TreciaKS
            </a>
          </p>
          <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start text-melo-sky-blue">
            <a
              className="ml-3"
              href="https://twitter.com/TreciaKS"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              className="ml-3"
              href="https://www.linkedin.com/in/treciaks"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer