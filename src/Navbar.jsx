import React, { useState } from "react";

const Navbar = ({ drop, dataItem }) => {
    const [open, setOpen] = useState(false);
    const [dopen, dsetOpen] = useState(false);

    return (
        
            <div className=" border w-full h-10 md:flex justify-between px-20 items-center">
            <div className="logo flex justify-between">
                <h1>navbar</h1>
                <button onClick={() => setOpen(!open)} className="md:hidden">
                    ☰
                </button>
            </div>
            {/*mobile dropdown */}
            {open && (
                <div className="option md:hidden border flex justify-center mt-4 flex-col bg-slate-900">
                    <button className="w-full text-zinc-200 py-5 border">Home</button>
                    <button className="w-full text-zinc-200 py-5 border">About</button>
                    <button className="w-full text-zinc-200 py-5 border">Contact</button>
                    <button className="w-full text-zinc-200 py-5 border">Email</button>
                </div>
            )}

            {/*desktop dropdown */}
            <div className="hidden md:flex gap-6">
                <div
                    onMouseEnter={() => dsetOpen(true)}
                    onMouseLeave={() => dsetOpen(false)}
                    className="relative hidden md:block"
                >
                    <button className=" block h-10">{drop}</button>

                    {dopen && (
                        <ul className="absolute w-30 h-30  border px-2">
                            {dataItem.map((item, idx) => (
                                <li key={idx}>{item.label}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <button>About</button>
                <button>Contact</button>
                <button>Poke</button>
            
            </div>
        </div>
    );
};

export default Navbar;
