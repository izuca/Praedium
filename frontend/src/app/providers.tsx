'use client';

import { AuthProvider } from '@/context/AuthContext';
import '@/styles/globals.css';
import { ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
	return <AuthProvider>{children}</AuthProvider>;
}
