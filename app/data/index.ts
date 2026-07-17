// Single import point for all portfolio data.
// Components should import from "@/app/data" not from individual files.

export { jobs } from "./experience";
export { projects } from "./projects";
export type { Project, ProjectTag } from "./projects";
export { recognitions } from "./recognition";
export { cards, stats, SKILLS } from "./about";
export { publications } from "./publications";
export type { Publication } from "./publications";
export { certifications } from "./certifications";
export type { Certification } from "./certifications";
