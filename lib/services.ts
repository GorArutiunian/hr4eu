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
      "Poskytujeme kompletní pokrytí softwarového vývoje a inženýringu pro evropské firmy. Nabízíme týmy vývojářů, DevOps specialistů a technických expertů, kteří pracují flexibilně z Arménie, Gruzie nebo Ukrajiny, zatímco klient má vždy jedno kontaktní místo v EU. Součástí naší služby je také průběžná podpora a údržba, aby vaše řešení fungovalo spolehlivě i po spuštění.",
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
      "Nabízíme datové analytiky, BI specialisty a kompletní analytické týmy, které podporují rozhodování na základě dat. Zajišťujeme vše od pravidelného reportingu a tvorby dashboardů až po pokročilou analytiku a data science. Každý klient má k dispozici jednoho kontaktního manažera přímo v Praze, zatímco zkušený tým specialistů pracuje flexibilně z Arménie, Gruzie nebo Ukrajiny, což umožňuje vysokou efektivitu a nižší náklady o 40–60 %.",
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
      "Významných výsledků dosahujeme také v oblasti outsourcingu účetních a finančních profesí. V našem pražském týmu manažerů působí zkušení profesionální účetní, kteří garantují vysokou úroveň poskytovaných služeb.",
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
      "Dokážeme podpořit růst Vaší společnosti díky profesionálnímu týmu marketingových a SMM specialistů za velmi konkurenceschopné ceny. Vysokou kvalitu poskytovaných služeb přitom garantuje zkušený a dobře zaškolený tým našich manažerů v Praze.",
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
      "Naše služba zahrnuje kompletní zajištění administrativních činností, které nevyžadují stálou fyzickou přítomnost zaměstnance. Patří sem například zadávání dat do systémů, zákaznický servis, příprava a zpracování cenových nabídek a mnoho dalších administrativních a podpůrných procesů.",
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
      "Navrhujeme a implementujeme AI agenty a automatizaci – chatboty, automatizaci procesů a inteligentní workflow. Každý klient má k dispozici jednoho kontaktního manažera přímo v EU, zatímco zkušený tým specialistů pracuje flexibilně z Arménie, Gruzie nebo Ukrajiny. Součástí naší služby je také průběžná podpora a údržba, aby vaše automatizovaná řešení fungovala spolehlivě i po spuštění.",
    icon: "cog",
    roles: [
      "AI agent design and implementation",
      "Process automation and workflow orchestration",
      "Conversational AI and chatbots",
      "RPA and integration specialists",
      "LLM and prompt engineering",
      "Documentation and knowledge management",
      "Internal tooling and process support",
      "AI workflow testing and quality assurance",
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
