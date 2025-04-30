
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };
  
  return (
    <section id="contact" className="py-20 section-padding bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Contact Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <p className="mb-6">
              Feel free to reach out if you have any questions, opportunities, or just want to say hello!
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:ashineekesanam@gmail.com" 
                className="flex items-center hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5 mr-3" />
                <span>ashineekesanam@gmail.com</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/ashinee-kesanam" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-3" />
                <span>linkedin.com/in/ashinee-kesanam</span>
              </a>
              
              <a 
                href="https://github.com/Ashinee-20" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center hover:text-accent transition-colors"
              >
                <Github className="w-5 h-5 mr-3" />
                <span>github.com/Ashinee-20</span>
              </a>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-lg shadow-sm border border-border">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="Subject" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Your message" rows={5} required />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
