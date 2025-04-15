import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/francis-acquah/", // Replace with your actual LinkedIn URL
  instagram: "https://www.instagram.com/francis.acquah/", // Replace with your actual Instagram URL
};

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact_messages").insert({
        name,
        email,
        subject,
        message,
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      // Clear form after successful submission
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not send message. Please try again.",
        variant: "destructive",
      });
      console.error("Error submitting message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-16">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-navy mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out to me for any inquiries about forex
                trading, event organization, or potential business
                collaborations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-navy/10 p-3">
                  <Mail className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Email
                  </h4>
                  <p className="text-navy font-medium">
                    francis.acquah@ashesi.edu.gh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-navy/10 p-3">
                  <Phone className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Phone
                  </h4>
                  <p className="text-navy font-medium">+233 59 300 5617</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-navy/10 p-3">
                  <MapPin className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Location
                  </h4>
                  <p className="text-navy font-medium">Accra, Ghana</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-sm font-medium text-gray-500 mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full"
                  aria-label="LinkedIn"
                  onClick={() => window.open(SOCIAL_LINKS.linkedin, "_blank")}
                >
                  <Linkedin className="h-5 w-5 text-navy" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full"
                  aria-label="Instagram"
                  onClick={() => window.open(SOCIAL_LINKS.instagram, "_blank")}
                >
                  <Instagram className="h-5 w-5 text-navy" />
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Enter subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-navy hover:bg-navy-dark text-white gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}{" "}
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
