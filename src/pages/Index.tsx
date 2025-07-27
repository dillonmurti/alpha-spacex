import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 1 */}
        <section className="h-screen relative overflow-hidden">
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/5 School Launch.gif" type="video/mp4" />
          </video>
        </section>

        {/* Section 2 */}
        <section className="h-screen relative overflow-hidden">
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/4 Sailing.gif" type="video/mp4" />
          </video>
        </section>

        {/* Section 3 */}
        <section className="h-screen relative overflow-hidden">
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/5 School Launch.gif" type="video/mp4" />
          </video>
        </section>

        {/* Section 4 */}
        <section className="h-screen relative overflow-hidden">
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/4 Sailing.gif" type="video/mp4" />
          </video>
        </section>

        {/* Section 5 */}
        <section className="h-screen relative overflow-hidden">
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/5 School Launch.gif" type="video/mp4" />
          </video>
        </section>
      </main>
    </div>
  );
};

export default Index;
