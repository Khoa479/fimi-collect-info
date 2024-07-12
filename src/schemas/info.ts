import { z } from 'zod'

export const infoSchema = z.object({
	fullname: z.string().min(1, { message: 'Hãy nhập họ và tên của bạn' }),
	phoneNumber: z.string().min(1, { message: 'Hãy nhập số điện thoại của bạn' }),
	email: z.string().email({ message: 'Hãy nhập email của bạn' }),
	city: z.string().min(1, { message: 'Hãy nhập thành phố của bạn' }),
	loan: z.string().min(1, { message: 'Hãy nhập số tiền muốn vay của bạn' })
})

export type InfoSchema = z.infer<typeof infoSchema>
