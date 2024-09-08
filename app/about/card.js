function PawPrintIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </svg>
  );
}

export default function Card({ characterestics }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {characterestics.map((characterestic) => (
          <div
            key={characterestic.heading}
            className="flex flex-col  border-2 my-4 border-gray-200 overflow-hidden rounded-lg bg-white shadow"
          >
            <div className="white text-xl px-4 py-5 sm:px-6 font-bold text-center bg-stone-300">
              {characterestic.heading}
            </div>

            <div className="bg-stone-200 px-4 py-5 sm:p-6 text-justify flex-grow">
              {characterestic.content}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
