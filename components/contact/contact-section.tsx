"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1000)) // simulate request
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <InfoCard icon={<Phone className="h-6 w-6 text-green-600" />} title="Phone">
              <p className="text-gray-600">(555) 123-4567</p>
              <p className="text-sm text-gray-500">Mon-Fri 8 AM-6 PM</p>
            </InfoCard>

            <InfoCard icon={<Mail className="h-6 w-6 text-green-600" />} title="Email">
              <p className="text-gray-600">info@freshcrop.com</p>
              <p className="text-sm text-gray-500">We’ll reply within 24 h</p>
            </InfoCard>

            <InfoCard icon={<MapPin className="h-6 w-6 text-green-600" />} title="Address">
              <p className="text-gray-600">123 Farm Road</p>
              <p className="text-gray-600">Green Valley, CA</p>
            </InfoCard>

            <InfoCard icon={<Clock className="h-6 w-6 text-green-600" />} title="Hours">
              <p className="text-gray-600">Mon-Fri 8 AM-6 PM</p>
              <p className="text-gray-600">Sat 9 AM-4 PM</p>
            </InfoCard>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-4">Thank you for reaching out. We’ll get back to you shortly.</p>
                  <Button onClick={() => setIsSubmitted(false)}>Send Another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <Card>
      <CardContent className="p-6 flex space-x-4 items-start">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">{icon}</div>
        <div>
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          {children}
        </div>
      </CardContent>
    </Card>
  )
}
