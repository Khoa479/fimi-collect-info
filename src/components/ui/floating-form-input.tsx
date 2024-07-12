'use client'

import { forwardRef, InputHTMLAttributes } from 'react'

import { FormControl, FormField } from '@/components/ui/form'
import { cn } from '@/lib/utils'

interface FloatingFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
	disabled?: boolean
	control?: any
	label: string
}

const FloatingFormInput = forwardRef<HTMLInputElement, FloatingFormInputProps>(
	({ control, ...props }, ref) => {
		return (
			<FormField
				control={control}
				name={props.name as string}
				render={({ field }) => (
					<FormControl>
						<div className='relative'>
							<input
								{...field}
								ref={ref}
								className={cn(
									'peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-5 text-xs text-white',
									'focus:border-white focus:outline-none focus:ring-0'
								)}
								placeholder=' '
							/>
							<label
								htmlFor='floating_filled'
								className={cn(
									'absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm font-semibold text-white duration-300',
									'peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-white',
									'rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4'
								)}
							>
								{props.label}
							</label>
						</div>
					</FormControl>
				)}
			/>
		)
	}
)

FloatingFormInput.displayName = 'FlaotingFormInput'

export default FloatingFormInput
