import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="bg-background max-w-[375px] md:max-w-[608px] md:p-10 md:rounded-[36px] mx-auto lg:max-w-[904px] lg:grid lg:grid-cols-2 lg:p-8 lg:gap-16">
        <header className="mb-10 lg:order-2 lg:mb-8">
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
        <main className="px-6 max-w-[375px] md:max-w-[528px] mx-auto preset-2-reg lg:max-w-[376px] lg:max-h-[450px] lg:p-0 lg:my-auto">
          <h1 className="preset-1-mobile md:preset-1 mb-6 lg:mb-8">
            Stay updated!
          </h1>
          <p className="mb-6 lg:mb-8">
            Join 60,000+ product managers recieving monthly updates on:
          </p>
          <ul className="flex flex-col gap-2 mb-10 lg:mb-8">
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
          <form action="" className="flex flex-col gap-2 lg:gap-0 pb-10">
            <label htmlFor="email" className="preset-3-bold mb-2">
              Email address
            </label>
            <input
              type="email"
              placeholder="email@company.com"
              className="border-1 py-4 px-6 border-[var(--cust-grey)] rounded-lg mb-6"
            />
            <button className="py-4 w-full text-white bg-[var(--cust-blue-800)] rounded-lg preset-2-bold">
              Subscribe to monthly newsletter
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
