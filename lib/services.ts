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
    slug: "operations",
    title: "Operations & Support",
    shortDescription:
      "Operations, customer support, and shared services teams aligned with your EU workflows.",
    description:
      "We build operations and support teams—customer success, support, internal ops, and shared services—with one EU-facing lead and 3–5 Armenia-based specialists who integrate with your tools and SLAs.",
    icon: "cog",
    roles: [
      "Customer support specialists",
      "Customer success associates",
      "Operations coordinators",
      "Shared services (admin, HR ops, facilities support)",
      "Order and process management",
      "Vendor and procurement support",
      "Documentation and knowledge management",
      "Internal tooling and process support",
    ],
    engagementModel: {
      euLead: "1 EU-facing operations lead or support manager",
      specialists: "3–5 Armenia-based operations and support specialists",
    },
    whyHr4eu: [
      "One EU point of contact for escalations and reporting.",
      "Armenia-based team can cover extended hours if needed.",
      "Cost-effective way to scale support and ops capacity.",
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
