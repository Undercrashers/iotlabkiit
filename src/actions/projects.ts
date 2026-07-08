"use server";

import axiosInstance from "@/libs/axiosInstance";
import { Project } from "@/components/project-carousel/ProjectCarousel";

export async function fetchProjects(): Promise<Project[]> {
  try {
    const data = JSON.stringify({
      query: `query { projects { addr description id link linkText name type image { fileName handle height id mimeType url width } projectStatus } }`,
    });
    const response = await axiosInstance.post("", data);
    return response.data.data.projects;
  } catch (error) {
    console.log(error);
    return [];
  }
}

import { HighlightedProject } from "@/components/highlightedProjects/HighlightedProjects";

export async function fetchHighlightedProjects(): Promise<
  HighlightedProject[]
> {
  try {
    const data = JSON.stringify({
      query: `query { highlightedProjects { id link name image { fileName handle height id locale mimeType url width size } } }`,
    });
    const response = await axiosInstance.post("", data);

    //console.log("highlighted projects", JSON.stringify(response.data));

    return response.data.data.highlightedProjects;
  } catch (error) {
    console.log(error);
    return [];
  }
}
