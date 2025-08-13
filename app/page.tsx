'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    setIsTouched(true);
  }

  function handleBlur() {
    setIsTouched(true);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isValid) {
      setSubmitted(true);
    }
  }

  return (
    <>
      {!submitted ? (
        <div className="bg-background max-w-[375px] md:max-w-[608px] md:p-10 md:rounded-[36px] mx-auto lg:max-w-[904px] lg:grid lg:grid-cols-2 lg:p-8 lg:gap-16">
          <header className="mb-10 lg:order-2 lg:mb-0">
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
            <form
              onSubmit={handleSubmit}
              action=""
              noValidate
              className="flex flex-col gap-2 lg:gap-0 pb-10"
            >
              <label htmlFor="email" className="preset-3-bold mb-2 flex">
                Email address
                <span
                  className={`ml-auto text-[var(--cust-red)] ${
                    isTouched && !isValid && value ? 'block' : 'hidden'
                  }`}
                >
                  Valid email required
                </span>
              </label>
              <input
                onChange={handleChange}
                value={value}
                onBlur={handleBlur}
                id="email-input"
                type="email"
                placeholder="email@company.com"
                className={`border py-4 px-6 rounded-lg mb-6 outline-none ${
                  isTouched
                    ? isValid
                      ? 'border-lime-400'
                      : 'border-[var(--cust-red)] text-[var(--cust-red)] bg-[var(--cust-red-op)]'
                    : 'border-[var(--cust-grey)]'
                }`}
                required
              />
              <button
                type="submit"
                disabled={!isValid}
                className={`py-4 w-full text-white bg-[var(--cust-blue-800)] rounded-lg preset-2-bold ${
                  isValid
                    ? 'border-lime-400 border cursor-pointer hover:text-lime-400 lg:bg-linear-to-r lg:from-[var(--cust-grad-red)] lg:to-[var(--cust-grad-pink)] lg:hover:text-white'
                    : 'cursor-not-allowed'
                }`}
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </main>
        </div>
      ) : (
        <div className="bg-background max-w-[375px] md:max-w-[504px] md:p-16 md:rounded-[36px] mx-auto  ">
          <main className="px-6 max-w-[327px] md:p-0 pt-40 md:pt-0 md:max-w-[376px] mx-auto preset-2-reg  border-red-400">
            <Image
              src="/icon-success.svg"
              alt=""
              width={64}
              height={64}
              className="mb-8"
            />
            <h1 className="preset-1-mobile md:preset-1 mb-6">
              Thanks for subscribing!
            </h1>
            <p className=" leading-[150%] mb-64 md:mb-8">
              A confirmation email has been sent to{' '}
              <span className="font-bold">{value}</span>. Please open it and
              click the button inside to confirm your subscription
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setValue('');
                setIsTouched(false);
              }}
              className="py-4 w-full text-white bg-[var(--cust-blue-800)] rounded-lg preset-2-bold mb-16 md:mb-0 cursor-pointer"
            >
              Dismiss message
            </button>
          </main>
        </div>
      )}
    </>
  );
}
