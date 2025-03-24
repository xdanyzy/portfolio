import { useEffect, useState } from "react";

function AboutMe(){
    
    const [isslide, setSlide] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            window.scrollY > 600 ? setSlide(true) : null;
        })
    }, []);

    return (
        <>
            <div className="flex justify-center items-center h-screen flex-col md:flex-row gap-10">
                <div>
                    <h1 className={`md:border-r-white md:border-r-8 px-3 text-center text-6xl RootAnim useSlide ${isslide ? 'setZero' : ''}`}>ABOUT ME</h1>
                </div>
                <div>
                    <p className={`RootAnim useSlide md:text-xl ${isslide ? 'setZero' : ''}`}>Hai disana! Selama anda berada kat sini anda boleh panggil saya "dany" atau "kim". Saya seorang pelajar Engineer sekolah Maahad. Saya berminat dalam bidang ni kerana ia sesuai dengan kriteria saya. Kepakaran saya dalam bidang ini sudah lama kerana dahulunya saya suka melukis rumah. itu sahaja...</p>
                </div>
            </div>
        </>
    )
}

export default AboutMe;