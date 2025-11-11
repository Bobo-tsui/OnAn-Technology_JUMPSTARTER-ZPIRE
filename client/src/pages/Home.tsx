import { Button } from "@/components/ui/button";
import { COMPANY_NAME, TAGLINE } from "@/const";
import { ArrowRight, Brain, Users, TrendingUp, Sparkles, Heart, Globe, Printer, Cpu, Palette, Link2, DollarSign, Trophy, Zap, Factory } from "lucide-react";
import { useEffect, useRef } from "react";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const menuSections = [
    { id: "hero", label: "Home" },
    { id: "mission", label: "Mission" },
    { id: "challenge", label: "Challenge" },
    { id: "solution", label: "Solution" },
    { id: "technology", label: "Technology" },
    { id: "business-model", label: "Business Model" },
    { id: "market", label: "Market" },
    { id: "why-now", label: "Why Now" },
    { id: "advantages", label: "Advantages" },
    { id: "impact", label: "Impact" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    // Intersection Observer for fade-in animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <MobileMenu sections={menuSections} />
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-background text-foreground overflow-hidden pt-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/60 z-10" />
          <img 
            src="/images/hero-background-new.png" 
            alt="Journey to light" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="container relative z-20 text-center px-6 py-20">
          <div className="fade-in max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              {COMPANY_NAME}
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl mb-4 font-light text-foreground/90">
              {TAGLINE}
            </p>
            <p className="text-base sm:text-lg lg:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
              Providing dignity and decency for the deceased, bringing solace to grieving families through AI-powered posthumous restoration
            </p>
            <Button
              size="lg"
              variant="default"
              className="bg-accent text-accent-foreground hover:bg-accent/90 active:scale-95 transition-transform text-lg px-8 py-6 h-auto min-h-[48px] touch-manipulation"
              onClick={() => scrollToSection("mission")}
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <img 
            src="/images/tap-icon.png?v=2" 
            alt="Tap to scroll" 
            className="w-16 h-16 opacity-60"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="section-padding bg-background">
        <div className="container">
          <div className="fade-in max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Our Mission
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              Everyone desires to be eternally remembered in the most beautiful state of their life. We combine cutting-edge AI technology with compassionate care to restore dignity to the deceased and bring peace to their loved ones.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              <div className="fade-in p-6 bg-card rounded-lg shadow-sm">
                <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Compassion</h3>
                <p className="text-muted-foreground">Bringing comfort to families in their time of grief</p>
              </div>
              <div className="fade-in p-6 bg-card rounded-lg shadow-sm">
                <Brain className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">Leveraging AI to achieve the impossible</p>
              </div>
              <div className="fade-in p-6 bg-card rounded-lg shadow-sm">
                <Sparkles className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Dignity</h3>
                <p className="text-muted-foreground">Honoring lives with beautiful final farewells</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="section-padding bg-card">
        <div className="container">
          <div className="fade-in max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">
              Addressing an Unmet Need
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="fade-in">
                <h3 className="text-2xl font-semibold mb-4 text-primary">The Challenge</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Many individuals pass away with serious facial damage from accidents, illness, or other tragic circumstances. Traditional restoration techniques often fall short of family expectations, leaving loved ones without the peaceful closure they deserve.
                </p>
              </div>
              <div className="fade-in">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Market Gap</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Currently, there are no specialized AI-assisted silicone mask services in the Hong Kong market. Families are left with limited options during their most difficult moments.
                </p>
              </div>
            </div>
            <div className="fade-in bg-primary/5 rounded-lg p-8 border-l-4 border-accent">
              <h3 className="text-xl font-semibold mb-4">Key Statistics</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">12,500+</div>
                  <p className="text-sm text-muted-foreground">Annual cancer-related deaths in Hong Kong</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">700+</div>
                  <p className="text-sm text-muted-foreground">Annual suicide deaths requiring facial restoration</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">2B+</div>
                  <p className="text-sm text-muted-foreground">HKD annual funeral industry market size</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/images/ai-reconstruction.jpg" 
            alt="AI reconstruction technology" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="fade-in max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Our Solution
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              We utilize state-of-the-art AI Photo-to-3D reconstruction technology to create lifelike posthumous masks, combining artificial intelligence with expert craftsmanship.
            </p>
          </div>
          
          <div className="fade-in max-w-6xl mx-auto">
            <h3 className="text-2xl font-semibold mb-12 text-center">Service Process Flow</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { step: "1", title: "Photo Collection", desc: "Gather multi-angle photos from the deceased's lifetime", image: "/images/step1-photo-collection-new.jpg" },
                { step: "2", title: "AI Reconstruction", desc: "Advanced algorithms analyze and create 3D model", image: "/images/step2-ai-reconstruction-new.jpg" },
                { step: "3", title: "3D Printing", desc: "High-precision printing of the facial mask", image: "/images/step3-3d-printing-new.jpg" },
                { step: "4", title: "Professional Finishing", desc: "Expert coloring and cosmetic refinement", image: "/images/step4-finishing.jpg" },
                { step: "5", title: "Ceremony Assistance", desc: "Support during the memorial service", image: "/images/step5-ceremony.jpg" }
              ].map((item, idx) => (
                <div key={idx} className="fade-in bg-primary-foreground/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-primary-foreground/15 transition-colors">
                  <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className={`w-full h-full object-cover ${item.step === "4" ? "object-center" : item.step === "5" ? "object-[center_30%]" : ""}`}
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-lg font-bold shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="p-5 text-center">
                    <h4 className="font-semibold mb-2 text-base">{item.title}</h4>
                    <p className="text-xs text-primary-foreground/80 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="section-padding bg-background">
        <div className="container">
          <div className="fade-in max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">
              Technology & Innovation
            </h2>
            <div className="mb-12">
              <div className="fade-in mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary text-center">AI-Powered Precision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                  We utilize advanced AI plugins like Reallusion Character Creator's Headshot 2.0. Through deep learning algorithms, our AI analyzes multi-angle photos from the deceased's lifetime, accurately capturing facial contours, features, and skin texture from their youth or healthier periods.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                  The system automatically generates a high-precision, highly realistic 3D digital model <strong className="text-foreground">within hours</strong>, dramatically reducing production time while maintaining exceptional quality.
                </p>
              </div>
              <div className="fade-in space-y-4 max-w-2xl mx-auto">
                <img 
                  src="/images/grandma-model-full-1.jpg" 
                  alt="AI 3D model reconstruction - Grandmother restoration process" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <img 
                  src="/images/grandma-model-full-2.jpg" 
                  alt="AI 3D model reconstruction - Grandmother restoration result" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-muted-foreground italic text-center pt-2">
                  Real case: 3D reconstruction of my late grandmother. The AI modeling achieved remarkable accuracy in capturing her facial features and likeness.
                </p>
              </div>
            </div>
            <div className="fade-in bg-card rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Key Technologies</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">AI facial reconstruction from 2D photos</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">High-precision 3D modeling and printing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Professional cosmetic finishing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Silicone mask production expertise</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section id="business-model" className="section-padding bg-card">
        <div className="container">
          <div className="fade-in max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center">
              Scalable Business Model
            </h2>
            
            <div className="space-y-8">
              <div className="fade-in bg-background rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-primary">B2B Partnerships (Main Revenue)</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Partner with funeral homes across Hong Kong and the Greater Bay Area. Funeral homes recommend our service to families, and we share revenue on a 70/30 split.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="bg-primary/5 px-4 py-2 rounded-full">
                    <span className="font-semibold">Pricing:</span> 8,000-15,000 HKD per service
                  </div>
                  <div className="bg-primary/5 px-4 py-2 rounded-full">
                    <span className="font-semibold">Split:</span> 70% OnAn / 30% Funeral Home
                  </div>
                </div>
              </div>
              
              <div className="fade-in bg-background rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-primary">B2C Pre-need Services (Future Growth)</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Allow customers to purchase services in advance, building digital archives for fast delivery when needed. Partner with insurance companies, elderly communities, and hospitals.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="bg-primary/5 px-4 py-2 rounded-full">
                    <span className="font-semibold">Pricing:</span> 5,000-8,000 HKD (installment options)
                  </div>
                </div>
              </div>
              
              <div className="fade-in bg-background rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Value-added Services</h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                    <span>Digital memorial halls (AR/VR farewell spaces)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                    <span>3D printed memorial items (small sculptures)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                    <span>Technology licensing for overseas markets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section id="market" className="section-padding bg-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="/images/gba-skyline.jpg" 
            alt="Greater Bay Area skyline" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="fade-in max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              A Growing Market with Profound Impact
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The Greater Bay Area presents a massive opportunity for innovation in the funeral industry
            </p>
          </div>
          
          <div className="fade-in grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-background rounded-lg p-8 shadow-sm">
              <TrendingUp className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Market Size</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">161.26B</div>
                  <p className="text-muted-foreground">RMB - GBA funeral industry revenue (2024)</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">353.26B</div>
                  <p className="text-muted-foreground">RMB - Projected revenue by 2035</p>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-lg p-8 shadow-sm">
              <Users className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Population</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">86M</div>
                  <p className="text-muted-foreground">Population in Greater Bay Area</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">31</div>
                  <p className="text-muted-foreground">Major funeral homes across GBA cities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in bg-accent/10 rounded-lg p-8 max-w-4xl mx-auto border-l-4 border-accent">
            <h3 className="text-2xl font-semibold mb-4 text-center">Market Opportunity</h3>
            <p className="text-lg text-center mb-6 text-muted-foreground">
              With just <strong className="text-foreground">5% market penetration</strong>, the posthumous restoration service represents a
            </p>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">1.8 Billion</div>
              <p className="text-xl text-muted-foreground">RMB revenue opportunity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section id="why-now" className="section-padding bg-primary text-primary-foreground">
        <div className="container">
          <div className="fade-in max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center">
              Why Now?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="fade-in bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Technology Maturity</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  AI-powered 3D reconstruction has reached commercial viability, enabling rapid and accurate facial modeling from photos.
                </p>
              </div>
              
              <div className="fade-in bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Social Attitudes Evolving</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Cultural attitudes toward death are shifting, with more people embracing advance planning and personalized farewells.
                </p>
              </div>
              
              <div className="fade-in bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Factory className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Complete Supply Chains</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  The rise of humanoid robotics has created comprehensive supply chains for materials, equipment, and expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="section-padding bg-background">
        <div className="container">
          <div className="fade-in max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Our Competitive Advantages
            </h2>
            <p className="text-xl text-muted-foreground">
              Leveraging the Greater Bay Area's unique ecosystem
            </p>
          </div>
          
          <div className="fade-in grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Top-tier 3D Printing Hub", desc: "Access to world-class manufacturing facilities", icon: Printer },
              { title: "Leading AI Reconstruction", desc: "Cutting-edge image-to-3D technology", icon: Cpu },
              { title: "Exquisite Craftsmanship", desc: "Skilled labor and artistic expertise", icon: Palette },
              { title: "Complete Industrial Chain", desc: "Efficient synergy across all production stages", icon: Link2 },
              { title: "Cost Advantage", desc: "Significant pricing benefits for customers", icon: DollarSign },
              { title: "Market Leadership", desc: "First-mover in an untapped market", icon: Trophy }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="fade-in bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section id="impact" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/images/memorial-peace.jpg" 
            alt="Peaceful memorial" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="fade-in max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
              Creating Lasting Impact
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-12">
              Beyond business success, we're changing lives and honoring legacies. Our service brings solace to grieving families, provides beautiful final farewells, and shifts cultural attitudes toward death and remembrance.
            </p>
            
            <div className="fade-in bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <p className="text-lg italic text-primary-foreground/90 leading-relaxed">
                "Everyone deserves to be remembered in the most beautiful state of their life. Through technology and compassion, we make this possible."
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="fade-in">
                <div className="text-4xl font-bold text-accent mb-2">Families</div>
                <p className="text-primary-foreground/80">Bringing peace and closure</p>
              </div>
              <div className="fade-in">
                <div className="text-4xl font-bold text-accent mb-2">Industry</div>
                <p className="text-primary-foreground/80">Driving innovation forward</p>
              </div>
              <div className="fade-in">
                <div className="text-4xl font-bold text-accent mb-2">Society</div>
                <p className="text-primary-foreground/80">Changing cultural attitudes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding bg-accent text-accent-foreground">
        <div className="container">
          <div className="fade-in max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Join Us in This Mission
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you're a funeral home looking to enhance your services, a family seeking dignified options, or an investor interested in this growing market, we'd love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="default"
                className="bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 transition-transform text-lg px-8 py-6 h-auto min-h-[48px] touch-manipulation"
                onClick={() => window.location.href = 'mailto:bobo.tsuipuichi@gmail.com?subject=Partnership Inquiry - OnAn Technology'}
              >
                Partner With Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground active:scale-95 transition-transform text-lg px-8 py-6 h-auto min-h-[48px] touch-manipulation"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">{COMPANY_NAME}</h3>
            <p className="text-primary-foreground/80 mb-6">{TAGLINE}</p>
            <div className="border-t border-primary-foreground/20 pt-6">
              <p className="text-sm text-primary-foreground/60">
                © 2025 {COMPANY_NAME}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
