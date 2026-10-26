import { Award, Star, Target, TrendingUp } from "lucide-react";

export default function Impact() {
  const stats = [
    { value: "100%", label: "Client Satisfaction", icon: Star },
    { value: "5/5", label: "Client Ratings", icon: Award },
    { value: "Consistent", label: "Leads Generated Monthly", icon: TrendingUp },
    { value: "4×", label: "Average ROI Increase", icon: Target },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#008ac1] via-[#00b5ca] to-[#008ac1] py-12 lg:py-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" />

        <div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-16 text-center md:mb-20">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Our Impact
          </h2>

          <div className="mx-auto mb-6 h-1.5 w-28 rounded-full bg-white" />

          <p className="mx-auto max-w-3xl text-lg text-white/90 md:text-xl">
            We focus on delivering real outcomes, not vanity metrics.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mb-16 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            const isConsistent = stat.value === "Consistent";

            return (
              <div
                key={stat.label}
                className="group relative flex min-w-0 flex-col items-center rounded-3xl border border-white/20 bg-white/10 px-5 pb-8 pt-8 text-center backdrop-blur-xl transition-all duration-500 hover:scale-[1.03] hover:bg-white/20 sm:px-6"
              >
                {/* Icon */}
                <div className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-[#008ac1]" />
                </div>

                <div className="mt-4 flex w-full min-w-0 flex-1 flex-col items-center">
                  {/* Statistic Value */}
                  <div className="flex min-h-[72px] w-full min-w-0 items-center justify-center">
                    <span
                      className={
                        isConsistent
                          ? "block max-w-full break-words text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
                          : "block max-w-full text-5xl font-bold leading-tight text-white md:text-6xl"
                      }
                    >
                      {stat.value}
                    </span>
                  </div>

                  {/* Statistic Label */}
                  <p className="mt-2 max-w-full text-base font-medium leading-relaxed text-white/90 sm:text-lg">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Impact Statement */}
        <div className="text-center">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl sm:p-8 md:p-12">
            <p className="text-lg leading-relaxed text-white md:text-xl">
              Our work consistently transforms brand visibility, lead
              generation, and digital presence for businesses across industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
