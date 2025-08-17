'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'


export default function LayoutWrapper({
    children,
}) {

    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    )
}