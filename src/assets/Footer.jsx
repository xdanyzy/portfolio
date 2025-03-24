
import "../../public/js.svg";
import "../../public/react.svg";
import "../../public/vite.svg";
import "../../public/vs-code.svg";
import "../../public/tailwind.svg";

function Footer(){
    return (
        <>
            <div className="flex justify-center items-center h-screen gap-y-5 flex-col">
                <h1>Guna dengan :</h1>
                <div className="flex justify-center gap-5">
                    <img className="w-[10%]" src="react.svg"></img>
                    <img className="w-[10%]" src="vite.svg"></img>
                    <img className="w-[10%]" src="tailwind.svg"></img>
                    <img className="w-[10%]" src="js.svg"></img>
                    <img className="w-[10%]" src="vs-code.svg"></img>
                </div>
            </div>
        </>
    )
}

export default Footer;