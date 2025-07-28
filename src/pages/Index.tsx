import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 1 */}
        <section className="h-screen relative overflow-hidden">
          <img 
            src="/lovable-uploads/d3784277-ce04-4cf8-a93b-e4431f8e0c2f.png"
            alt="Alpha School Building"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-end">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-2xl ml-auto text-right">
                <h1 
                  className="text-6xl font-bold mb-8" 
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                  }}
                >
                  Welcome to the Future of Education
                </h1>
                
                <p 
                  className="text-xl mb-8 leading-relaxed" 
                  style={{ color: '#ffffff' }}
                >
                  At Alpha, we believe kids should wake up excited for school, and our revolutionary approach blends cutting edge-AI with proven learning science to make sure they do, all while scoring in the top 1-2% nationally.
                </p>
                
                <Button 
                  variant="outline" 
                  className="rounded-full border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-200 flex items-center gap-2 ml-auto"
                >
                  Who We Are
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="h-screen relative overflow-hidden">
          <img 
            src="/lovable-uploads/1c50b4f2-73fa-49ad-83f7-2ffc4fa861db.png"
            alt="TEDx Alpha School Austin Youth"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </section>

        {/* Section 3 */}
        <section className="h-screen relative overflow-hidden">
          <img 
            src="/lovable-uploads/a3b9db08-a472-49c0-a3e2-be8e03ad7593.png"
            alt="Student Learning"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </section>

        {/* Section 4 */}
        <section className="h-screen relative overflow-hidden">
          <video 
            src="/4 Sailing.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </section>

        {/* Section 5 */}
        <section className="h-screen relative overflow-hidden">
          <video 
            src="/5 School Launch.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </section>
      </main>
    </div>
  );
};

export default Index;
