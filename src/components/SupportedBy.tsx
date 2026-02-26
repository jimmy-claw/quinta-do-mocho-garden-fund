import logos from "@/assets/logos.svg";

export function SupportedBy() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Supported by
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
            {/* Logos Circle Lisbon */}
            <div className="flex flex-col items-center group">
              <div className="w-32 h-16 flex items-center justify-center mb-4 group-hover:border-primary/50 transition-colors">
                <img src={logos} alt="Logos.co" className="max-w-full max-h-full object-contain" />
              </div>
              <a 
                href="https://logos.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Logos Circle Lisbon
              </a>
            </div>

            {/* Mocho+ */}
            <div className="flex flex-col items-center group">
              <div className="w-32 h-16 flex items-center justify-center mb-4 group-hover:border-primary/50 transition-colors">
                <div className="text-4xl font-bold text-primary">M+</div>
              </div>
              <span className="text-muted-foreground text-sm font-medium">
                Mocho+
              </span>
            </div>

            {/* Hortas Comunitárias */}
            <div className="flex flex-col items-center group">
              <div className="w-32 h-16 flex items-center justify-center mb-4 group-hover:border-primary/50 transition-colors">
                <div className="text-4xl">🌱</div>
              </div>
              <span className="text-muted-foreground text-sm font-medium">
                Hortas Comunitárias
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
