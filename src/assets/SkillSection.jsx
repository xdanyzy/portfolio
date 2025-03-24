
import { useEffect, useState } from "react";

function SkillSection(){
    const [isTextShow, ScrollingTextVisible] = useState(false);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            window.scrollY > 1000 ? ScrollingTextVisible(true) : null;
        });
    }, []);
    return(
        <>
            <div className="flex flex-col h-screen justify-center items-center relative">
                <h1 className={`RootAnim md:text-8xl text-6xl z-20 SlideUp ${isTextShow ? 'setZero' : ""}`}>My Skill?</h1>
                <div className={`absolute w-[75%] top-[13.4%] md:top-[91%] h-[2.5rem] backdrop-blur-sm rounded SlideUp ${isTextShow ? 'setZero' : ""}`}>
                    <div className="flex justify-between md:justify-normal items-center py-2 px-4 md:absolute md:w-full md:bottom-0 md:bg-[#1b1b1b] md:py-2 z-40">
                        <div className="md:absolute md:right-[1%]">
                            <p className="text-sm">{new Date().getHours()} : {new Date().getMinutes().toLocaleString()}</p>
                        </div>
                        <div className="flex gap-1 md:gap-3 md:right-[8%] lg:right-[5%] md:absolute">
                            <span><ion-icon name="wifi"></ion-icon></span>
                            <span><ion-icon name="cellular"></ion-icon></span>
                            <span><ion-icon name="battery-full"></ion-icon></span>
                        </div>
                        <div className="hidden gap-4 md:flex">
                            <span><ion-icon name="grid"></ion-icon></span>
                            <span><ion-icon name="terminal-outline"></ion-icon></span>
                            <span><ion-icon name="logo-youtube"></ion-icon></span>
                            <span><ion-icon name="videocam-outline"></ion-icon></span>
                        </div>
                    </div>
                </div>
                <div className="bg-white md-[90%] w-[75%] h-[80%] rounded-lg bg-opacity-15 overflow-x-auto remove-scrollbar py-10 ">
                    <div className={`RootAnim flex flex-col gap-y-5 opacity-0 ${isTextShow ? 'opacity-100' : ""}`}>
                        <div className="px-4">
                            <h1 className="py-4">Kejuruteraan</h1>
                            <div className="flex flex-col gap-y-2">
                                <div className="bg-[#1e1e1e]"><div className="bg-white w-[80%] text-black text-xs py-2 px-2">80% - Lukisan Teknikal</div></div>

                                <div className="bg-[#1e1e1e]"><div className="bg-white w-[70%] text-black text-xs py-2 px-2">70% - Lukisan Perspektif</div></div>

                                <div className="bg-[#1e1e1e]"><div className="bg-white w-[50%] text-black text-xs py-2 px-2">50% - Lukisan Bangunan</div></div>

                                <div className="bg-[#1e1e1e]"><div className="bg-white w-[60%] text-black text-xs py-2 px-2">60% - AutoCAD</div></div>

                                <div className="bg-[#1e1e1e]"><div className="bg-white w-[20%] text-black text-xs py-2 px-2">20% - Pandangan tambahan</div></div>
                            </div>
                        </div>
                        <div className="px-4">
                            <h1 className="py-4">Asas Programming</h1>
                            <div className="flex flex-col gap-y-2">
                                <div className="bg-[#1e1e1e]"><div className="bg-white w-[70%] text-black text-xs py-2 px-2">70% - Java Programming</div></div>

                                <div className="bg-[#1e1e1e]"><div className="bg-white w-[85%] text-black text-xs py-2 px-2">85% - Javascript</div></div>

                                <div className="bg-[#1e1e1e]"><div className="bg-white w-[65%] text-black text-xs py-2 px-2">65% - HTML | CSS</div></div>

                                <div className="bg-[#1e1e1e]"><div className="bg-white w-[45%] text-black text-xs py-2 px-2">45% - Framework | React</div></div>

                                <div className="bg-[#1e1e1e]"><div className="bg-[#1e1e1e] w-[100%] text-white text-xs py-2 px-2">0% - SQL | Tiada pencapaian</div></div>
                            </div>
                        </div>
                        <div className="px-4">
                            <h1 className="py-4">Akademik | Aliran</h1>
                            <div className="flex flex-col gap-y-2">
                                <div className="bg-[#1e1e1e]"><div className="bg-white w-[78%] text-black text-xs py-2 px-2">78% - Matematik</div></div>

                                <div className="bg-[#1e1e1e]"><div className="bg-white w-[85%] text-black text-xs py-2 px-2">85% - Addmath</div></div>

                                <div className="bg-[#1e1e1e]"><div className="bg-white w-[95%] text-black text-xs py-2 px-2">95% - GKT</div></div>

                                <div className="bg-[#1e1e1e]"><div className="bg-white w-[50%] text-black text-xs py-2 px-2">50% - Kimia</div></div>

                                <div className="bg-[#1e1e1e]"><div className="bg-white w-[90%] text-black text-xs py-2 px-2">90% - Fizik</div></div>

                                <div className="bg-[#1e1e1e]"><div className="bg-white w-[85%] text-black text-xs py-2 px-2">85% - BM | BI</div></div>

                                <div className="bg-[#1e1e1e]"><div className="bg-white w-[35%] text-black text-xs py-2 px-2">35% - Diniah</div></div>
                            </div>
                        </div>
                        <div className="px-4">
                            <h1 className="py-4">Designing UI/UX</h1>
                            <div className="flex flex-col gap-y-2">
                                <div className="bg-[#1e1e1e]"><div className="bg-white w-[70%] text-black text-xs py-2 px-2">70% - Website</div></div>

                                <div className="bg-[#1e1e1e]"><div className="bg-white w-[40%] text-black text-xs py-2 px-2">40% - Userinterface</div></div>

                                <div className="bg-[#1e1e1e]"><div className="bg-white w-[50%] text-black text-xs py-2 px-2">50% - Color theory</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillSection;