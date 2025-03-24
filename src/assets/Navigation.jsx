function Nav(){
    return (
        <>
            <div className="fixed w-full flex justify-center items-center backdrop-blur-sm p-3 z-50">
                <div className="flex lg:gap-15 gap-9">
                    <div className="flex justify-center items-center gap-1">
                      <span className="lg:flex hidden justify-center items-center"><ion-icon name="planet"></ion-icon></span><a href="#home">Home</a>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                      <span className="lg:flex hidden justify-center items-center"><ion-icon name="person"></ion-icon></span><a href="#home">Media</a>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                      <span className="lg:flex hidden justify-center items-center"><ion-icon name="folder"></ion-icon></span><a href="#home">Project</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav;