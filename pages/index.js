import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout, {siteTitle} from "../components/Layout";

import Link from "next/link";
import utilStyles from "../styles/utils.module.css"
import {getPostsData} from "../lib/post";

// SSGの場合
export async function getStaticProps() {
    const allPostsData = getPostsData()
    console.log(allPostsData);
    return {
        props: {
            allPostsData,
        }
    }
}

// // SSRの場合
// export async function getServerSideProps(context) {
//     return {
//         props: {
//             // コンポーネントに渡すためのprops
//
//         }
//     }
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <section className={`${utilStyles.headingMd}`}>
            <p>プロフィール</p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2>タイトル</h2>
            <div className={styles.grid}>
                {allPostsData.map(({id, title, date, thumbnail}) => {
                    return(
                        <article key={id}>
                            <Link href={`/posts/${id}`}>
                                <img src={thumbnail} alt="" className={styles.thumbnailImage}/>
                            </Link>
                            <Link href={`/posts/${id}`}>
                                <a className={utilStyles.boldText}>{title}</a>
                            </Link>
                            <br/>
                            <small className={utilStyles.lightText}>{date}</small>
                        </article>
                    );
                })}
            </div>
        </section>
    </Layout>
  )
}
