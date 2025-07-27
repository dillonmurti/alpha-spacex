import Header from "@/components/Header";

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
          <video 
            src="/5 School Launch.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
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
