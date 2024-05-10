import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-4 mx-20 ">
      <Link href="/" className="font-serif font-normal text-2xl text-black ">
        PRAEDIUM
      </Link>
      <div className="flex gap-9 items-center">
        <div className="border-black border-solid md:border flex items-center p-1">
          <input
            type="text"
            className="bg-white-600 rounded-none focus:outline-0 hidden md:block"
          />
          <a href="/resultado">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
            >
              <path
                fill="#2c2c2c"
                d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37"
              />
            </svg>
          </a>
        </div>
        <Link href="" className="text-orange font-normal">
          Anunciar
        </Link>
      </div>
    </div>
  );
}
