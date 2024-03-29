'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { Button } from '@repo/ui';

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL);
  return res.json();
}

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <Button>Click me</Button>

      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </main>
  );
}
