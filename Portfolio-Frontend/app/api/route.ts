import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { portfolioData } from '@/data/portfolio'

export async function POST(req: NextRequest) {
    try {
        const { name, email, phone, message } = await req.json()
        const recipientEmail = process.env.EMAIL_USER || portfolioData.personal.email

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        })

        const mailOptions = {
            from: process.env.EMAIL_USER || recipientEmail,
            to: recipientEmail,
            replyTo: email,
            subject: `${name} Has Sent an Email`,
            html: `
                <h2>New Contact</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        }

        await transporter.sendMail(mailOptions)

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        )
    }
}