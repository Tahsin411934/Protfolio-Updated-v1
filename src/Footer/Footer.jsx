import useTheme from "../Hook/useTheme";



const Footer = () => {
    const { theme } = useTheme()
    return (
        <div className={`${theme === 'light' ? 'bg-blue-100' : 'bg-[#0F172A] text-gray-300'} border-t border-gray-800 m-0 h-full pb-0`}>
            <div className="lg:w-[30%] mx-auto text-center mt-10">
                <h2 className="font-semibold text-xl mb-3 ">Reach Me Out</h2>
                <hr className='-ml-0 h-[1px] border-none mb-4 bg-slate-200 mx-auto w-[100%]' />
                <div className="social-links flex items-center gap-2 ">
                    <a href="https://facebook.com/tazin.tanim.7">
                        <img src="https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white" alt="Facebook" />
                    </a>
                    <a href="https://instagram.com/tahsininsta">
                        <img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white" alt="Instagram" />
                    </a>
                    <a href="https://linkedin.com/in/abrar-fahim-af">
                        <img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white" alt="LinkedIn" />
                    </a>
                    <a href="https://medium.com/@@abrarfahimtasin">
                        <img src="https://img.shields.io/badge/Medium-12100E?logo=medium&logoColor=white" alt="Medium" />
                    </a>
                    <a href="https://app.netlify.com/teams/tahsin411934/overview">
                        <img src="https://img.shields.io/badge/Netlify-%23000000.svg?logo=netlify&logoColor=white" alt="Netlify" />
                    </a>
                </div>
            </div>

            <div className="text-lg font-normal flex items-center justify-center p-10">
                <h1 className="">© 2024 All Rights Reserved. Abrar Fahim™ is a registered trademark.</h1>
            </div>
        </div>
    );
};

export default Footer;