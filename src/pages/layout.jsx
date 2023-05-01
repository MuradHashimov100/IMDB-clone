'use client';
import React from 'react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import ThemeProvider from '@/Providers/ThemeProvider';
import { Header} from '@/Components/Header';
import SearchBox from '@/Components/SearchBox';
import { Fragment } from 'react';


export default function Layout({ children }) {
    return (
        <ThemeProvider>
             <Header></Header>
             <Navbar/>
             <SearchBox/>
            <div>{children}</div>
            {/* <Footer></Footer> */}

        </ThemeProvider>
    )
  };

