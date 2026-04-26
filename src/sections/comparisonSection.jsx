import { Check, X } from "lucide-react";

const services = [
  "Authorized by International Universities",
  "Global Sim Card",
  "Part time Job Assistance",
  "Airport Pickup",
  "Health Insurance",
  "Internship Placement",
  "International Payment Services (Card/Bank Transfer)",
  "UK Bank Account Support",
  "Cheap Air Ticket",
  "IELTS Registration Cashback",
  "Gift Hamper",
  "Free Assessment",
];

const ComparisonSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Eduvisors</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See how we compare to other consultancies
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-muted/50 border-b border-border">
            <div className="p-5 md:p-6 font-semibold text-foreground text-sm md:text-base">
              Services
            </div>
            <div className="p-5 md:p-6 font-semibold text-center text-muted-foreground text-sm md:text-base border-l border-border">
              Other Consultancy
            </div>
            <div className="p-5 md:p-6 font-semibold text-center text-primary text-sm md:text-base border-l border-border bg-primary/5">
              Eduvisors
            </div>
          </div>

          {/* Rows */}
          {services.map((service, idx) => (
            <div
              key={service}
              className={`grid grid-cols-3 transition-colors hover:bg-muted/30 ${
                idx !== services.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="p-4 md:p-5 text-foreground text-sm md:text-base font-medium flex items-center">
                {service}
              </div>
              <div className="p-4 md:p-5 border-l border-border flex items-center justify-center">
                <X className="w-7 h-7 text-destructive" strokeWidth={4} />
              </div>
              <div className="p-4 md:p-5 border-l border-border bg-primary/5 flex items-center justify-center">
                <Check className="w-7 h-7 text-primary" strokeWidth={4} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
