"use client"

import Link from "next/link"
import { useState } from "react"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/hooks/use-toast"

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

export function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      form.reset()
      toast({
        title: "Success!",
        description: "Thank you for joining our waitlist.",
      })
    }, 1000)
  }
  
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Join thousands of brands and creators already using CollabX to create more 
            authentic, effective marketing campaigns.
          </p>
          
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              href="/brands"
              className={buttonVariants({ 
                variant: "secondary", 
                size: "lg",
                className: "min-w-[160px]"
              })}
            >
              For Brands
            </Link>
            <Link
              href="/creators"
              className={buttonVariants({ 
                variant: "outline", 
                size: "lg",
                className: "border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 min-w-[160px]"
              })}
            >
              For Creators
            </Link>
          </div>
          
          <div className="mt-12 max-w-md mx-auto">
            <h3 className="text-xl font-medium mb-4">Get early access</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-x-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input 
                          placeholder="Enter your email" 
                          className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button 
                  type="submit" 
                  className={buttonVariants({ variant: "secondary" })}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Join Waitlist"}
                </button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}