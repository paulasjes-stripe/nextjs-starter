import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [publishableKey, setPublishableKey] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('api/keys', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        setPublishableKey(data.publishableKey);
      });

    fetch('api/create-payment-intent', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setClientSecret(data.clientSecret);
      });
  });

  if (!publishableKey) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Checkout page</title>
        <meta name="description" content="Checkout page" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Checkout page
        </h1>

        <p className={styles.description}>

        </p>

      </main>
    </div>
  )
}
