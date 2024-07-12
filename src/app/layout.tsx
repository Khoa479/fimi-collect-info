import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Fimi',
	description: 'Fimi - Giải Pháp Bán Hàng Đa Kênh'
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang='en'>
			<body className={font.className}>{children}</body>
		</html>
	)
}

export default RootLayout
