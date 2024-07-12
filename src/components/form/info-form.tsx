'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { addInfo } from '@/actions/add-info'
import { Button } from '@/components/ui/button'
import FloatingFormInput from '@/components/ui/floating-form-input'
import { Form } from '@/components/ui/form'
import { InfoSchema, infoSchema } from '@/schemas/info'
import { Suspense } from 'react'

type InfoField = {
	label: string
	name: string
}

const infoFields = [
	{
		name: 'fullname',
		label: 'Họ và tên'
	},
	{
		name: 'phoneNumber',
		label: 'Số điện thoại'
	},
	{
		name: 'email',
		label: 'Email'
	},
	{
		name: 'city',
		label: 'Thành phố'
	},
	{
		name: 'loan',
		label: 'Số tiền muốn vay'
	}
] satisfies InfoField[]

const InfoForm = () => {
	const form = useForm<InfoSchema>({
		resolver: zodResolver(infoSchema),
		defaultValues: {
			fullname: '',
			phoneNumber: '',
			email: '',
			city: '',
			loan: ''
		}
	})

	const searchParams = useSearchParams()

	const onSubmit = async (values: InfoSchema) => {
		let callback = `https://${searchParams.get('callback')}/?utm_medium=${searchParams.get('utm_medium')}`

		await addInfo(values, callback)

		form.reset()
	}

	return (
		<Suspense>
			<Form {...form}>
				<form
					className='flex w-full flex-col gap-8 space-y-6'
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<div className='flex flex-col space-y-4'>
						{infoFields.map(field => (
							<FloatingFormInput
								key={field.name}
								control={form.control}
								name={field.name}
								label={field.label}
							/>
						))}
					</div>
					<Button
						className='w-full font-bold tracking-wide'
						type='submit'
					>
						Đăng Ký
					</Button>
				</form>
			</Form>
		</Suspense>
	)
}

export default InfoForm
