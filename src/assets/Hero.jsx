
import { useEffect, useState } from "react";
import "../App.css"

function Hero(){
    const [isTextShow, ScrollingTextVisible] = useState(false);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            window.scrollY > 400 ? ScrollingTextVisible(true) : ScrollingTextVisible(false);
        });
    }, []);
    return (
        <>
            <div className={`text-center flex flex-col items-center justify-center fixed bottom-0 w-full RootAnim ${isTextShow ? 'opacity-0' : 'opacity-1'}`}>
                    <h1 className="text-sm font-[med]">scroll down</h1>
                    <span><ion-icon name="chevron-down-outline"></ion-icon></span>
            </div>
            <section className="flex flex-col justify-center items-center h-screen">
                <div className="stblob"></div>
                <div>
                    <h1 className="text-5xl">" Engineer Student's are cooked !!! "</h1>
                    <p className="my-5">"Mempelajari kejuruteraan dapat menghilangkan stress"<br/>Percaya? tak apalah.<br />Ini ialah portfolio pertama saya selama saya belajar kejuruteraan.</p>
                </div>
                <div className="text-4xl flex flex-row gap-5 absolute bottom-[10%] left-10">
                    <div className="cursor-pointer">
                        <span><ion-icon name="logo-github"></ion-icon></span>
                    </div>
                    <div className="cursor-pointer">
                        <span><ion-icon name="logo-google"></ion-icon></span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;