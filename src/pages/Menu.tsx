import { Helmet } from "react-helmet-async";
import { Leaf, Clock, Info, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Menu = () => {
  const lunchMenu = [
    { day: "Monday", roti: "✔️", sabji: "Choli Bateta", dal: "Adad ni Dal", rice: "✔️" },
    { day: "Tuesday", roti: "✔️", sabji: "Guvar Bateta", dal: "Dal", rice: "✔️" },
    { day: "Wednesday", roti: "✔️", sabji: "Choli Pulses", dal: "Dal", rice: "✔️" },
    { day: "Thursday", roti: "✔️", sabji: "Ringana Bateta", dal: "Dal", rice: "✔️" },
    { day: "Friday", roti: "✔️", sabji: "Vatana Bateta", dal: "Dal", rice: "✔️" },
    { day: "Saturday", roti: "Bajiri no Rotlo", sabji: "Adad ni Dal", dal: "-", rice: "-" },
    { day: "Sunday", roti: "✔️", sabji: "Bhinda", dal: "Dal", rice: "✔️" },
  ];

  const dinnerMenu = [
    { day: "Monday", roti: "✔️", sabji: "Sev Tameta" },
    { day: "Tuesday", roti: "Thepla", sabji: "Bateta" },
    { day: "Wednesday", roti: "Bhakhri", sabji: "Dahi Tikhari" },
    { day: "Thursday", roti: "✔️", sabji: "Duddhi Bateta" },
    { day: "Friday", roti: "✔️", sabji: "Bhinda" },
    { day: "Saturday", roti: "Bajri Rotlo", sabji: "Bengan ka Bharta" },
    { day: "Sunday", roti: "✔️", sabji: "Sev Tameta" },
  ];

  const optionalItems = [
    { roti: "✔️", sabji: "Dungli Bateta" },
    { roti: "✔️", sabji: "Guvar Bateta" },
    { roti: "✔️", sabji: "Dal Bati" },
    { roti: "✔️", sabji: "Any Seasonal Item" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Weekly Menu - Mom's Special | Home-Style Tiffin Service</title>
        <meta
          name="description"
          content="Explore our delicious weekly menu featuring fresh, home-style vegetarian and Jain-friendly meals. Lunch and dinner options available."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background text-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-soft" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse-soft" style={{ animationDelay: "1s" }} />

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 tracking-wide uppercase">
              Weekly Menu
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              🍱 Weekly <span className="text-primary">Tiffin Menu</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Fresh, delicious home-style meals prepared daily with love and hygiene.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500/10 border border-green-500/20 rounded-full text-sm font-semibold text-green-700 shadow-sm"
              >
                <Leaf className="w-4 h-4" /> 100% Vegetarian
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-sm font-semibold text-orange-700 shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4" /> Jain Options Available
              </motion.span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Tables */}
      <section className="py-16 bg-background relative">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-6xl mx-auto space-y-16"
          >

            {/* Lunch Menu */}
            <motion.div variants={item} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-green-400 rounded-3xl opacity-20 group-hover:opacity-40 blur transition duration-500" />
              <div className="relative bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
                <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-transparent p-6 md:p-8 border-b border-border/60">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white dark:bg-card rounded-xl shadow-sm ring-1 ring-border">
                        <span className="text-3xl">🥗</span>
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">LUNCH MENU</h2>
                        <p className="text-sm text-muted-foreground mt-1 font-medium">Full Thali Format</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground bg-accent/50 px-4 py-1.5 rounded-full border border-border">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>12:00 PM - 1:30 PM</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-2 text-xs md:text-sm font-medium text-muted-foreground flex-wrap">
                    <span className="bg-background px-2 py-1 rounded border border-border">Roti included</span>
                    <span className="bg-background px-2 py-1 rounded border border-border">+</span>
                    <span className="bg-background px-2 py-1 rounded border border-border">Sabji</span>
                    <span className="bg-background px-2 py-1 rounded border border-border">+</span>
                    <span className="bg-background px-2 py-1 rounded border border-border">Dal</span>
                    <span className="bg-background px-2 py-1 rounded border border-border">+</span>
                    <span className="bg-background px-2 py-1 rounded border border-border">Rice</span>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-muted/30 text-muted-foreground border-b border-border">
                        <th className="p-5 font-bold uppercase text-xs tracking-wider">Day</th>
                        <th className="p-5 font-bold uppercase text-xs tracking-wider text-center">Roti (Daily)</th>
                        <th className="p-5 font-bold uppercase text-xs tracking-wider">Sabji</th>
                        <th className="p-5 font-bold uppercase text-xs tracking-wider">Dal</th>
                        <th className="p-5 font-bold uppercase text-xs tracking-wider text-center">Rice</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                      {lunchMenu.map((dayItem, index) => (
                        <motion.tr
                          key={index}
                          whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                          className="transition-colors hover:bg-muted/20"
                        >
                          <td className="p-5 font-semibold text-primary">{dayItem.day}</td>
                          <td className="p-5 text-center px-4">
                            <span className={`inline-flex items-center justify-center ${dayItem.roti.length > 2 ? 'px-3 py-1 rounded-full text-xs font-medium w-auto' : 'w-8 h-8 rounded-full text-xs'} bg-green-100 text-green-700 shadow-sm`}>
                              {dayItem.roti}
                            </span>
                          </td>
                          <td className="p-5 font-medium">{dayItem.sabji}</td>
                          <td className="p-5 text-balance">{dayItem.dal}</td>
                          <td className="p-5 text-center px-4">
                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-xs shadow-sm">
                              {dayItem.rice}
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* Dinner Menu & Optional Items Grid */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

              {/* Dinner Menu */}
              <motion.div variants={item} className="relative group flex flex-col h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-orange-400 rounded-3xl opacity-20 group-hover:opacity-40 blur transition duration-500" />
                <div className="relative bg-card rounded-2xl shadow-xl border border-border overflow-hidden flex-1 flex flex-col">
                  <div className="bg-gradient-to-r from-secondary/5 via-secondary/10 to-transparent p-6 border-b border-border/60">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-white dark:bg-card rounded-xl shadow-sm ring-1 ring-border">
                        <span className="text-3xl">🍽️</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">DINNER MENU</h2>
                        <p className="text-sm text-muted-foreground mt-1">Light & Healthy</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground bg-accent/50 px-3 py-1 rounded-full border border-border">
                        <Clock className="w-3.5 h-3.5 text-secondary" />
                        <span>7:00 PM - 9:00 PM</span>
                      </div>
                      <div className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded">
                        Only Roti + Sabji
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto flex-1">
                    <table className="w-full text-left border-collapse h-full">
                      <thead>
                        <tr className="bg-muted/30 text-muted-foreground border-b border-border">
                          <th className="p-4 font-bold uppercase text-xs tracking-wider">Day</th>
                          <th className="p-4 font-bold uppercase text-xs tracking-wider text-center">Roti</th>
                          <th className="p-4 font-bold uppercase text-xs tracking-wider">Sabji</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/40">
                        {dinnerMenu.map((dayItem, index) => (
                          <motion.tr
                            key={index}
                            className="transition-colors hover:bg-muted/20"
                          >
                            <td className="p-4 font-semibold text-secondary">{dayItem.day}</td>
                            <td className="p-4 text-center">
                              <span className={`inline-flex items-center justify-center ${dayItem.roti.length > 2 ? 'px-2 py-1 rounded-full text-[10px] font-medium w-auto' : 'w-6 h-6 rounded-full text-[10px]'} bg-orange-100 text-orange-700 shadow-sm`}>
                                {dayItem.roti}
                              </span>
                            </td>
                            <td className="p-4 font-medium">{dayItem.sabji}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>

              {/* Optional Items & Notes */}
              <div className="space-y-8">
                {/* Optional Items */}
                <motion.div variants={item} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-400 rounded-3xl opacity-20 group-hover:opacity-40 blur transition duration-500" />
                  <div className="relative bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500/5 via-green-500/10 to-transparent p-6 border-b border-border/60">
                      <div className="flex items-center gap-4">
                        <div className="p-2.5 bg-white dark:bg-card rounded-lg shadow-sm ring-1 ring-border">
                          <span className="text-2xl">🌟</span>
                        </div>
                        <h2 className="text-xl font-bold text-green-700">OPTIONAL ITEMS</h2>
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-muted/30 text-muted-foreground border-b border-border">
                            <th className="p-4 font-bold uppercase text-xs tracking-wider text-center w-24">Roti</th>
                            <th className="p-4 font-bold uppercase text-xs tracking-wider">Special Sabji</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border/40">
                          {optionalItems.map((optItem, index) => (
                            <motion.tr
                              key={index}
                              className="transition-colors hover:bg-muted/20"
                            >
                              <td className="p-4 text-center">
                                <span className={`inline-flex items-center justify-center ${optItem.roti.length > 2 ? 'px-2 py-1 rounded-full text-[10px] font-medium w-auto' : 'w-6 h-6 rounded-full text-[10px]'} bg-green-100 text-green-700 shadow-sm`}>
                                  {optItem.roti}
                                </span>
                              </td>
                              <td className="p-4 font-medium text-foreground">{optItem.sabji}</td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>

                {/* Notes Card */}
                <motion.div
                  variants={item}
                  className="bg-accent/40 border border-accent rounded-2xl p-6 relative overflow-hidden"
                >
                  <div className="flex items-start gap-4 z-10 relative">
                    <div className="p-2 bg-background rounded-full border border-border shadow-sm">
                      <Info className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-3">Important Notes</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span className="leading-snug">Roti is included in all daily meals.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span className="leading-snug">Lunch is a full meal with Dal & Rice.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span className="leading-snug">Dinner is lighter: only Roti & Sabji.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span className="leading-snug">Jain food is available upon request.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Menu;
