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
          <div className="absolute inset-0 flex items-center justify-start">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-2xl text-left">
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
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                  }}
                >
                  At Alpha, we believe in three guiding principles: kids should love school, learn 2X in 2 hours per day, and develop real life skills.
                </p>
                
                <Button 
                  variant="outline" 
                  className="rounded-full border-white text-white bg-transparent hover:bg-[#c2ecfd] hover:text-[#0000ef] hover:border-[#0000ef] transition-all duration-200 flex items-center gap-2"
                  style={{ boxShadow: '0 4px 8px rgba(0, 0, 239, 0.5)' }}
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
                  Amazing Academics, Real Results
                </h1>
                
                <p 
                  className="text-xl mb-8 leading-relaxed" 
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                  }}
                >
                  We believe every kid can learn 2X more in only 2 hours per day, and the results are clear: Alpha students grow 2.5 times faster than their peers on standardized tests.
                </p>
                
                <Button 
                  variant="outline" 
                  className="rounded-full border-white text-white bg-transparent hover:bg-[#c2ecfd] hover:text-[#0000ef] hover:border-[#0000ef] transition-all duration-200 flex items-center gap-2 ml-auto"
                  style={{ boxShadow: '0 4px 8px rgba(0, 0, 239, 0.5)' }}
                >
                  See the Proof
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="h-screen relative overflow-hidden">
          <img 
            src="/lovable-uploads/a3b9db08-a472-49c0-a3e2-be8e03ad7593.png"
            alt="Student Learning"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-start">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-2xl text-left">
                <h1 
                  className="text-6xl font-bold mb-8" 
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                  }}
                >
                  Education is Broken, We Fixed it
                </h1>
                
                <p 
                  className="text-xl mb-8 leading-relaxed" 
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                  }}
                >
                  Our revolutionary approach blends cutting edge-AI with proven learning science, ensuring all students get the 1:1 attention they need and motivation they crave to progress without learning gaps.
                </p>
                
                <Button 
                  variant="outline" 
                  className="rounded-full border-white text-white bg-transparent hover:bg-[#c2ecfd] hover:text-[#0000ef] hover:border-[#0000ef] transition-all duration-200 flex items-center gap-2"
                  style={{ boxShadow: '0 4px 8px rgba(0, 0, 239, 0.5)' }}
                >
                  Explore Our Approach
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
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
                  Limitless Learning in the Classroom and Beyond
                </h1>
                
                <p 
                  className="text-xl mb-8 leading-relaxed" 
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                  }}
                >
                  With core academics completed in the morning, afternoons focus on real-world skills and each student's passion. Alpha's proven approach unlocks students' limitless potential.
                </p>
                
                <Button 
                  variant="outline" 
                  className="rounded-full border-white text-white bg-transparent hover:bg-[#c2ecfd] hover:text-[#0000ef] hover:border-[#0000ef] transition-all duration-200 flex items-center gap-2 ml-auto"
                  style={{ boxShadow: '0 4px 8px rgba(0, 0, 239, 0.5)' }}
                >
                  See Students in Action
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
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
