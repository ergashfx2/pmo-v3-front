import React from 'react';
import Table from '../../utils/table/table'
import ProjectService from '../../../services/api/projectService'
import { useState,useEffect } from 'react';
const Projects = () => {
    const [projects, setProjects] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getProjects = async () => {
            try {
                const projects = await ProjectService.getProjects()
                setProjects(projects.results.slice(0,5))
                console.log(projects.results);
                
                setLoading(false)
            } catch (e) {
                console.log('failed', e)
            }
        }
        getProjects();
    }, []);
    return (
            <>
            {loading ? (
                <div></div>
            ):(
                <Table thead_elements={['№','Loyiha nomi','Holati','Summasi','Loyiha kuratori']} tbody={
                    projects.map((project,index)=>(
                        <tr>
                        <td>{index + 1}</td>
                       <td>{project.name}</td>
                       <td>{project.status}</td>
                       <td>{project.budget}</td>
                       <td>{project.curator}</td>
                   </tr>
                    ))
}></Table>
            )}
            </>
    );
};

export default Projects;