"use server";

import axiosInstance from "@/libs/axiosInstance";
import { Event } from "@/components/events/EventsPage";

export async function fetchEvents(): Promise<Event[]> {
  try {
    const data = JSON.stringify({
      query: `query { events { id title link decription startDate endDate year type image { fileName handle height id mimeType size url width } } }`,
    });
    const response = await axiosInstance.post("", data);
    return response.data.data.events;
  } catch (error) {
    console.log(error);
    return [];
  }
}
