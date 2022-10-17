import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'



const Home: NextPage = () => {
  return (
    <div className="bg-gray-100 h-screen overflow-y-scroll">
      <Head>
        <title>Instagram-Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header/>

      {/* Feed */}
      <Feed/>

      {/* Modal */}
      <Modal/>
    </div>
  )
}

export default Home
