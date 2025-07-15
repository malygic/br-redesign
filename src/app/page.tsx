export default function Home() {
  return (
    <div className="container mx-auto px-4 lg:px-6 py-12">
      <div className="text-center">
        <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
          Business Ranker
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Moderní digitální agentura specializující se na tvorbu webových stránek, SEO, online marketing a grafický design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/cenik"
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
          >
            Získat nabídku
          </a>
          <a
            href="/sluzby"
            className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted/50 transition-all duration-300"
          >
            Naše služby
          </a>
        </div>
      </div>
    </div>
  );
}
