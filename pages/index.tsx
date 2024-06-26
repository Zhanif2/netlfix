import Header from "@/components/Header";
import { NextPage } from "next";
import Head from "next/head";

const Home:NextPage = () =>{
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title> Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </div>
  )
}


export default Home;