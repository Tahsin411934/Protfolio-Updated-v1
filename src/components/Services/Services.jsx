import { useQuery } from "@tanstack/react-query";
import useTheme from "../../Hook/useTheme";
import axios from "axios";
import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo({ projects }) {
  return (
    <div className="max-w-6xl bg-transparent mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

const Services = () => {
  const { theme } = useTheme();
  const { data, isLoading, error } = useQuery({
    queryKey: ['Service'],
    queryFn: async () => {
      const res = await axios.get('Services.json');
      return res.data;
    }
  });

  // If data is not yet loaded, show a loading indicator
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If there was an error, show an error message
  if (error) {
    return <div>Error loading services</div>;
  }

  // Ensure `data` is defined before using it
  const projects = data || [];

  return (
    <div id="services" className={`font-inter ${theme === 'light' ? 'bg-gray-200' : 'bg-[#070d1b] text-gray-300'} m-0 pb-10 h-full`}>
      <div className="text-3xl font-bold flex items-center justify-center p-10">
        <h1>My Services</h1>
      </div>
      <CardHoverEffectDemo projects={projects} />
    </div>
  );
};

export default Services;
