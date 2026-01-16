"use client"

import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { ContactFormValues } from "@/lib/type/contact"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import axios, { Axios } from "axios"

const Contact = () => {
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
        autoComplete?: string
    }[] = [
            {
                name: "name",
                type: "text",
                placeholder: "ENTER YOUR NAME*",
                autoComplete: "name",
            },
            {
                name: "email",
                type: "email",
                placeholder: "ENTER YOUR EMAIL*",
                autoComplete: "email",
            },
            {
                name: "phone",
                type: "tel",
                placeholder: "PHONE NUMBER",
            },
        ]

    const onSubmit = async (data: ContactFormValues) => {
        console.log(data)

        try {
            const res = await axios.post<ContactFormValues>("/api/contact", data)
            console.log(res.data)
        }
        catch (err) {
            if (axios.isAxiosError(err)) {
                console.error("Signup failed:", err.response?.data)
            } else {
                console.error("Unexpected error:", err)
            }
        }
    }

    return (
        <div className="flex flex-col items-center justify-center gap-20">
            <h2 className="px-15 py-4 text-xl border-4 border-white tracking-[0.3em]">CONTACT</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full max-w-sm">
                    {formElements.map(({ name, placeholder, type, autoComplete }) => (
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
                                        className="w-full min-h-30 py-3 px-3 border-0 border-l-2 border-b-2 border-white/60 bg-transparent! rounded-none resize-none focus:outline-none placeholder:text-gray-400 placeholder:text-xs"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
        </div >
    )
}

export default Contact