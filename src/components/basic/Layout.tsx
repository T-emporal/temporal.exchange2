import { NextSeo } from 'next-seo'
import { motion } from "framer-motion";

export default function Layout({ children }: any) {
    return (
        <>
            <NextSeo title="Temporal" description="Future of Market Mechanisms" />
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{
                    type: "spring",
                    duration: 1
                }}
                className="dark overflow-auto md:overflow-hidden w-full  md:h-screen"
                // style={{
                //     background: "rgba(0, 0, 0, 1) no-repeat",
                //     backgroundSize: 'cover',
                //     backgroundAttachment: "fixed",
                // }}
                style={{
                    backgroundImage: `url('/Website-BG.webp')`,
                    backgroundSize: 'cover',
                    backgroundAttachment: "fixed",
                    backgroundRepeat: 'no-repeat'
                }}
                >
                <main>{children}</main>
            </motion.div>
        </>
    )
}