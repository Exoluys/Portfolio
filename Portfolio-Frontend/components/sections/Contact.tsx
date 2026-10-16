"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { ContactFormValues } from "@/lib/type/contact"
import { portfolioData } from "@/data/portfolio"

const Contact = () => {
    const { personal, socialLinks } = portfolioData
    const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

    const form = useForm<ContactFormValues>({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    })

    const onSubmit = async (data: ContactFormValues) => {
        setStatus(null)

        try {
            const res = await fetch("/api", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })

            const result = await res.json()

            if (!res.ok) {
                setStatus({
                    type: "error",
                    message: result.error || "Failed to send message. Please try again.",
                })
                return
            }

            setStatus({
                type: "success",
                message: "Message sent successfully. I'll get back to you shortly.",
            })
            form.reset()
        } catch {
            setStatus({
                type: "error",
                message: "A network error occurred. Please try again later.",
            })
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
            {/* 12-Column Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                {/* Left Column: Numbered TOC Section Label */}
                <div className="lg:col-span-3">
                    <div className="lg:sticky lg:top-24">
                        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                            04 — Contact
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-normal">
                            Get in Touch
                        </h2>
                    </div>
                </div>

                {/* Right Columns: Editorial Content & Minimal Underlined Form */}
                <div className="lg:col-span-9 flex flex-col gap-16">
                    {/* Direct Contact Invitation */}
                    <div className="flex flex-col gap-6 max-w-[65ch]">
                        <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground font-normal tracking-tight">
                            Let&#39;s work together.
                        </h3>
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-sans">
                            Have a project in mind, an opportunity to discuss, or just want to say hello? Reach out directly:
                        </p>
                        <div>
                            <a
                                href={`mailto:${personal.email}`}
                                className="group inline-flex items-center gap-2 font-serif italic text-2xl sm:text-3xl text-foreground pb-1 border-b border-foreground hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
                            >
                                <span>{personal.email}</span>
                                <span className="font-sans not-italic text-xl sm:text-2xl group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true">
                                    ↗
                                </span>
                            </a>
                        </div>

                        {/* Plain Text Social Links with Arrow */}
                        <div className="flex flex-wrap items-center gap-8 pt-4 font-mono text-xs uppercase tracking-widest">
                            <a
                                href={socialLinks.github.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-1.5 text-foreground hover:opacity-70 pb-0.5 border-b border-foreground transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
                                aria-label={socialLinks.github.ariaLabel}
                            >
                                <span>GitHub</span>
                                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true">
                                    ↗
                                </span>
                            </a>
                            <a
                                href={socialLinks.linkedin.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-1.5 text-foreground hover:opacity-70 pb-0.5 border-b border-foreground transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
                                aria-label={socialLinks.linkedin.ariaLabel}
                            >
                                <span>LinkedIn</span>
                                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true">
                                    ↗
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Minimal Underlined Form */}
                    <div className="border-t border-border pt-12 max-w-xl">
                        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-8">
                            Send a message
                        </span>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8">
                                {/* Name Field */}
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="space-y-1.5">
                                            <label
                                                htmlFor="contact-name"
                                                className="font-mono text-xs uppercase tracking-wider text-muted-foreground block"
                                            >
                                                Name <span className="text-foreground">*</span>
                                            </label>
                                            <FormControl>
                                                <input
                                                    id="contact-name"
                                                    type="text"
                                                    required
                                                    autoComplete="name"
                                                    className="w-full py-2 bg-transparent border-0 border-b border-border focus:border-foreground text-foreground text-base rounded-none outline-none transition-colors"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Email Field */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="space-y-1.5">
                                            <label
                                                htmlFor="contact-email"
                                                className="font-mono text-xs uppercase tracking-wider text-muted-foreground block"
                                            >
                                                Email <span className="text-foreground">*</span>
                                            </label>
                                            <FormControl>
                                                <input
                                                    id="contact-email"
                                                    type="email"
                                                    required
                                                    autoComplete="email"
                                                    className="w-full py-2 bg-transparent border-0 border-b border-border focus:border-foreground text-foreground text-base rounded-none outline-none transition-colors"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Phone Field (Optional) */}
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem className="space-y-1.5">
                                            <label
                                                htmlFor="contact-phone"
                                                className="font-mono text-xs uppercase tracking-wider text-muted-foreground block"
                                            >
                                                Phone <span className="text-muted-foreground">(Optional)</span>
                                            </label>
                                            <FormControl>
                                                <input
                                                    id="contact-phone"
                                                    type="tel"
                                                    autoComplete="tel"
                                                    className="w-full py-2 bg-transparent border-0 border-b border-border focus:border-foreground text-foreground text-base rounded-none outline-none transition-colors"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Message Field */}
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem className="space-y-1.5">
                                            <label
                                                htmlFor="contact-message"
                                                className="font-mono text-xs uppercase tracking-wider text-muted-foreground block"
                                            >
                                                Message <span className="text-foreground">*</span>
                                            </label>
                                            <FormControl>
                                                <textarea
                                                    id="contact-message"
                                                    required
                                                    rows={4}
                                                    className="w-full py-2 bg-transparent border-0 border-b border-border focus:border-foreground text-foreground text-base rounded-none outline-none resize-none transition-colors"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Screen reader announced status */}
                                {status && (
                                    <div
                                        role="status"
                                        aria-live="polite"
                                        className={`font-mono text-xs tracking-wider pt-2 ${
                                            status.type === "success"
                                                ? "text-foreground font-medium"
                                                : "text-rose-500 font-medium"
                                        }`}
                                    >
                                        {status.type === "success" ? "✓ " : "✕ "}
                                        {status.message}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={form.formState.isSubmitting}
                                        className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground font-medium pb-1 border-b border-foreground hover:opacity-70 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
                                    >
                                        <span>
                                            {form.formState.isSubmitting ? "Sending message..." : "Send message"}
                                        </span>
                                        <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
                                            →
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact