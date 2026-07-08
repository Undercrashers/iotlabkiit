"use server";

import {
  getLeadsAndCoLeads,
  getCoordinators,
  getAllMembers,
  type TeamMember,
} from "@/data/data";

// Map TeamMember to the shape components expect
function mapMember(member: TeamMember) {
  return {
    id: member.id,
    name: member.name,
    position: member.position,
    domain: member.domain,
    year: member.year,
    email: member.email,
    linkedIn: member.linkedIn,
    instagram: member.instagram,
    github: member.github,
    avatar: member.photo ? { url: member.photo } : undefined,
  };
}

export const fetchMentorData = async () => {
  // No mentor in the provided data - return null
  return null;
};

export const fetchLeadData = async () => {
  return getLeadsAndCoLeads().map(mapMember);
};

export const fetchCordinatorData = async () => {
  return getCoordinators().map(mapMember);
};

export const fetchAllMembersData = async () => {
  return getAllMembers().map(mapMember);
};
