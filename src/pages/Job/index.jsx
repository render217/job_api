import React, { useEffect, useState } from "react";
import { Description, Navigation } from "../../components/Job";
import { useParams } from "react-router-dom";
import { data } from "../../data/data";

const Job = () => {
  const params = useParams();
  const [jobs,setJobs] = useState(data);
  const [job,setJob] = useState(jobs.find(job => job.id === params.jobId));
 
    return (
        <>
            <div className="bg-bgMain fixed w-full h-full -z-50"></div>
            <div className="bg-bgMain ">
                <div className="container mx-auto max-w-7xl px-6 sm:px-4 bg-bgMain py-8 space-y-10">
                    <div className="text-2xl text-cblack font-Poppins">
                        <span className="font-semibold">Github</span>
                        <span className="font-light">Jobs</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="basis-1/3">
                            <Navigation job={job}/>
                        </div>
                        <div className="basis-5/6">
                            <Description job={job}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Job;
