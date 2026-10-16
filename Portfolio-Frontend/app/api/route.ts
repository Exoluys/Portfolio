import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { portfolioData } from '@/data/portfolio'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json().catch(() => null)
        if (!body || typeof body !== 'object') {
            return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
        }

        const { name, email, phone, message } = body

        if (!name || typeof name !== 'string' || name.trim().length === 0) {
            return NextResponse.json({ error: 'Name is required' }, { status: 400 })
        }

        if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            return NextResponse.json({ error: 'A valid email address is required' }, { status: 400 })
        }

        if (!message || typeof message !== 'string' || message.trim().length === 0) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 })
        }

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