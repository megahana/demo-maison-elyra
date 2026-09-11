import type {Metadata} from 'next';import './globals.css';
import {Analytics} from '@vercel/analytics/next';
export const metadata:Metadata={title:'Maison Elyra',description:"La collection se découvre sur rendez-vous, à l'atelier ou en ligne.",icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}<Analytics /></body></html>}
