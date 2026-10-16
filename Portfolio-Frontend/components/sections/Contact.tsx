"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { ContactFormValues } from "@/lib/type/contact"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Contact = () => {
    const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

    const form = useForm<ContactFormValues>({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    })

    const formElements: {
        name: keyof ContactFormValues
        type: string
        placeholder: string
        label: string
        required?: boolean
        autoComplete?: string
    }[] = [
        {
            name: "name",
            type: "text",
            placeholder: "ENTER YOUR NAME*",
            label: "Your Full Name",
            required: true,
            autoComplete: "name",
        },
        {
            name: "email",
            type: "email",
            placeholder: "ENTER YOUR EMAIL*",
            label: "Your Email Address",
            required: true,
            autoComplete: "email",
        },
        {
            name: "phone",
            type: "tel",
            placeholder: "PHONE NUMBER",
            label: "Your Phone Number",
            required: false,
            autoComplete: "tel",
        },
    ]

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
                message: "Message sent successfully! I'll get back to you soon.",
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
        <div className="flex flex-col items-center justify-center gap-10">
            <h2 className="px-15 py-4 text-xl border-4 border-white tracking-[0.3em]">CONTACT</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full max-w-sm">
                    {formElements.map(({ name, placeholder, label, required, type, autoComplete }) => (
                        <FormField
                            key={name}
                            control={form.control}
                            name={name}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            type={type}
                                            placeholder={placeholder}
                                            aria-label={label}
                                            aria-required={required}
                                            autoComplete={autoComplete}
                                            className="w-full py-3 px-3 border-0 border-l-2 border-b-2 border-white/60 bg-transparent! rounded-none focus-visible:ring-0 placeholder:text-gray-400 placeholder:text-xs"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <textarea
                                        placeholder="YOUR MESSAGE*"
                                        aria-label="Your Message"
                                        aria-required={true}
                                        className="w-full min-h-30 py-3 px-3 border-0 border-l-2 border-b-2 border-white/60 bg-transparent! rounded-none resize-none focus:outline-none placeholder:text-gray-400 placeholder:text-xs"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {status && (
                        <p
                            role="status"
                            className={`text-xs text-center font-sans tracking-wide ${
                                status.type === "success" ? "text-emerald-400" : "text-rose-400"
                            }`}
                        >
                            {status.message}
                        </p>
                    )}

                    <div className="flex items-center justify-center mt-4">
                        <Button
                            variant="ghost"
                            type="submit"
                            disabled={form.formState.isSubmitting}
                            className="px-8 py-2 text-sm font-semibold border-0 border-l-2 border-r-2 border-white/60 rounded-none hover:bg-transparent! tracking-wider transition-colors cursor-pointer"
                        >
                            {form.formState.isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default Contact