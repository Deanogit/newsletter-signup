import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="">
        <header className="mb-10">
          <Image
            src="/illustration-sign-up-mobile.svg"
            alt=""
            width={375}
            height={284}
            className="md:hidden mx-auto"
          />
          <Image
            src="/illustration-sign-up-tablet.svg"
            alt=""
            width={528}
            height={360}
            className="hidden md:block lg:hidden mx-auto"
          />
          <Image
            src="/illustration-sign-up-desktop.svg"
            alt=""
            width={400}
            height={593}
            className="hidden lg:block mx-auto"
          />
        </header>
        <main className="px-6 max-w-[375px] mx-auto">
          <h1 className="preset-1-mobile md:preset-1 mb-6">Stay updated!</h1>
          <p className="mb-6">
            Join 60,000+ product managers recieving monthly updates on:
          </p>
          <ul className="flex flex-col gap-2 mb-10">
            <li className="flex items-start">
              <Image
                src="/icon-list.svg"
                alt=""
                width={21}
                height={21}
                className="mr-4"
              />
              Product discovery and building what matters
            </li>
            <li className="flex items-start">
              <Image
                src="/icon-list.svg"
                alt=""
                width={21}
                height={21}
                className="mr-4"
              />
              Measuring to ensure updates are a success
            </li>
            <li className="flex items-start">
              <Image
                src="/icon-list.svg"
                alt=""
                width={21}
                height={21}
                className="mr-4"
              />
              And much more!
            </li>
          </ul>
          <form action="" className="flex flex-col gap-2">
            <label htmlFor="email" className="preset-3-bold">
              Email address
            </label>
            <input
              type="email"
              placeholder="email@company.com"
              className="border-1 py-4 px-6 border-[var(--cust-grey)] rounded-lg mb-6"
            />
            <button className="py-4 w-full text-white bg-[var(--cust-blue-800)] rounded-lg">
              Subscribe to monthly newsletter
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
