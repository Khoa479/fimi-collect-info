import Image from 'next/image'

import Info, { InfoProps } from '@/components/common/info'
import Wrapper from '@/components/common/wrapper'
import InfoForm from '@/components/form/info-form'

const infos: InfoProps[] = [
	{
		icon: 'company-icon',
		value: (
			<p>
				Tầng 1, Toà Nhà H3, 384 Hoàng
				<br /> Diệu, Phường 6, Quận 4, TP.HCM
			</p>
		)
	},
	{
		icon: 'mail-icon',
		value: <p>admin@fimi.tech</p>
	},
	{
		icon: 'clock-icon',
		value: <p>8:30 - 17:30 | Thứ 2 - Thứ 6</p>
	},
	{
		icon: 'phone-icon',
		value: <p>0393 017 031</p>
	}
]

const Home = () => {
	return (
		<Wrapper>
			<div className='divide-y-white relative flex h-full w-full flex-col divide-y-2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary to-red-500'>
				<div className='relative flex h-full flex-1 flex-col items-center gap-8 pt-24'>
					<Image
						src='/logo.png'
						width={112.5}
						height={50}
						alt='logo'
						className='absolute left-1 top-2 z-50 aspect-[112.5/50] w-24'
					/>
					<div className='just flex -rotate-6 flex-col items-center'>
						<p className='rounded-lg bg-[#ebd20c] p-2 text-lg font-[1000] uppercase text-white'>
							Có Căn Cước Công Dân
						</p>
						<h2 className='rounded-lg bg-primary px-16 py-2 text-2xl font-[1000] uppercase text-white'>
							Mở thẻ ngay
						</h2>
					</div>
					<div className='z-50 flex w-full items-center justify-center px-12 text-white'>
						<InfoForm />
					</div>
				</div>
				<div className='flex-col items-center space-y-4 p-2 text-white'>
					<div className='flex w-full items-center justify-between'>
						<Image
							src='/logo.png'
							width={112.5}
							height={50}
							alt='logo'
							className='z-50 aspect-[112.5/50] w-14'
						/>
					</div>
					<div className='grid w-full grid-cols-2 gap-4'>
						{infos.map(info => (
							<Info
								key={info.icon}
								{...info}
							/>
						))}
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default Home
