import React from "react";
import { useParams } from "react-router-dom";

const project = [
    {
        paramName: "Oishii-Ramen",
        projectName: "Oishii Ramen",
        time: "March 2024 - April 2024",
        description: "Java-based Ramen store management game",
    },
    {
        paramName: "Minutemon",
        projectName: "Minutemon",
        time: "March 2024 - March 2024",
        description: "Time management application",
    },
    {
        paramName: "Kyoto-Adventure",
        projectName: "Kyoto Adventure",
        time: "November 2023 - December 2023",
        description: "Python-based Command line game of Kyoto",
    },
    {
        paramName: "helper",
        projectName: "helper",
        time: "September 2023 - December 2023",
        description: "Mobile application to join a virtual wait list of the emergency room",
    },

];

function ProjectDetail() {
    const { name } = useParams();
    const projectDetail = project.find((p) => p.paramName === name);

    if (!projectDetail) {
        return <h2>Project not found</h2>;
    }

    return (
        <div>
            <h2>{projectDetail.projectName}</h2>
            <p>{projectDetail.time}</p>
            <p>{projectDetail.description}</p>
        </div>
    );
}

export default ProjectDetail;
