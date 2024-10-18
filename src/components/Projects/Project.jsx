import { useEffect, useRef, useState } from "react";

const Project = ({ project }) => {
  const imageRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const imageElement = imageRef.current;

    if (imageElement) {
      if (isHovered) {
        // Start scrolling the image when hovered
        imageElement.style.transition = "transform 6s linear";
        imageElement.style.transform = "translateY(-50%)"; // Adjust to desired scroll amount
      } else {
        // Reset the position smoothly when not hovered
        imageElement.style.transition = "transform 0s";
        imageElement.style.transform = "translateY(0)";
      }
    }
  }, [isHovered]);

  return (
    <div className="pb-10">
      <div
        data-aos="fade-right"
        className="container mx-auto flex flex-col max-w-xl overflow-hidden rounded-lg shadow-md border border-gray-700 bg-transparent"
      >
        <div
          className="w-full h-80 overflow-hidden border-b border-gray-300 rounded-t-lg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div ref={imageRef} className="h-[580%] w-full">
            <img
              src={project.image}
              alt="Zoomable"
              className="w-full h-full "
            />
          </div>
        </div>
        <div className="bg-[#144182] p-4">
          <div className="text-3xl font-semibold">
            <h1>{project.projectName}</h1>
          </div>
          <div className="text-slate-300">
            <h2>{project.details}</h2>
          </div>

          <div className="text-[#2EDEF5] pt-2 font-bold text-lg">
            <h2>Used Technologies : </h2>
          </div>
          <div className="w-full flex flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2 rounded-md p-2">
                <img src={skill} alt={`Skill ${index + 1}`} className="w-8 h-8" />
              </div>
            ))}
          </div>
          <div className="w-full mt-2 flex justify-around text-[#4AA9C5]">
            <a className="underline hover:text-[#ffffff]" href={project.liveLink}>
              Live
            </a>
            <a
              className="underline hover:text-[#ffffff] "
              href={project.clientSite}
            >
              Client
            </a>
            <a
              className="underline hover:text-[#ffffff]"
              href={project.serverSiteLink}
            >
              Server
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
