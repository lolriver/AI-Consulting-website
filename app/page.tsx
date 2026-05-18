import { Button } from "@/components/ui/button"
import { TestimonialMarquee } from "@/components/ui/testimonial-marquee"
import { AIConsole } from "@/components/ui/ai-console"

import { Card } from "@/components/ui/card"
import { ChatWidget } from "@/components/ui/chat-widget"
import { TextReveal } from "@/components/ui/text-reveal"
import { ContactForm } from "@/components/ui/contact-form"
import { Spotlight } from "@/components/ui/spotlight"
import { HeroScene } from "@/components/ui/hero-scene"
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { BotVisual, CodeVisual, GraphVisual, IntegrationVisual } from "@/components/ui/service-visuals"
import { SparklesCore } from "@/components/ui/sparkles"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { Navbar } from "@/components/ui/navbar"
import { Pricing } from "@/components/ui/pricing"
import {
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Clock,
  DollarSign,
  BarChart3,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react"
import { getIcon } from "@/lib/icons"

// Fallback visual mapping for services
const visualMap: Record<string, any> = {
  "AI Chatbots & Virtual Assistants": <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-transparent opacity-100"><BotVisual /></div>,
  "Workflow Automation": <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent opacity-100"><CodeVisual /></div>,
  "AI Integration Services": <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-100"><IntegrationVisual /></div>,
  "Smart Analytics & Insights": <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent opacity-100"><GraphVisual /></div>,
  "Custom AI Development": <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-transparent opacity-100 overflow-hidden"><AIConsole className="w-full h-full scale-[0.85] origin-top-left absolute top-6 left-6 opacity-100" /></div>,
};

// Default fallback content
const defaultHero = {
  title: "Strategic AI Consulting for the Modern Enterprise",
  subtitle: "Navigate the future with confidence. We provide expert AI strategy, custom development, and seamless integration to future-proof your business.",
  ctaText: "Schedule Strategy Session"
};

const defaultTestimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO at EnterpriseCorp",
    content: "The strategic AI roadmap developed by the consulting team transformed our legacy operations. We've seen an 80% decrease in processing time.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "VP of Engineering at FinTech Solutions",
    content: "Their custom LLM integration was seamless and secure. The workflow automation has saved us hundreds of developer hours.",
    rating: 5,
  },
  {
    name: "Elena Rostova",
    role: "Director of Analytics at GlobalRetail",
    content: "Outstanding insight and flawless execution. The smart analytics dashboard provided clarity and insights that grew our sales conversion by 150%.",
    rating: 5,
  },
];

export default function HomePage() {
  const hero = defaultHero;
  const services = [];
  const testimonials = defaultTestimonials;
  const pricingPlans = [];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Component */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />

        <div className="w-full h-full flex flex-col lg:flex-row relative z-10">
          {/* Left content */}
          <div className="flex-1 pl-4 pr-4 md:pl-20 md:pr-10 flex flex-col justify-center pt-24 lg:pt-0">
            <TextReveal
              text={hero.title || defaultHero.title}
              className="text-4xl md:text-6xl font-bold leading-tight md:leading-tight text-left"
            />
            <p className="mt-6 text-neutral-300 max-w-lg text-lg">
              {hero.subtitle || defaultHero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a href="#contact" className="w-full sm:w-auto">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 text-lg h-12 w-full sm:w-auto">
                  {hero.ctaText || defaultHero.ctaText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#testimonials" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-neutral-600 text-neutral-300 hover:bg-neutral-800 bg-transparent px-8 text-lg h-12 w-full sm:w-auto"
                >
                  View Success Stories
                </Button>
              </a>
            </div>

            <div className="flex items-start sm:items-center gap-6 text-sm text-neutral-400 mt-8 flex-col sm:flex-row">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>30-Day ROI Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="hidden lg:block flex-1 relative h-full w-full">
            <HeroScene className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Problem Card */}
            <Card className="bg-neutral-900/50 border-red-500/20 p-8 md:p-12 h-full">
              <div className="h-full flex flex-col">
                <div className="min-h-[6rem] mb-6 flex items-center border-b border-white/10 pb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight w-full">
                    Struggling with <span className="text-red-500 block mt-2">Legacy Systems?</span>
                  </h2>
                </div>
                <div className="space-y-6 text-gray-300 text-lg flex-1">
                  <p className="flex items-start gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10 text-red-500 mt-1">
                      ✗
                    </span>
                    <span>Falling behind competitors who are leveraging AI for speed and efficiency</span>
                  </p>
                  <p className="flex items-start gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10 text-red-500 mt-1">
                      ✗
                    </span>
                    <span>Missed opportunities due to lack of data-driven insights</span>
                  </p>
                  <p className="flex items-start gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10 text-red-500 mt-1">
                      ✗
                    </span>
                    <span>Inefficient workflows draining valuable resources and budget</span>
                  </p>
                  <p className="flex items-start gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10 text-red-500 mt-1">
                      ✗
                    </span>
                    <span>Uncertainty about where to start with AI adoption</span>
                  </p>
                </div>
              </div>
            </Card>

            {/* Solution Card */}
            <Card className="bg-neutral-900/50 border-green-500/20 p-8 md:p-12 h-full">
              <div className="h-full flex flex-col">
                <div className="min-h-[6rem] mb-6 flex items-center border-b border-white/10 pb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight w-full">
                    Unlock True <span className="text-green-500 block mt-2">AI Potential</span>
                  </h2>
                </div>
                <div className="space-y-6 text-gray-300 text-lg flex-1">
                  <p className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <span>Tailored AI roadmaps aligned with your business objectives</span>
                  </p>
                  <p className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <span>Custom implementation of generative AI and automation tools</span>
                  </p>
                  <p className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <span>Expert guidance on ethics, compliance, and security</span>
                  </p>
                  <p className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <span>Continuous optimization to ensure long-term ROI</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our AI Consulting Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end support for your artificial intelligence transformation
            </p>
          </div>

          <BentoGrid className="lg:grid-rows-3">
            {services.length > 0 ? services.map((service: any, index: number) => {
              // Custom grid positions
              let className = "";
              if (index === 0) className = "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3";
              else if (index === 1) className = "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3";
              else if (index === 2) className = "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4";
              else if (index === 3) className = "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2";
              else if (index === 4) className = "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4";

              return (
                <BentoCard
                  key={service._id || index}
                  name={service.title}
                  className={className}
                  background={visualMap[service.title] || <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 to-transparent" />}
                  Icon={getIcon(service.icon)}
                  description={service.description}
                  features={[]}
                  href="#"
                  cta="Learn more"
                />
              );
            }) : (
              // Hardcoded fallback data just to show something if CMS is empty
              [
                { title: "AI Chatbots & Virtual Assistants", description: "Intelligent conversational agents...", icon: "Bot" },
                { title: "Workflow Automation", description: "Streamline repetitive processes...", icon: "Workflow" },
                { title: "AI Integration Services", description: "Seamlessly integrate AI...", icon: "Cog" },
                { title: "Smart Analytics & Insights", description: "AI-powered analytics...", icon: "Brain" },
                { title: "Custom AI Development", description: "Bespoke AI solutions...", icon: "MessageSquare" }
              ].map((service, index) => {
                let className = "";
                if (index === 0) className = "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3";
                else if (index === 1) className = "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3";
                else if (index === 2) className = "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4";
                else if (index === 3) className = "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2";
                else if (index === 4) className = "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4";
                return (
                  <BentoCard
                    key={index}
                    name={service.title}
                    className={className}
                    background={visualMap[service.title] || <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 to-transparent" />}
                    Icon={getIcon(service.icon)}
                    description={service.description}
                    features={[]}
                    href="#"
                    cta="Learn more"
                  />
                )
              })
            )}
          </BentoGrid>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="py-24 bg-black overflow-hidden relative">
        <div className="container mx-auto px-4 mb-16 relative z-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Trusted by Growing Businesses</h2>
          </div>
        </div>

        <div className="w-full relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <TestimonialMarquee testimonials={testimonials} />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Why Partner With Us?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver measurable impact through strategic implementation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-cyan-900/40 rounded-full flex items-center justify-center mx-auto border border-cyan-500/20">
                <Clock className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">80%</h3>
              <p className="text-neutral-300">Time Saved on Manual Tasks</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto border border-blue-500/20">
                <DollarSign className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">300%</h3>
              <p className="text-neutral-300">Average ROI Within 6 Months</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-indigo-900/40 rounded-full flex items-center justify-center mx-auto border border-indigo-500/20">
                <BarChart3 className="h-8 w-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">150%</h3>
              <p className="text-neutral-300">Increase in Lead Conversion</p>
            </div>


            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-violet-900/40 rounded-full flex items-center justify-center mx-auto border border-violet-500/20">
                <TrendingUp className="h-8 w-8 text-violet-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">24/7</h3>
              <p className="text-neutral-300">Automated Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="min-h-screen flex items-center justify-center bg-black relative">
        <Pricing
          title="Choose Your AI Transformation Plan"
          description="Flexible pricing designed to scale with your business growth\nAll plans include setup, training, and 30-day money-back guarantee"
          plans={pricingPlans.length > 0 ? pricingPlans.map((plan: any) => ({
            ...plan,
            price: plan.price || "0",
            yearlyPrice: plan.yearlyPrice || (parseInt(plan.price || "0") * 0.8 * 12).toString(),
            period: "month",
            buttonText: "Get Started",
            href: "#contact",
          })) : [
            // Fallback default pricing
            {
              name: "Starter",
              price: "997",
              yearlyPrice: "797",
              period: "month",
              features: ["AI Chatbot", "Basic Automation", "Email Support"],
              description: "For small businesses",
              buttonText: "Start Free Trial",
              href: "#contact",
              isPopular: false
            },
            {
              name: "Professional",
              price: "2497",
              yearlyPrice: "1997",
              period: "month",
              features: ["Advanced Chatbot", "Full Automation", "Priority Support"],
              description: "For growing businesses",
              buttonText: "Get Started",
              href: "#contact",
              isPopular: true
            },
            {
              name: "Enterprise",
              price: "4997",
              yearlyPrice: "3997",
              period: "month",
              features: ["Custom AI", "Unlimited Automation", "Dedicated Strategist"],
              description: "For large organizations",
              buttonText: "Contact Sales",
              href: "#contact",
              isPopular: false
            }
          ]}
        />
      </section>

      {/* Process Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Simple 3-Step Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From consultation to implementation, we make AI adoption seamless
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-6">
              <div className="h-20 w-20 bg-white text-black rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-white">Discovery & Strategy</h3>
              <p className="text-gray-300">
                We assess your current infrastructure and identify high-impact opportunities for AI integration.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="h-20 w-20 bg-white text-black rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-white">Custom Development</h3>
              <p className="text-gray-300">
                Our experts build and fine-tune AI models and automation workflows tailored to your unique requirements.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="h-20 w-20 bg-white text-black rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-white">Deployment & Scaling</h3>
              <p className="text-gray-300">
                We ensure seamless deployment and provide ongoing training and support to scale your AI capabilities.
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* CTA Section */}
      < section className="relative py-24 overflow-hidden" >
        <AnimatedGradientBackground
          Breathing={true}
          gradientColors={["#0A0A0A", "#2979FF", "#FF80AB", "#FF6D00", "#FFD600", "#00E676", "#3D5AFE"]}
          gradientStops={[35, 50, 60, 70, 80, 90, 100]}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="relative h-32 w-full flex flex-col items-center justify-center">
              <div className="w-full absolute inset-0">
                <SparklesCore
                  id="ctasparticles"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={100}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                  speed={0.8}
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 relative z-20 text-balance">
                Ready to Transform Your Business?
              </h2>
            </div>

            <div id="contact" className="w-full max-w-xl mx-auto mt-12 relative z-20">
              <ContactForm />
            </div>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer id="contact" className="relative py-20 bg-black border-t border-white/10 overflow-hidden" >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/90" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">AI Consulting</h3>
                <p className="text-gray-300 leading-relaxed">
                  Transforming businesses through intelligent automation and cutting-edge AI integration solutions.
                </p>
              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Services</h4>
              <ul className="space-y-3">
                {[
                  "AI Chatbots & Virtual Assistants",
                  "Workflow Automation",
                  "AI Integration Services",
                  "Smart Analytics & Insights",
                  "Custom AI Development",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Company</h4>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "#" },
                  { name: "Case Studies", href: "#testimonials" },
                  { name: "Blog", href: "#" },
                  { name: "Careers", href: "#" },
                  { name: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a href="mailto:hello@aiagency.com" className="hover:text-white transition-colors duration-300">
                    hello@aiagency.com
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                    <Phone className="h-4 w-4" />
                  </div>
                  <a href="tel:+15551234567" className="hover:text-white transition-colors duration-300">
                    (555) 123-4567
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>123 AI Street, Tech City</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 mt-16 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <p className="text-gray-400 text-center lg:text-left">© 2026 AI Agency. All rights reserved.</p>

              <div className="flex flex-wrap justify-center lg:justify-end space-x-8">
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ChatWidget />
    </div>
  )
}
