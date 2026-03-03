/**
 * Single source of truth for HR4EU services.
 * Edit this file to update service content across the site.
 */

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string; // icon name for UI
  roles: string[];
  engagementModel: {
    euLead: string;
    specialists: string;
  };
  whyHr4eu: string[];
}

export const services: ServiceItem[] = [
  {
    slug: "it",
    title: "IT & Engineering",
    shortDescription:
      "Software development, DevOps, and technical teams built for European product and engineering needs.",
    description:
      "We assemble dedicated IT and engineering teams—from full-stack developers to DevOps and QA—aligned with your stack and processes. One EU-facing tech lead, backed by 3–5 Armenian specialists.",
    icon: "code",
    roles: [
      "Full-stack developers (React, Node, Python, .NET)",
      "Frontend / backend specialists",
      "DevOps & cloud engineers",
      "QA & test automation",
      "Technical project leads",
      "Solution architects",
      "Mobile developers",
      "Data engineers",
    ],
    engagementModel: {
      euLead: "1 EU-facing technical lead or account manager",
      specialists: "3–5 Armenia-based developers/engineers",
    },
    whyHr4eu: [
      "Same timezone overlap with EU for standups and collaboration.",
      "Strong engineering culture and modern tech stacks.",
      "Lower cost per developer without compromising quality.",
      "Scalable team size as your product grows.",
    ],
  },
  {
    slug: "analytics",
    title: "Data & Analytics",
    shortDescription:
      "Data analysts, BI specialists, and analytics teams to turn data into decisions.",
    description:
      "From reporting and dashboards to advanced analytics and data science, we provide a dedicated analytics team with one EU point of contact and 3–5 Armenia-based specialists.",
    icon: "chart",
    roles: [
      "Data analysts",
      "BI developers (Power BI, Tableau, Looker)",
      "Data engineers",
      "Analytics translators",
      "Reporting specialists",
      "Data scientists",
      "ML engineers",
      "ETL / data pipeline experts",
    ],
    engagementModel: {
      euLead: "1 EU-facing analytics lead or stakeholder liaison",
      specialists: "3–5 Armenia-based analysts and data specialists",
    },
    whyHr4eu: [
      "Clear ownership: one person in EU for requirements and review.",
      "Armenian talent pool strong in quantitative and technical analytics.",
      "Predictable cost for a full analytics pod.",
      "Flexible engagement: reporting, ad-hoc, or embedded in product.",
    ],
  },
  {
    slug: "accounting",
    title: "Accounting & Finance Ops",
    shortDescription:
      "Finance, accounting, and back-office teams that integrate with your EU operations.",
    description:
      "We build finance and accounting teams—bookkeeping, reporting, reconciliations, and finance ops—with an EU-facing lead and an Armenia-based delivery team that fits your processes.",
    icon: "calculator",
    roles: [
      "Accountants (AR/AP, GL, reporting)",
      "Finance analysts",
      "Bookkeepers",
      "Payroll specialists",
      "Financial controllers",
      "Tax and compliance support",
      "Management reporting",
      "Finance ops and process support",
    ],
    engagementModel: {
      euLead: "1 EU-facing finance lead or controller liaison",
      specialists: "3–5 Armenia-based accountants and finance specialists",
    },
    whyHr4eu: [
      "One contact for EU stakeholders; team delivers behind the scenes.",
      "Experience with EU frameworks and reporting standards.",
      "Cost-effective scaling of finance and accounting capacity.",
      "Stable, long-term team with clear escalation paths.",
    ],
  },
  {
    slug: "marketing",
    title: "Marketing & Growth",
    shortDescription:
      "Marketing, growth, and content teams to support European campaigns and demand generation.",
    description:
      "We provide marketing and growth talent—content, performance, brand, and operations—with one EU-facing marketing lead and 3–5 Armenia-based specialists executing campaigns and assets.",
    icon: "megaphone",
    roles: [
      "Content writers and copywriters",
      "Performance marketing specialists (paid, SEO, social)",
      "Marketing operations",
      "Brand and design support",
      "Growth analysts",
      "Email and lifecycle marketing",
      "Campaign managers",
      "Community and social media managers",
    ],
    engagementModel: {
      euLead: "1 EU-facing marketing lead or growth lead",
      specialists: "3–5 Armenia-based marketing and content specialists",
    },
    whyHr4eu: [
      "Single EU contact for strategy and approvals; team executes at scale.",
      "English-first talent for EU and global campaigns.",
      "Lower cost per FTE for content and performance roles.",
      "Easy to scale up or down with campaign cycles.",
    ],
  },
  {
    slug: "administrative",
    title: "Administrative & Logistics",
    shortDescription:
      "Administrative support, logistics coordination, and back-office operations for your EU business.",
    description:
      "We provide administrative and logistics teams—order management, supply chain coordination, documentation, and administrative support—with one EU-facing lead and 3–5 Armenia-based specialists who integrate with your processes.",
    icon: "clipboard",
    roles: [
      "Logistics coordinators",
      "Supply chain specialists",
      "Order management",
      "Administrative assistants",
      "Documentation and filing",
      "Inventory and warehouse support",
      "Procurement support",
      "Vendor coordination",
    ],
    engagementModel: {
      euLead: "1 EU-facing admin or logistics lead",
      specialists: "3–5 Armenia-based administrative and logistics specialists",
    },
    whyHr4eu: [
      "One EU point of contact for coordination and reporting.",
      "Cost-effective scaling of administrative and logistics capacity.",
      "Support for EU workflows and documentation standards.",
      "Flexible team size for seasonal or project-based needs.",
    ],
  },
  {
    slug: "operations",
    title: "AI agents and AI automation",
    shortDescription:
      "AI agents, automation workflows, and intelligent systems to streamline your EU operations.",
    description:
      "We design and implement AI agents and automation—chatbots, process automation, and intelligent workflows—with one EU-facing lead and 3–5 Armenia-based specialists who integrate with your tools and SLAs.",
    icon: "cog",
    roles: [
      "AI agent design and implementation",
      "Process automation and workflow orchestration",
      "Conversational AI and chatbots",
      "RPA and integration specialists",
      "LLM and prompt engineering",
      "Documentation and knowledge management",
      "Internal tooling and process support",
    ],
    engagementModel: {
      euLead: "1 EU-facing AI/automation lead",
      specialists: "3–5 Armenia-based AI and automation specialists",
    },
    whyHr4eu: [
      "One EU point of contact for requirements and delivery.",
      "Armenia-based team for cost-effective AI and automation build.",
      "Scalable automation aligned with your EU workflows.",
      "Stable team with clear processes and quality standards.",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
