import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>PhreeTech Employees | Home</title>
      <meta name="keywords" content="Employee list" />
    </Head>
    <div>
      <h1 className= {styles.title}>Homepage</h1>
      <p className = {styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, magni rerum, quia nesciunt fugiat atque optio libero quasi doloremque fuga, maxime consectetur omnis eum blanditiis vero ratione harum nemo aperiam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet, in minus optio at quod voluptatem atque! Iusto enim, magnam quibusdam sed illo quisquam beatae accusamus reiciendis, numquam nisi velit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illum ea, assumenda aspernatur earum labore. Ea quidem, ex culpa velit soluta corrupti voluptate porro accusamus labore aut quo, vitae amet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime esse repellat necessitatibus illum ex voluptatum quis voluptates assumenda in deleniti ipsa, animi quasi numquam qui et aliquid porro accusamus voluptate?
      </p>
      <Link href="/employees" className={styles.btn}>Check Employee Listing</Link>
  
    </div>
    </>
      )
}
