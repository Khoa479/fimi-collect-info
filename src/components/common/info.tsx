import Image from 'next/image'
import { FC, ReactNode } from 'react'

export interface InfoProps {
	icon: string
	value: ReactNode
}

const Info: FC<InfoProps> = ({ icon, value }) => {
	return (
		<div className='flex items-center gap-2 text-[8px] font-semibold tracking-wide'>
			<Image
				src={`/${icon}.svg`}
				alt={icon}
				width={5}
				height={5}
				className='h-6 w-6'
			/>
			{value}
		</div>
	)
}

export default Info
