'use server'

import { google } from 'googleapis'
import { redirect } from 'next/navigation'

import { getGoogleAuth } from '@/lib/google-auth'
import { InfoSchema } from '@/schemas/info'

export const addInfo = async (info: InfoSchema, calLback: string) => {
	const auth = await getGoogleAuth()

	const sheets = google.sheets({ version: 'v4', auth })

	await sheets.spreadsheets.values.append({
		spreadsheetId: process.env.GOOGLE_SHEET_ID,
		range: 'A2:E1',
		valueInputOption: 'USER_ENTERED',
		requestBody: {
			values: [
				[info.fullname, info.phoneNumber, info.email, info.city, info.loan]
			]
		}
	})

	redirect(calLback)
}
