import React from 'react';
import Link from "next/link";
import Head from "next/head";

function FirstPost(props) {
    return (
        <div>
            <Head>
                <title>最初の投稿</title>
            </Head>
            <h1>最初の投稿</h1>
            <Link href="/">ホームへ戻る</Link>
        </div>
    );
}

export default FirstPost;
