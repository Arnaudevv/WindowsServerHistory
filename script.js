// ============================================================
//  DATOS: todas las versiones de Windows Server
// ============================================================

const versions = [
  {
    id: "nt",
    name: "NT Server",
    nameFull: "Windows NT Server",
    subtitle: "3.1 / 3.5 / 4.0",
    year: "1993–1996",
    tag: "Fundación",
    tagColor: "tag-gray",
    summary: "Primer sistema operativo de servidor de Microsoft con arquitectura propia y moderna. NT 3.1 fue la primera apuesta real en el mercado corporativo, con NTFS y un modelo de seguridad robusto. NT 4.0 adoptó la interfaz de Windows 95 e integró IIS.",
    keyFeatures: [
      "Sistema de archivos NTFS",
      "Gestión básica de usuarios y grupos",
      "Soporte multiprocesador",
      "Servidor de archivos e impresión",
      "Internet Information Server (IIS) — en NT 4.0"
    ],
    newTech: [
      "Arquitectura de 32 bits (NT 3.1)",
      "NTFS con permisos por fichero/carpeta",
      "IIS 2.0 para hosting web (NT 4.0)",
      "Interfaz gráfica de Windows 95 (NT 4.0)"
    ],
    improvements: [
      "Primera plataforma de servidor de Microsoft con arquitectura propia y moderna",
      "NTFS reemplaza FAT: mayor seguridad y tolerancia a fallos",
      "NT 4.0 integra IIS, reconociendo la importancia de Internet en las empresas",
      "La interfaz gráfica de NT 4.0 facilita enormemente su adopción por parte de administradores"
    ]
  },
  {
    id: "2000",
    name: "Server 2000",
    nameFull: "Windows 2000 Server",
    subtitle: "",
    year: "2000",
    tag: "Revolución",
    tagColor: "tag-blue",
    summary: "Windows 2000 Server transformó la forma de gestionar infraestructuras Windows. Su novedad más importante fue Active Directory, que permitía centralizar la gestión de usuarios, equipos, permisos y políticas de seguridad en toda la organización desde un punto único.",
    keyFeatures: [
      "Active Directory como servicio de directorio",
      "Group Policy para configuración centralizada",
      "Soporte completo TCP/IP y DNS",
      "Discos dinámicos y gestión avanzada de almacenamiento",
      "Cifrado de archivos con EFS"
    ],
    newTech: [
      "Active Directory (AD)",
      "Group Policy Objects (GPO)",
      "DNS dinámico integrado",
      "Kerberos como protocolo de autenticación",
      "EFS (Encrypted File System)"
    ],
    improvements: [
      "Active Directory revoluciona la administración de dominios grandes",
      "Las GPO permiten aplicar configuraciones a miles de equipos de forma automática",
      "Kerberos sustituye a NTLM para una autenticación más segura",
      "Gestión de almacenamiento mucho más flexible con discos dinámicos"
    ]
  },
  {
    id: "2003",
    name: "Server 2003",
    nameFull: "Windows Server 2003",
    subtitle: "",
    year: "2003",
    tag: "Consolidación",
    tagColor: "tag-green",
    summary: "Consolidación muy sólida de todo lo introducido con Windows 2000. Basado en el núcleo de Windows XP, mejoró el rendimiento, la seguridad y la facilidad de administración. Introdujo formalmente los roles de servidor para reducir componentes innecesarios.",
    keyFeatures: [
      "Roles de servidor configurables",
      "IIS 6.0 con modelo de proceso aislado",
      "Shadow Copy para copias de seguridad",
      "Mejoras en Active Directory (GPO, replicación)",
      "Compatibilidad x64 en ediciones especiales"
    ],
    newTech: [
      "Roles de servidor dedicados",
      "Shadow Copy (VSS)",
      "IIS 6.0 con application pools",
      "Mejoras en replicación de AD"
    ],
    improvements: [
      "La gestión por roles reduce los componentes innecesarios y mejora la seguridad",
      "Shadow Copy permite recuperar versiones anteriores de archivos sin restauración completa",
      "IIS 6.0 es mucho más robusto: los fallos de aplicación ya no tumban el servidor web",
      "La edición R2 (2005) añade mejor soporte para sucursales y entornos Unix/Linux"
    ]
  },
  {
    id: "2008",
    name: "Server 2008",
    nameFull: "Windows Server 2008",
    subtitle: "",
    year: "2008",
    tag: "Virtualización",
    tagColor: "tag-indigo",
    summary: "Marcó un antes y un después con la incorporación de Hyper-V, el hipervisor nativo de Microsoft. Permitió crear máquinas virtuales directamente desde el sistema operativo, abriendo la virtualización a gran escala. Server Core redujo drásticamente la superficie de ataque.",
    keyFeatures: [
      "Hyper-V para virtualización nativa",
      "Server Core (instalación mínima sin GUI)",
      "Mejoras en Active Directory (AD LDS, AD FS)",
      "IPv6 completo",
      "Windows PowerShell 1.0 integrado"
    ],
    newTech: [
      "Hyper-V (hipervisor tipo-1)",
      "Server Core (sin interfaz gráfica)",
      "AD Federation Services (AD FS)",
      "Read-Only Domain Controller (RODC)",
      "Network Access Protection (NAP)"
    ],
    improvements: [
      "Hyper-V elimina la necesidad de software de virtualización de terceros",
      "Server Core reduce drásticamente la superficie de ataque al eliminar componentes innecesarios",
      "RODC permite instalar controladores de dominio en sucursales con menor riesgo de seguridad",
      "IPv6 completo prepara la infraestructura para el futuro de las redes"
    ]
  },
  {
    id: "2008r2",
    name: "Server 2008 R2",
    nameFull: "Windows Server 2008 R2",
    subtitle: "",
    year: "2009",
    tag: "Alta disponibilidad",
    tagColor: "tag-indigo",
    summary: "Primera versión de Windows Server disponible exclusivamente en 64 bits. Se añadió soporte para Live Migration en Hyper-V, permitiendo mover máquinas virtuales en funcionamiento entre servidores físicos sin interrupción de servicio. PowerShell 2.0 consolidó la administración por scripts.",
    keyFeatures: [
      "Solo 64 bits (abandona x86)",
      "Hyper-V con Live Migration",
      "PowerShell 2.0 con módulos de roles",
      "Direct Access para VPN sin cliente",
      "BranchCache para optimización WAN"
    ],
    newTech: [
      "Live Migration (Hyper-V)",
      "DirectAccess (acceso remoto sin VPN)",
      "BranchCache",
      "PowerShell 2.0 remoting",
      "AppLocker para control de aplicaciones"
    ],
    improvements: [
      "Primera versión 100% de 64 bits: más RAM, mejor rendimiento con hardware moderno",
      "Live Migration es clave para alta disponibilidad: no hay downtime al mover VMs",
      "DirectAccess simplifica el acceso remoto seguro sin configurar VPN cliente",
      "PowerShell 2.0 permite administrar múltiples servidores remotos con un solo script"
    ]
  },
  {
    id: "2012",
    name: "Server 2012",
    nameFull: "Windows Server 2012",
    subtitle: "",
    year: "2012",
    tag: "Cloud-ready",
    tagColor: "tag-cyan",
    summary: "La versión en que Microsoft apostó claramente por el cloud computing. Diseñado para integrarse con Azure y facilitar escenarios de nube híbrida. Hyper-V recibió mejoras muy importantes y el almacenamiento se modernizó con Storage Spaces. El Server Manager fue rediseñado para gestionar varios servidores.",
    keyFeatures: [
      "Hyper-V 3.0 con hasta 32 vCPU y 1 TB RAM por VM",
      "Storage Spaces (pools de almacenamiento virtuales)",
      "Server Manager multi-servidor",
      "ReFS (sistema de archivos resiliente)",
      "SMB 3.0 para almacenamiento de alto rendimiento"
    ],
    newTech: [
      "Storage Spaces",
      "ReFS (Resilient File System)",
      "SMB 3.0 con RDMA",
      "Réplica de Hyper-V",
      "Hyper-V Network Virtualization"
    ],
    improvements: [
      "Storage Spaces elimina la necesidad de costosos arrays RAID de hardware",
      "ReFS introduce mayor tolerancia a fallos que NTFS para grandes volúmenes",
      "SMB 3.0 permite usar almacenamiento compartido en red como si fuera local, incluso para VMs",
      "La gestión multi-servidor desde el Server Manager multiplica la productividad del administrador"
    ]
  },
  {
    id: "2012r2",
    name: "Server 2012 R2",
    nameFull: "Windows Server 2012 R2",
    subtitle: "",
    year: "2013",
    tag: "Teletrabajo",
    tagColor: "tag-cyan",
    summary: "Perfeccionó las características de su predecesor con mejoras en virtualización, almacenamiento y acceso remoto. Remote Desktop Services y DirectAccess fueron optimizados para el teletrabajo. La integración con Azure se reforzó con herramientas que facilitaban los escenarios híbridos.",
    keyFeatures: [
      "Hyper-V con deduplicación en volúmenes en vivo",
      "Remote Desktop Services mejorado",
      "DirectAccess más sencillo de configurar",
      "Work Folders para sincronización de archivos",
      "Mejoras en Active Directory para escenarios híbridos"
    ],
    newTech: [
      "Work Folders (sincronización sin SharePoint)",
      "Deduplicación en tiempo real",
      "Workplace Join para BYOD",
      "Automatic VM activation en entornos virtuales"
    ],
    improvements: [
      "La deduplicación en vivo mejora el aprovechamiento del almacenamiento sin detener el servicio",
      "Work Folders ofrece sincronización de archivos corporativos sin depender de SharePoint",
      "Workplace Join facilita la incorporación de dispositivos personales (BYOD) al dominio corporativo",
      "La integración con Azure mejora para escenarios híbridos que empezaban a ser demandados"
    ]
  },
  {
    id: "2016",
    name: "Server 2016",
    nameFull: "Windows Server 2016",
    subtitle: "",
    year: "2016",
    tag: "Contenedores",
    tagColor: "tag-orange",
    summary: "Introdujo dos novedades que marcarían el futuro del producto: los contenedores Windows y Nano Server. Los contenedores, compatibles con Docker, permiten ejecutar aplicaciones en entornos aislados sin la sobrecarga de una VM completa. Las Shielded VMs protegen frente a accesos no autorizados incluso por administradores del hipervisor.",
    keyFeatures: [
      "Contenedores Windows (Docker compatible)",
      "Nano Server (sistema mínimo para cloud)",
      "Shielded VMs (VMs cifradas y blindadas)",
      "Windows Defender integrado nativamente",
      "Software Defined Networking (SDN) mejorado"
    ],
    newTech: [
      "Contenedores Windows y Docker",
      "Nano Server",
      "Shielded Virtual Machines",
      "Host Guardian Service",
      "Storage Spaces Direct (S2D)"
    ],
    improvements: [
      "Los contenedores permiten desplegar aplicaciones de forma más ágil y eficiente que las VMs",
      "Nano Server reduce drásticamente la huella del SO para cargas cloud-native",
      "Shielded VMs protegen datos sensibles incluso frente a administradores malintencionados del host",
      "Storage Spaces Direct permite crear clústeres de almacenamiento de alto rendimiento sin hardware especializado"
    ]
  },
  {
    id: "2019",
    name: "Server 2019",
    nameFull: "Windows Server 2019",
    subtitle: "",
    year: "2018",
    tag: "Híbrido Azure",
    tagColor: "tag-teal",
    summary: "Se centró en tres grandes áreas: integración con Azure, contenedores Linux y seguridad avanzada. Por primera vez se permitió ejecutar contenedores Linux directamente sobre Hyper-V. Windows Admin Center ofreció una consola web moderna y System Insights incorporó aprendizaje automático para predicciones locales.",
    keyFeatures: [
      "Contenedores Linux sobre Hyper-V",
      "Azure Network Adapter y Azure File Sync",
      "Windows Admin Center (gestión web)",
      "Windows Defender ATP mejorado",
      "Storage Migration Service"
    ],
    newTech: [
      "Contenedores Linux en Windows",
      "Windows Admin Center",
      "Storage Migration Service",
      "Azure Hybrid Benefit",
      "System Insights (IA local para predicciones)"
    ],
    improvements: [
      "Por primera vez, Windows Server permite ejecutar contenedores Linux de forma nativa",
      "Windows Admin Center ofrece una consola web moderna para gestionar servidores sin instalar herramientas",
      "Storage Migration Service facilita la migración de datos desde servidores antiguos de forma automatizada",
      "System Insights usa aprendizaje automático para predecir fallos de almacenamiento y recursos"
    ]
  },
  {
    id: "2022",
    name: "Server 2022",
    nameFull: "Windows Server 2022",
    subtitle: "",
    year: "2021",
    tag: "Secured-Core",
    tagColor: "tag-red",
    summary: "Versión con soporte activo hasta 2031. Su enfoque principal fue la seguridad bajo el concepto de Secured-Core Server: arranque seguro, protección de firmware y TPM 2.0. Incorporó TLS 1.3 y DNS sobre HTTPS de forma nativa. SMB sobre QUIC permite acceso seguro a recursos compartidos sin necesidad de VPN. Azure Arc profundiza la gestión híbrida.",
    keyFeatures: [
      "Secured-Core Server con TPM 2.0 y arranque seguro",
      "TLS 1.3 y DNS sobre HTTPS (DoH)",
      "SMB sobre QUIC (sin necesidad de VPN)",
      "Azure Arc para gestión híbrida desde Azure",
      "Storage Spaces Direct mejorado"
    ],
    newTech: [
      "SMB sobre QUIC",
      "Azure Arc integrado",
      "Secured-Core Server ampliado",
      "Protección de firmware (DRTM)",
      "TLS 1.3 nativo"
    ],
    improvements: [
      "SMB sobre QUIC elimina la VPN para acceso remoto seguro a recursos compartidos",
      "Azure Arc permite gestionar servidores locales desde el portal de Azure como si fueran recursos en la nube",
      "Secured-Core Server protege contra ataques a firmware, una amenaza cada vez más relevante",
      "TLS 1.3 y DoH mejoran la seguridad de las comunicaciones de red por defecto"
    ]
  },
  {
    id: "2025",
    name: "Server 2025",
    nameFull: "Windows Server 2025",
    subtitle: "",
    year: "2024",
    tag: "IA y Hotpatch",
    tagColor: "tag-violet",
    summary: "Lanzado el 1 de noviembre de 2024, es la versión actual LTSC y la más segura hasta la fecha. Su gran novedad operativa es el Hotpatching: aplicar actualizaciones de seguridad sin reiniciar el servidor, vía Azure Arc. Active Directory recibe su mayor revisión técnica en años con páginas de base de datos de 32k. El rendimiento en almacenamiento NVMe mejora hasta un 60 % respecto a Server 2022. Se añade soporte nativo para cargas de trabajo de IA mediante GPU Partitioning mejorado con live migration y clustering.",
    keyFeatures: [
      "Hotpatching sin reinicio vía Azure Arc (Standard y Datacenter)",
      "Active Directory con páginas de BD de 32k y nivel funcional 10",
      "GPU Partitioning mejorado para cargas de IA con live migration",
      "NVMe: hasta un 60 % más de IOPs que Server 2022",
      "SMB sobre QUIC disponible en ediciones Standard y Datacenter",
      "Credential Guard habilitado por defecto",
      "Hyper-V: hasta 2.048 vCPUs por VM (Gen 2) y compatibilidad dinámica de procesadores",
      "Soporte para actualización automática a futuras versiones vía Windows Update"
    ],
    newTech: [
      "Hotpatching sin reinicio (Azure Arc)",
      "AD nivel funcional 10 con páginas de 32k",
      "GPU Partitioning con live migration y clustering",
      "Delegated Managed Service Accounts (dMSA)",
      "AccelNet (SR-IOV simplificado para VMs)",
      "DTrace nativo para diagnóstico en tiempo real",
      "SMB endurecido: firma obligatoria y protección MITM",
      "Compatibilidad dinámica de CPUs en Hyper-V"
    ],
    improvements: [
      "Hotpatching elimina la necesidad de reiniciar para aplicar parches de seguridad, reduciendo drásticamente el downtime de mantenimiento",
      "Active Directory recibe su mayor renovación técnica: páginas de 32k mejoran el rendimiento en entornos con millones de objetos",
      "GPU Partitioning con soporte de live migration y clustering abre la puerta a cargas de IA y machine learning en infraestructura on-premises",
      "El rendimiento NVMe un 60 % superior a Server 2022 lo convierte en la plataforma óptima para SQL Server y bases de datos de alta exigencia",
      "SMB sobre QUIC ya disponible en Standard y Datacenter, no solo en la edición Azure, democratizando el acceso remoto seguro sin VPN",
      "Credential Guard activo por defecto refuerza la protección de credenciales sin configuración adicional por parte del administrador"
    ]
  }
];


// =========================== LÓGICA DE INTERFAZ ==================
(function () {
  "use strict";

  let activeId = null;

  // ── Construye los pills de la barra inferior ──
  function buildVersionBar() {
    const bar = document.getElementById("versions-bar");

    versions.forEach((v) => {
      const pill = document.createElement("button");
      pill.className = "version-pill";
      pill.setAttribute("data-id", v.id);
      pill.setAttribute("role", "tab");
      pill.setAttribute("aria-selected", "false");
      pill.setAttribute("aria-label", `Ver ${v.nameFull}`);

      pill.innerHTML = `
        <span class="pill-year">${v.year}</span>
        <span class="pill-name">${v.name}</span>
        <span class="pill-tag ${v.tagColor}">${v.tag}</span>
      `;

      pill.addEventListener("click", () => selectVersion(v.id));
      bar.appendChild(pill);
    });
  }

  // ── Selecciona una versión y actualiza la vista ──
  function selectVersion(id) {
    if (id === activeId) return;

    const version = versions.find(v => v.id === id);
    if (!version) return;

    activeId = id;

    // Marcar pill activo
    document.querySelectorAll(".version-pill").forEach(p => {
      const isActive = p.getAttribute("data-id") === id;
      p.classList.toggle("active", isActive);
      p.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    // Hacer scroll al pill activo (centrado)
    const activePill = document.querySelector(`.version-pill[data-id="${id}"]`);
    if (activePill) {
      activePill.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }

    // Mostrar contenido
    renderDetail(version);
  }

  // ── Renderiza el contenido de la versión en la vista central ──
  function renderDetail(v) {
    // Ocultar estado vacío
    document.getElementById("empty-state").style.display = "none";

    const detail = document.getElementById("version-detail");

    // Forzar re-animación
    detail.classList.add("hidden");
    detail.setAttribute("aria-hidden", "true");

    // Rellenar datos
    document.getElementById("vd-year").textContent = v.year;

    const tagEl = document.getElementById("vd-tag");
    tagEl.textContent = v.tag;
    tagEl.className = `vd-tag ${v.tagColor}`;

    document.getElementById("vd-title").textContent =
      v.subtitle ? `${v.nameFull} — ${v.subtitle}` : v.nameFull;

    document.getElementById("vd-summary").textContent = v.summary;

    document.getElementById("vd-features").innerHTML =
      v.keyFeatures.map(f => `<li>${f}</li>`).join("");

    document.getElementById("vd-tech").innerHTML =
      v.newTech.map(t => `<span class="tech-badge">${t}</span>`).join("");

    document.getElementById("vd-improvements").innerHTML =
      v.improvements.map(i =>
        `<li><span class="improv-arrow">↗</span>${i}</li>`
      ).join("");

    // Mostrar con animación
    requestAnimationFrame(() => {
      detail.classList.remove("hidden");
      detail.setAttribute("aria-hidden", "false");
    });
  }

  // ── Init ──
  buildVersionBar();

})();