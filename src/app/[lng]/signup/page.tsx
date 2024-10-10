"use client"

import Link from 'next/link';
import React, { useEffect } from 'react';

const RedirectPage = () => {
    useEffect(() => {
        window.location.href = 'https://yieldbase-app.vercel.app/';
    }, []);

    return (
        <div>
            <h1>Redirecting...</h1>
            <p>If you are not redirected automatically, follow this <Link href="https://yieldbase-app.vercel.app/">link</Link>.</p>
        </div>
    );
};

export default RedirectPage;
