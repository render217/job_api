import React from "react";
import { Link } from "react-router-dom";

export const Navigation = ({job}) => {
    return (
        <div className="font-Poppins text-sm text-cdeepblue font-medium ">
            <Link to="..">
                <div className="flex items-center gap-3 text-cblue">
                    <i className="fa-solid fa-arrow-left-long"></i>
                    <p>Back to search</p>
                </div>
            </Link>
            <h4 className="my-3 font-bold uppercase text-cgray">Location </h4>
            <div>
              <p className="max-w-sm">Please email a copy of your resume and online portfolio to <span className="text-cblue">{job?.author}</span> </p>
            </div>
        </div>
    );
};
