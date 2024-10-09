"use client"

import Link from 'next/link';
import React, { useEffect } from 'react';

const RedirectPage = () => {
    useEffect(() => {
        window.location.href = 'https://app.revboost.com';
    }, []);

    return (
        <div>
            <h1>Redirecting...</h1>
            <p>If you are not redirected automatically, follow this <Link href="https://app.google.com">link</Link>.</p>
        </div>
    );
};

export default RedirectPage;
