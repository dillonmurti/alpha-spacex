import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Section 1: Alpha's Three Commitments */}
      <section className="relative min-h-screen bg-black flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/92907621-1009-49a9-8a31-c45d66ac09e3.png)' }}>
        <div className="absolute inset-0 bg-[#0000ef] bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 
            className="text-6xl font-bold mb-8"
            style={{ 
              color: '#ffffff',
              textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
            }}
          >
            Alpha's Three Commitments
          </h1>
          <p 
            className="text-xl leading-relaxed"
            style={{ 
              color: '#ffffff',
              textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
            }}
          >
            Our learning is personalized, purpose-driven, and setting kids up for success in the real world
          </p>
        </div>
      </section>

      {/* Section 2: Kids Will Love School */}
      <section className="relative min-h-screen bg-black flex items-center justify-start bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/434bff7b-636a-4cfd-8584-49e601e25089.png)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl text-left">
            <h2 
              className="text-6xl font-bold mb-8"
              style={{ 
                color: '#ffffff',
                textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
              }}
            >
              Kids Will Love School
            </h2>
            <p 
              className="text-xl mb-8 leading-relaxed"
              style={{ 
                color: '#ffffff',
                textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
              }}
            >
              Students lead their own growth through regular feedback and one-on-one support, while exceptional guides keep them motivated with creative tools and coaching. With unique experiences like Mobile Squad field trips and in-school adventures, we design every day to spark curiosity and make school a place kids truly love.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Kids Will Learn 2X in 2 Hours */}
      <section className="relative min-h-screen bg-black flex items-center justify-end bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/67bf6ef0-cc3b-4d86-9cdc-3877f4d475a7.png)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl ml-auto text-right">
            <h2 
              className="text-6xl font-bold mb-8"
              style={{ 
                color: '#ffffff',
                textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
              }}
            >
              Kids Will Learn 2X in 2 Hours
            </h2>
            <p 
              className="text-xl mb-8 leading-relaxed"
              style={{ 
                color: '#ffffff',
                textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
              }}
            >
              At Alpha, students master core subjects in just two hours a day using adaptive AI, mastery-based learning, and time-tested focus strategies. This approach leads to 2.6x average academic growth, with top students reaching up to 6.5x—consistently outperforming national benchmarks.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Kids Will Learn Life Skills for the Future */}
      <section className="relative min-h-screen bg-black flex items-center justify-start bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/3b828729-b04d-4337-8d37-e0e09e174c35.png)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl text-left">
            <h2 
              className="text-6xl font-bold mb-8"
              style={{ 
                color: '#ffffff',
                textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
              }}
            >
              Kids Will Learn Life Skills for the Future
            </h2>
            <p 
              className="text-xl mb-8 leading-relaxed"
              style={{ 
                color: '#ffffff',
                textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
              }}
            >
              At Alpha, students build grit, creativity, and adaptability through hands-on workshops focused on 24 essential life skills. From public speaking and coding to entrepreneurship and outdoor challenges, our experiential learning prepares them to lead, communicate, and grow with confidence—long after graduation.
            </p>
            <Button 
              asChild 
              variant="outline" 
              className="rounded-full border-white text-white bg-transparent hover:bg-[#c2ecfd] hover:text-[#0000ef] hover:border-[#0000ef] transition-all duration-200 flex items-center gap-2 w-[220px]"
              style={{ boxShadow: '0 4px 8px rgba(0, 0, 239, 0.5)' }}
            >
              <a href="https://alpha.school/the-program/" className="flex items-center gap-2 justify-center">
                Explore the Alpha Program
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 5: Carousel */}
      <section className="relative min-h-screen bg-black">
        <div className="relative z-10 w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {/* Slide 1: Attend a Showcase or Schedule a Tour */}
              <CarouselItem>
                <div className="relative min-h-screen bg-black flex items-center justify-start bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/98da829a-31fb-4ed3-abcc-d68cd9156de8.png)' }}>
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="max-w-2xl text-left">
                      <h2 
                        className="text-6xl font-bold mb-8"
                        style={{ 
                          color: '#ffffff',
                          textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                        }}
                      >
                        Attend a Showcase or Schedule a Tour
                      </h2>
                      <Button 
                        asChild 
                        variant="outline" 
                        className="rounded-full border-white text-white bg-transparent hover:bg-[#c2ecfd] hover:text-[#0000ef] hover:border-[#0000ef] transition-all duration-200 flex items-center gap-2 w-[150px]"
                        style={{ boxShadow: '0 4px 8px rgba(0, 0, 239, 0.5)' }}
                      >
                        <a href="https://alpha.school/admission/" className="flex items-center gap-2 justify-center">
                          Let's Do It
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Slide 2: Submit an Application Form */}
              <CarouselItem>
                <div className="relative min-h-screen bg-black flex items-center justify-end bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/458e05f8-987b-41d3-8edf-5576e23d9f6c.png)' }}>
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="max-w-2xl ml-auto text-right">
                      <h2 
                        className="text-6xl font-bold mb-8"
                        style={{ 
                          color: '#ffffff',
                          textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                        }}
                      >
                        Submit an Application Form
                      </h2>
                      <Button 
                        asChild 
                        variant="outline" 
                        className="rounded-full border-white text-white bg-transparent hover:bg-[#c2ecfd] hover:text-[#0000ef] hover:border-[#0000ef] transition-all duration-200 flex items-center gap-2 w-[150px] ml-auto"
                        style={{ boxShadow: '0 4px 8px rgba(0, 0, 239, 0.5)' }}
                      >
                        <a href="https://alpha.school/admission/" className="flex items-center gap-2 justify-center">
                          Let's Do It
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Slide 3: Attend a Shadow Day */}
              <CarouselItem>
                <div className="relative min-h-screen bg-black flex items-center justify-start bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/d27860ee-1608-436e-9e30-6f08fd771fe4.png)' }}>
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="max-w-2xl text-left">
                      <h2 
                        className="text-6xl font-bold mb-8"
                        style={{ 
                          color: '#ffffff',
                          textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                        }}
                      >
                        Attend a Shadow Day
                      </h2>
                      <Button 
                        asChild 
                        variant="outline" 
                        className="rounded-full border-white text-white bg-transparent hover:bg-[#c2ecfd] hover:text-[#0000ef] hover:border-[#0000ef] transition-all duration-200 flex items-center gap-2 w-[150px]"
                        style={{ boxShadow: '0 4px 8px rgba(0, 0, 239, 0.5)' }}
                      >
                        <a href="https://alpha.school/admission/" className="flex items-center gap-2 justify-center">
                          Let's Do It
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-[#0000ef] text-[#c2ecfd] border-[#0000ef] hover:bg-[#0000ef]/80 hover:text-[#c2ecfd]" />
            <CarouselNext className="right-4 bg-[#0000ef] text-[#c2ecfd] border-[#0000ef] hover:bg-[#0000ef]/80 hover:text-[#c2ecfd]" />
          </Carousel>
        </div>
      </section>

      {/* Section 6: Contact Admissions Team */}
      <section className="relative min-h-screen bg-white flex flex-col items-center justify-center py-12">
        <div className="absolute inset-0 bg-[#c2ecfd] bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-7xl mx-auto w-full">
          <h1 
            className="text-6xl font-bold mb-12"
            style={{ 
              color: '#ffffff',
              textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
            }}
          >
            Have Questions? Contact our Admissions Team
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Column 1: Austin + Brownsville */}
            <div className="flex flex-col space-y-8">
              {/* Alpha School Austin */}
              <div className="flex flex-col items-center text-center">
                <h3 
                  className="text-2xl font-bold mb-3"
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                  }}
                >
                  Alpha School Austin
                </h3>
                <p 
                  className="text-base mb-4 leading-relaxed"
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                  }}
                >
                  Joanna Lovejoy | admissions@alpha.school
                </p>
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/lovable-uploads/285540c4-02b4-4e9b-ae12-f9b40055132d.png" alt="Joanna Lovejoy" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
              </div>

              {/* Alpha School Brownsville */}
              <div className="flex flex-col items-center text-center">
                <h3 
                  className="text-2xl font-bold mb-3"
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                  }}
                >
                  Alpha School Brownsville
                </h3>
                <p 
                  className="text-base mb-4 leading-relaxed"
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                  }}
                >
                  Katherine Ledesma | admissions.brownsville@alpha.school
                </p>
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/lovable-uploads/285540c4-02b4-4e9b-ae12-f9b40055132d.png" alt="Katherine Ledesma" />
                  <AvatarFallback>KL</AvatarFallback>
                </Avatar>
              </div>
            </div>

            {/* Column 2: Miami + Expansion Schools */}
            <div className="flex flex-col space-y-8">
              {/* Alpha School Miami */}
              <div className="flex flex-col items-center text-center">
                <h3 
                  className="text-2xl font-bold mb-3"
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                  }}
                >
                  Alpha School Miami
                </h3>
                <p 
                  className="text-base mb-4 leading-relaxed"
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                  }}
                >
                  Debby Lichtner | admissions.miami@alpha.school
                </p>
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/lovable-uploads/285540c4-02b4-4e9b-ae12-f9b40055132d.png" alt="Debby Lichtner" />
                  <AvatarFallback>DL</AvatarFallback>
                </Avatar>
              </div>

              {/* Alpha Expansion Schools */}
              <div className="flex flex-col items-center text-center">
                <h3 
                  className="text-2xl font-bold mb-3"
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                  }}
                >
                  Alpha Expansion Schools
                </h3>
                <p 
                  className="text-base mb-4 leading-relaxed"
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                  }}
                >
                  Rachel Goodlad | rachel.goodlad@alpha.school
                </p>
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/lovable-uploads/285540c4-02b4-4e9b-ae12-f9b40055132d.png" alt="Rachel Goodlad" />
                  <AvatarFallback>RG</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;