import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2, Save, Lock } from "lucide-react";
import { motion } from "framer-motion";

import { API_URL } from "@/config";

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [menuData, setMenuData] = useState<any>(null);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "momspecial123") { // Matches the simple backend check
            setIsAuthenticated(true);
            fetchMenu();
        } else {
            toast.error("Invalid Password");
        }
    };

    const fetchMenu = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setMenuData(data);
        } catch (error) {
            toast.error("Failed to fetch menu data. Is the backend running?");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSave = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(API_URL, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    password: password, // Send password to verify on backend
                    lunch: menuData.lunch,
                    dinner: menuData.dinner,
                    optional: menuData.optional
                }),
            });

            if (res.ok) {
                toast.success("Menu updated successfully!");
            } else {
                toast.error("Failed to update menu");
            }
        } catch (error) {
            toast.error("Error saving data");
        } finally {
            setIsLoading(false);
        }
    };

    const updateLunch = (index: number, field: string, value: string) => {
        const newLunch = [...menuData.lunch];
        newLunch[index] = { ...newLunch[index], [field]: value };
        setMenuData({ ...menuData, lunch: newLunch });
    };

    const updateDinner = (index: number, field: string, value: string) => {
        const newDinner = [...menuData.dinner];
        newDinner[index] = { ...newDinner[index], [field]: value };
        setMenuData({ ...menuData, dinner: newDinner });
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-muted/20 p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md bg-card p-8 rounded-2xl shadow-lg border border-border"
                >
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-primary/10 rounded-full text-primary">
                            <Lock className="w-8 h-8" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <Input
                            type="password"
                            placeholder="Enter Admin Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="text-lg py-6"
                        />
                        <Button type="submit" className="w-full text-lg py-6" disabled={!password}>
                            Login to Dashboard
                        </Button>
                    </form>
                </motion.div>
            </div>
        );
    }

    if (!menuData) return (
        <div className="min-h-screen flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
    );

    return (
        <div className="min-h-screen bg-muted/10 pb-20">
            <header className="bg-card border-b border-border sticky top-0 z-10 px-4 py-4 shadow-sm">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">🍱 Menu Manager</h1>
                    <Button onClick={handleSave} disabled={isLoading} className="gap-2">
                        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                        Save Changes
                    </Button>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8 max-w-5xl space-y-12">
                {/* Lunch Section */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                        🥗 Lunch Menu
                    </h2>
                    <div className="grid gap-6">
                        {menuData.lunch.map((item: any, index: number) => (
                            <div key={index} className="bg-card p-6 rounded-xl border border-border shadow-sm">
                                <div className="font-bold text-lg mb-4 text-muted-foreground">{item.day}</div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase text-muted-foreground">Sabji</label>
                                        <Input
                                            value={item.sabji}
                                            onChange={(e) => updateLunch(index, 'sabji', e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase text-muted-foreground">Dal</label>
                                        <Input
                                            value={item.dal}
                                            onChange={(e) => updateLunch(index, 'dal', e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase text-muted-foreground">Roti</label>
                                        <Input
                                            value={item.roti}
                                            onChange={(e) => updateLunch(index, 'roti', e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase text-muted-foreground">Rice</label>
                                        <Input
                                            value={item.rice}
                                            onChange={(e) => updateLunch(index, 'rice', e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Dinner Section */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 text-secondary flex items-center gap-2">
                        🍽️ Dinner Menu
                    </h2>
                    <div className="grid gap-6">
                        {menuData.dinner.map((item: any, index: number) => (
                            <div key={index} className="bg-card p-6 rounded-xl border border-border shadow-sm">
                                <div className="font-bold text-lg mb-4 text-muted-foreground">{item.day}</div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase text-muted-foreground">Sabji</label>
                                        <Input
                                            value={item.sabji}
                                            onChange={(e) => updateDinner(index, 'sabji', e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase text-muted-foreground">Roti</label>
                                        <Input
                                            value={item.roti}
                                            onChange={(e) => updateDinner(index, 'roti', e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Admin;
