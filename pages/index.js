import Head from 'next/head';
import { useState } from 'react';

const Home = () => {

  const [input, setInput] = useState('');

  const subscribe = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('./api/subscribe', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailAddress: input
        })
      })

      if (res.status === 200) {
        alert('You are subscribed!')
      } else {
        alert('Sorry, something went wrong.')
      }
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className='p-8 justify-center items-center h-screen flex'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form className='flex'>
        <input value={input}
          onChange={e => setInput(e.target.value)} className='bg-gray-200 shadow-inner rounded-l p-2 flex-1 w-64' id='email' type='email' aria-label='email address' placeholder='Enter your email address' />
        <button onClick={subscribe} className='bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r' type='submit'>
          Sign Up
              </button>
      </form>
    </div>
  )
}

export default Home