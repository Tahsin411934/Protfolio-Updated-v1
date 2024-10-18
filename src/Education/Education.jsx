import useTheme from "../Hook/useTheme";


const Education = () => {
    const { theme } = useTheme()
    return (
        <div className={`font-inter  ${theme === 'light' ? 'bg-blue-100' : ' text-gray-300'} container mx-auto   pt-20 h-full`}>
            <div className="text-3xl font-bold flex items-center justify-center p-10">
                <h1 className="">Education</h1>
            </div>

            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div data-aos="fade-right" className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">2021-2025</time>
                        <div className="text-lg font-black"> Bachelor of Science in Computer Science and Engineering</div>
                        <p>Premier University, Chittagong</p>
                        <div className="text-lg font-black">Result: 3.40 <span className="font-normal text-xs">(out of 4.00)</span></div>

                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div data-aos="fade-left" className="timeline-end mb-10">
                        <time className="font-mono italic">2019-2021</time>
                        <div className="text-lg font-black">Higher Secondary School Certificate</div>
                        <p>Chattogram Govt. Model School & College</p>
                        <div className="text-lg font-black">Result: 4.00 <span className="font-normal text-xs">(out of 5.00)</span></div>
                    </div>
                    <hr />
                </li>


                <li>
                    <hr />
                    <div className="timeline-middle ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div data-aos="fade-right" className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">2019</time>
                        <div className="text-lg font-black">Secondary School Certificate</div>
                        <p>Chakaria Korak Biddyapith</p>
                        <div className="text-lg font-black">Result: 4.89 <span className="font-normal text-xs">(out of 5.00)</span></div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Education;