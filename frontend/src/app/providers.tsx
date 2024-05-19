'use client';

import { AuthProvider } from '@/context/AuthContext';
import '@/styles/globals.css';
import { AppProps } from 'next/app';

export default function Providers({ children }) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
}

