// src/data/profile.ts
export const profile = {
  name: "Thomas François",
  title: "SRE / System & Network Administrator",
  location: "Bruxelles • Montréal",
  avatar: new URL("../assets/1713886619006.jpeg", import.meta.url).href,
  links: {
    email: "mailto:contact.cv@thomasfrancois.net",
    github: "https://github.com/AlchemiistCreative",
    linkedin: "https://www.linkedin.com/in/thomasfrancois-sv"
  },
  summary:
  "Âgé de 27 ans et actif dans l’ICT, je suis un administrateur système et réseau passionné, motivé par la résolution de problèmes et l’acquisition continue de nouvelles compétences. J’ai un intérêt marqué pour l’automatisation (CI/CD, Ansible, Chef, Terraform, Bash, PowerShell), le tooling et la conception d’architectures résilientes.",
  skills: [
    "Linux (RHEL Based)", "Chaos Engineering", "Windows Server", "Active Directory",
    "Ansible", "Terraform", "GCP", "CI/CD (Jenkins, Gitlab)",
    "Observabilité (Grafana, Prometheus)", "RabbitMQ",
    "Architecture système & réseau", "Automatisation", "Scripting (Bash, PowerShell)", "Jira", "Cisco", "Vyos/FRR"
  ],
  languages: [
    { name: "Français", level: "C2 (natif)" },
    { name: "Anglais", level: "B2" }
  ],
  experience: [
    {
      role: "System & Network Administrator",
      company: "DSTNY — Zaventem, Belgique",
      period: "Mai 2025 — présent",
      description:
        "Polyvalent et autonome, j'interviens sur un large périmètre technique, combinant support N2/N3, intégration de solutions et MCO d’environnements critiques (web, mail, télécom).",
      bullets: [
        "Maintien en conditions opérationnelles d’un environnement Private Cloud (MPLS L3VPN, VRF, QinQ, Housing et Virtualisation)",
        "Analyse et automatisation de processus opérationnels (Ansible, Scripting Bash & Powershell)",
        "Amélioration du monitoring en place (Zabbix)", 
        "Gestion des serveurs web et mail (mutualisés / dédiés)",
        "Support technique N2/N3"
      ]
    },
    {
      role: "System Administrator",
      company: "Technicolor Creative Studio — Montréal, Canada",
      period: "Sep. 2022 — Oct. 2024",
      description:
        "Pilotage d’un projet d’automatisation sur Jira à l’échelle du groupe : architecture, implémentation et run.",
      bullets: [
        "Automatisation du redémarrage des postes via Intel AMT, IPMI et iDRAC",
        "Automatisation de l’activation/désactivation de services Linux",
        "Système de gestion des utilisateurs avec workflows d’approbation pour certains groupes",
        "Architecture monolithe puis micro‑services par contrainte de standardisation (Node.js, RabbitMQ, Redis, Docker Swarm)",
        "Mise en place de la stack de supervision Grafana/Prometheus",
        "CI/CD Jenkins, déploiements via Ansible",
        "Dashboard pour bypasser Jira en tant que front-end",
        "Administration Linux (support & maintenance — CentOS / Rocky Linux)",
      ]
    },
    {
      role: "IT Support Engineer",
      company: "Ulysse Group by DSTNY — Mons, Belgique",
      period: "Jan. 2020 — Juin 2022",
      description:
        "Première expérience dans un environnement de production, où j’ai assuré un support technique N1/N2 dans le respect des bonnes pratiques ITIL, tout en contribuant au maintien en conditions opérationnelles de l’infrastructure.",
      bullets: [
        "MCO des datacenters",
        "Gestion des serveurs web et mail (mutualisés / dédiés)",
        "Support technique N1/N2",
        "Administration système et réseau (équipements télécoms, Linux & Windows)"
      ]
    }
  ],
  projects: [
      {
      name: "EVE-NG MPLS L3VPN LAB - Ansible",
      url: "https://github.com/AlchemiistCreative/mpls-l3vpn-ansible-lab",
      tags: ["Network Architecture", "Vyos/FRR", "Ansible"],
      description: "Automatisation du déploiment d'un lab MPLS L3VPN Multi-tenant, utilisé comme base pour faire des labs systèmes"
    },
    {
      name: "EthicalInsight — AD Centralized Audit",
      url: "https://github.com/AlchemiistCreative/EthicalInsight",
      tags: ["Active Directory", "Audit", "Node.js", "Backend"],
      description: "Audit centralisé des comptes/ACL AD, rapports et alertes — orienté conformité/sécurité."
    },
    {
      name: "Hyper‑V Web Manager",
      url: "https://github.com/AlchemiistCreative/hyperv-web-manager",
      tags: ["Virtualisation", "Hyper‑V", "PowerShell", "Node.js"],
      description: "Gestion web de VMs Hyper‑V (inventaire, actions) avec backend PowerShell/Node."
    }
  ]
};
