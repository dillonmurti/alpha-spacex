import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Proof = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* First Section - Driven by Students, Backed by Data */}
      <section 
        className="min-h-screen flex items-center justify-center px-6 relative"
        style={{ 
          backgroundImage: 'url(/lovable-uploads/46b090c2-217d-4f41-aa36-a0d33d6ef13b.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Translucent overlay */}
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: 'rgba(0, 0, 239, 0.6)' }}
        ></div>
        <div className="text-center max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl text-3xl font-bold text-foreground mb-8">
            Driven by Students, Backed by Data
          </h1>
          <p className="text-xl md:text-2xl text-sm leading-relaxed" style={{ color: '#ffffff' }}>
            At Alpha, success isn't just measured by test scores, it is reflected in how our students feel and grow every day
          </p>
        </div>
      </section>

      {/* Second Section - Our Students Love to Learn */}
      <section 
        className="min-h-screen flex items-center justify-end px-6"
        style={{ 
          backgroundImage: 'url(/lovable-uploads/74777f45-69a7-49f7-b753-484782206763.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl ml-auto text-right">
            <h1 
              className="text-6xl md:text-6xl text-3xl font-bold mb-8" 
              style={{ 
                color: '#ffffff',
                textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
              }}
            >
              Our Students Love to Learn
            </h1>
            <p 
              className="text-xl md:text-xl text-sm mb-8 leading-relaxed" 
              style={{ 
                color: '#ffffff',
                textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
              }}
            >
              In our latest surveys, 94% of K-12 students reported they love school, with middle schoolers jumping 23 points to 95%. Over two-thirds of high schoolers wanted to keep the school open during the summer, and 60% of students said they'd rather attend Alpha than go on vacation.
            </p>
          </div>
        </div>
      </section>

      {/* Third Section - The Results Speak for Themselves */}
      <section className="min-h-screen flex items-center px-6" style={{ backgroundColor: '#c2ecfd' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl text-2xl font-bold mb-6" style={{ color: '#0000ef' }}>
              The Results Speak for Themselves
            </h2>
            <p className="text-lg md:text-xl text-sm leading-relaxed" style={{ color: '#0000ef' }}>
              Alpha students learn an average of 2.2x faster than their peers, as shown by industry-standard MAP testing (view report). SAT scores for the Class of 2025 hit a median of 1530, while even our freshman class (Class of 2028) posted a median score of 1410, well above national benchmarks. On AP exams, over 80% of students scored a 4 or 5.
            </p>
          </div>

          {/* Right Column - PDF Embed */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4 text-center" style={{ color: '#0000ef' }}>
              Read the 2HourLearning White Paper
            </h3>
            <div className="aspect-[4/3] bg-white rounded-lg shadow-lg mb-6 max-h-96 w-full max-w-md">
              <img
                src="/lovable-uploads/62f90d79-8180-454f-993c-4e1a44dec7b5.png"
                alt="2 Hour Learning White Paper"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="text-center">
              <a 
                href="/2%20Hour%20Learning%20White%20Paper%202024.pdf" 
                download="2 Hour Learning White Paper 2024.pdf"
                className="inline-block"
              >
                <Button 
                  variant="outline" 
                  className="rounded-full bg-transparent transition-all duration-200 flex items-center gap-2"
                  style={{ 
                    borderColor: '#0000ef',
                    color: '#0000ef'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0000ef';
                    e.currentTarget.style.color = '#c2ecfd';
                    e.currentTarget.style.borderColor = '#c2ecfd';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#0000ef';
                    e.currentTarget.style.borderColor = '#0000ef';
                  }}
                >
                  Download the White Paper
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - Set Up for Future Success */}
      <section 
        className="min-h-screen flex items-center justify-end px-6"
        style={{ 
          backgroundImage: 'url(/lovable-uploads/68add0c2-f0af-40a9-b7c3-3faafb67878d.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl ml-auto text-right">
            <h1 
              className="text-6xl md:text-6xl text-3xl font-bold mb-8" 
              style={{ 
                color: '#ffffff',
                textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
              }}
            >
              Set Up for Future Success
            </h1>
            <p 
              className="text-xl md:text-xl text-sm mb-8 leading-relaxed" 
              style={{ 
                color: '#ffffff',
                textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
              }}
            >
              Alpha graduates earn acceptances to top-tier universities around the world, from Stanford, NYU, and Kings College London to leading design, business, and tech schools.
            </p>
          </div>
        </div>
      </section>

      {/* Fifth Section - Still Have Questions? */}
      <section 
        className="min-h-screen flex items-center justify-start px-6"
        style={{ 
          backgroundImage: 'url(/lovable-uploads/ffe4eac0-c766-4e75-9f33-69e95d6245b5.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl text-left">
            <h1 
              className="text-6xl md:text-6xl text-3xl font-bold mb-8" 
              style={{ 
                color: '#ffffff',
                textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
              }}
            >
              Still Have Questions? You're Probably Not Alone
            </h1>
            <a 
              href="https://alpha.school/faq/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                variant="outline" 
                className="rounded-full border-white text-white bg-transparent hover:bg-[#c2ecfd] hover:text-[#0000ef] hover:border-[#0000ef] transition-all duration-200 flex items-center gap-2"
                style={{ boxShadow: '0 4px 8px rgba(0, 0, 239, 0.5)' }}
              >
                View Our FAQs
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proof;