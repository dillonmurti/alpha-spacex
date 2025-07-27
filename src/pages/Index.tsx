import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content Area */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
              Welcome to Alpha
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our innovative programs and take the next step in your journey.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
