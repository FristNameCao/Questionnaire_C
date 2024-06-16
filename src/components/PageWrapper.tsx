import Head from "next/head"
import { FC } from "react"
import styles from '@/styles/Common.module.scss'
import Script from "next/script"
type PropsType = {
    title: string
    desc?: string
    css?: string
    js?: string
    children: React.ReactNode
}



const PageWrapper: FC<PropsType> = (props: PropsType) => {
    const { title, desc = '', children, css = '', js = '' } = props
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={desc} />
                <meta name="description" content="width=device-width, initial-scake=1" />
                <link rel="icon" href="/src/app/favicon.ico" />
                <style>{css}</style>
            </Head>
            <main className={styles.container}>
                {children}
            </main>
            <Script id="page-js">
                {js}
            </Script>
        </>
    )


}

export default PageWrapper