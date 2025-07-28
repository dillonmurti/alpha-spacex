import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Proof = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* First Section - Driven by Students, Backed by Data */}
      <section className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: '#c2ecfd' }}>
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8">
            Driven by Students, Backed by Data
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed" style={{ color: '#ffffff' }}>
            At Alpha, success isn't just measured by test scores, but it is reflected in how our students feel and grow every day
          </p>
        </div>
      </section>

      {/* Second Section - Our Students Love to Learn */}
      <section className="min-h-screen flex items-center justify-end px-6" style={{ backgroundColor: '#0000ef' }}>
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl ml-auto text-right">
            <h1 
              className="text-6xl font-bold mb-8" 
              style={{ 
                color: '#ffffff',
                textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
              }}
            >
              Our Students Love to Learn
            </h1>
            <p 
              className="text-xl mb-8 leading-relaxed" 
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
      <section className="min-h-screen flex items-center px-6 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Results Speak for Themselves
            </h2>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#ffffff' }}>
              Alpha students learn an average of 2.2x faster than their peers, as shown by industry-standard MAP testing (view report). SAT scores for the Class of 2025 hit a median of 1530, while even our freshman class (Class of 2028) posted a median score of 1410, well above national benchmarks. On AP exams, over 80% of students scored a 4 or 5.
            </p>
          </div>

          {/* Right Column - PDF Embed */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
              Read the 2HourLearning White Paper
            </h3>
            <div className="aspect-[4/3] bg-white rounded-lg shadow-lg mb-6 max-h-96 w-full max-w-md">
              <object
                data="/2%20Hour%20Learning%20White%20Paper%202024.pdf"
                type="application/pdf"
                className="w-full h-full rounded-lg"
              >
                <p className="p-4 text-center">
                  Your browser doesn't support PDF viewing. 
                  <a href="/2%20Hour%20Learning%20White%20Paper%202024.pdf" className="text-blue-500 underline ml-1">
                    Click here to download the PDF
                  </a>
                </p>
              </object>
            </div>
            <div className="text-center">
              <a 
                href="/2%20Hour%20Learning%20White%20Paper%202024.pdf" 
                download="2 Hour Learning White Paper 2024.pdf"
                className="inline-block"
              >
                <Button 
                  variant="outline" 
                  className="rounded-full border-white text-white bg-transparent hover:bg-[#c2ecfd] hover:text-[#0000ef] hover:border-[#0000ef] transition-all duration-200 flex items-center gap-2"
                  style={{ boxShadow: '0 4px 8px rgba(0, 0, 239, 0.5)' }}
                >
                  Download the White Paper
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proof;