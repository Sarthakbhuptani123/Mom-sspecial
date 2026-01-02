import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { CalendarDays, Utensils, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";

const CostCalculator = () => {
    const [days, setDays] = useState([26]);
    const [isFullMeal, setIsFullMeal] = useState(false); // false = Basic, true = Full

    // Prices
    const BASIC_PRICE = 50;
    const FULL_PRICE = 70;

    const pricePerMeal = isFullMeal ? FULL_PRICE : BASIC_PRICE;
    const totalCost = days[0] * pricePerMeal;

    return (
        <section className="py-16 bg-white border-b border-border">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-primary font-medium tracking-wide uppercase">Plan Your Budget</span>
                        <h2 className="text-3xl font-bold text-foreground mt-2">
                            Subscription Calculator
                        </h2>
                        <p className="text-muted-foreground mt-2">
                            See exactly how much you'll spend based on your needs.
                        </p>
                    </div>

                    <div className="bg-cream/50 rounded-3xl p-8 md:p-12 shadow-sm border border-border">
                        <div className="grid md:grid-cols-2 gap-12 items-center">

                            {/* Controls */}
                            <div className="space-y-8">
                                {/* Meal Type Switch */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="meal-type" className="text-lg font-semibold flex items-center gap-2">
                                            <Utensils className="w-5 h-5 text-primary" />
                                            Meal Type
                                        </Label>
                                        <span className="text-sm font-medium text-muted-foreground">
                                            {isFullMeal ? "Full Thali (₹70)" : "Basic Tiffin (₹50)"}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-input shadow-sm">
                                        <span className={`text-sm font-medium transition-colors ${!isFullMeal ? "text-primary" : "text-muted-foreground"}`}>Basic</span>
                                        <Switch
                                            id="meal-type"
                                            checked={isFullMeal}
                                            onCheckedChange={setIsFullMeal}
                                            className="data-[state=checked]:bg-primary"
                                        />
                                        <span className={`text-sm font-medium transition-colors ${isFullMeal ? "text-primary" : "text-muted-foreground"}`}>Full Thali</span>
                                    </div>
                                </div>

                                {/* Days Slider */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <Label className="text-lg font-semibold flex items-center gap-2">
                                            <CalendarDays className="w-5 h-5 text-primary" />
                                            Number of Days
                                        </Label>
                                        <span className="text-xl font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg">
                                            {days[0]} Days
                                        </span>
                                    </div>
                                    <Slider
                                        value={days}
                                        onValueChange={setDays}
                                        max={30}
                                        step={1}
                                        className="py-4"
                                    />
                                    <div className="flex justify-between text-xs text-muted-foreground font-medium px-1">
                                        <span>1 Day</span>
                                        <span>15 Days</span>
                                        <span>30 Days</span>
                                    </div>
                                </div>
                            </div>

                            {/* Result Card */}
                            <div className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-xl text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                                <h3 className="text-lg font-medium opacity-90 mb-6 relative z-10">Estimated Monthly Cost</h3>

                                <div className="relative z-10 flex items-center justify-center gap-1 mb-2">
                                    <IndianRupee className="w-8 h-8 md:w-10 md:h-10 opacity-80" />
                                    <motion.span
                                        key={totalCost}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="text-5xl md:text-6xl font-bold tracking-tight"
                                    >
                                        {totalCost.toLocaleString()}
                                    </motion.span>
                                </div>

                                <p className="text-primary-foreground/80 text-sm mb-8 relative z-10">
                                    for {days[0]} days of {isFullMeal ? "Full Thali" : "Basic Tiffin"}
                                </p>

                                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-left relative z-10">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="opacity-80">Price per meal:</span>
                                        <span className="font-bold">₹{pricePerMeal}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="opacity-80">Days:</span>
                                        <span className="font-bold">{days[0]}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CostCalculator;
