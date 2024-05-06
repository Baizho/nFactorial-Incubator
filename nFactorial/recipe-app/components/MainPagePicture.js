'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PictureLoading from '../components/PictureLoading'
import picture from '../static/images/mainrecipe.jpeg';

export default function MainPagePicture() {
    const [WindowWidth, setWidth] = useState(0);
    const [WindowHeight, setHeight] = useState(0);
    const [Loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
        setWidth(window.innerWidth)
        setHeight(window.innerHeight);
    }, []);

    if(Loading === true) return <PictureLoading />
    
    return (
        <>
            <Image priority={true} src={picture} width={WindowWidth / 1.6} height={WindowHeight / 1.6} style={{borderRadius:20}} alt="mainpicture" ></Image>
        </>
    )
}