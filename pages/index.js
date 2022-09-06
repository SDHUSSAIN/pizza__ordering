import Head from 'next/head'
import { Featured } from '../components/Featured'
import Pizzalist from '../components/Pizzalist'
import axios from 'axios'



export default function Home({list}) {
  return (
    <div >
      <Head>
        <title>Mangalo Pizza</title>
        <meta name="description" content="Tasty pizza in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <Pizzalist list={list}/>
    </div>
  )
}


export const getServerSideProps = async () =>{
  const res = await axios.get("http://localhost:3000/api/products");

  return{
    props:{
      list:res.data,
    },
  }
}
