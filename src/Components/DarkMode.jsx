'use client';
import {MdLightMode} from 'react-icons/md';
import { BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { Cuprum } from 'next/font/google';
import { useState, useEffect } from 'react';

const DarkMode = () => {
    const {systemTheme, theme, setTheme} = useTheme();
    const   currentTheme  = theme === 'system' ? systemTheme : theme;
    const  [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true) , [mounted])
  return (
    <>
       {
        mounted && (currentTheme === 'dark' ? (
            <MdLightMode
             onClick={() => setTheme('light')}
            />
        )
        :
        (
            <BsFillMoonFill 
            onClick={() => setTheme('dark')}
            />
        )
       )}
    </>
  )
}

export default DarkMode;