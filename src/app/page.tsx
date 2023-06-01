"use client"

import Head from 'next/head';
import SearchBar from "@/components/search-bar/SearchBar"; 
import { GifList } from '@/components/gif-list/GifList';

export default function Home() {
  return (
    <>
    <Head>
    <link rel="icon" href="/favicon.ico" />
    <title>Gif Market</title>
    </Head>
    <div className="dark:bg-slate-800 ">
    <h1 className="text-center dark:text-white font-bold text-4xl py-12">
    Gif Market
    </h1>
    <div className="flex justify-center">
    <SearchBar />
    </div>
    <div className="flex justify-center">
    <GifList />
    </div>
    </div>
    </>
    
  )
}
