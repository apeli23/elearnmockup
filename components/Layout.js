import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({children }) {
  return (
    <>
      <Head>
        <title>E-learn</title>
        <meta name="description" content="figma  e-learning website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
              <a className="text-lg font-bold">Figma E-learning Application Mockup</a>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2022 Figma Mockup by Brian Apeli
          </p>
        </footer>
      </div>
    </>
  );
}