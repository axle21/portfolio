"use client"
import React from 'react'
import anime from 'animejs'
import Image from 'next/image'

interface ISplashScreen{
    finishLoading: () => void ;
}

const SplashScreen = ({finishLoading}:ISplashScreen ) => {
    const [isMounted, setIsMounted] = React.useState(false);

    const animate = () =>{
        const loader = anime.timeline({
            complete : () => finishLoading()
        })

        loader.add({
            targets: "#logo",
            delay:0,
            scale:1,
            duration:500,
            easing: "easeInOutExpo"
        }).add({
            targets: "#logo",
            delay:0,
            scale:1.25,
            duration:500,
            easing: "easeInOutExpo"
        })
        .add({
            targets: "#logo",
            delay:0,
            scale:1,
            duration:500,
            easing: "easeInOutExpo"
        }).add({
            targets: "#logo",
            delay:0,
            scale:1.25,
            duration:500,
            easing: "easeInOutExpo"
        })

    }

    React.useEffect(()=>{
        const timeOut = setTimeout(()=> setIsMounted(true), 10)
        animate()
        return () => clearTimeout(timeOut)

    })
   
    return (
        // @ts-ignore 
        <div className='flex h-screen items-center justify-center' isMounted={isMounted}>
            <Image id="logo" src="/axle-logo.png" alt="Axle" height={80} width={80}/>
        </div>
    )
}

export default SplashScreen
