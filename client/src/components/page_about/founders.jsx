import React, { useEffect, useState } from "react";
import '../../styles/loadingAnimation.css'

function Founder() {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch developer data from the API
    async function fetchDevelopers() {
      try {
        const response = await fetch("http://kodevana.com:8002/admin/get-all-dev");
        if (response.ok) {
          const data = await response.json();
          setDevelopers(data);
        }
        setLoading(false);
      } catch (error) {
        // console.error("Error fetching developers:", error);
        setLoading(false);
      }
    }

    fetchDevelopers();
  }, []);


  return (
    <div className="mx-5 xs:mx-7 sm:mx-10 lg:mx-16 xl:mx-20 flex flex-wrap gap-7 justify-center section-gap">

      {loading ? (
        <div className="loading-container">
          <div className="loading-dots">
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
          </div>
        </div>
      ) : (

        developers.map((founder, index) => (
          <div key={index} className="p-7 w-4/5 xs:w-2/3 sm:w-2/5 md:w-1/3 lg:w-1/4 xl:w-2/12 bg-slate-200 shadow-2xl rounded-md">
            <img
              className="w-fit h-fit overflow-hidden"
              src={founder.profile_picture.url}
              alt={founder.FullName}
            />
            <h3 className="text-h3">{founder.FullName}</h3>
            <p className="text-para">{founder.roles}</p>
          </div>
        ))
      )}


    </div>
  );
}

export default Founder;