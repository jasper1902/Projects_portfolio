import avatar from "../assets/avatar.jpg"
const AboutMe = () => {
    return (
        <>
            <div id="about" className="max-w-[1240px] mx-auto mt-8 md:grid md:grid-cols-3 flex flex-col p-8">
                <div className="col-span-1 flex items-center justify-center">
                    <img src={avatar} alt="" className="rounded-full h-96" />
                </div>
                <div className="col-span-2 p-4">
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, quis excepturi. Excepturi aliquam atque est unde non rerum, itaque explicabo porro quos quisquam exercitationem fugit dignissimos dolores. Optio, tenetur. Velit.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-center">My skills</h2>
                        <div className="flex gap-2 justify-center items-center">
                            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" alt="" className="h-14" />
                            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" alt="" className="h-14" />
                            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" alt="" className="h-14" />
                            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg" alt="" className="h-14" />
                            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" alt="" className="h-14" />
                            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" alt="" className="h-14" />
                            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" alt="" className="h-14" />
                            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg" alt="" className="h-14" />
                            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg" alt="" className="h-14" />
                            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" alt="" className="h-14" />
                            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored-dark.svg" alt="" className="h-14" />
                            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" alt="" className="h-14" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe