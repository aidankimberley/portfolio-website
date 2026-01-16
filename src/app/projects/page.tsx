import Image from "next/image";

type Project = {
  id: string;
  title: string;
  summary: string;
  links: { label: string; href: string }[];
  image?: string;
  imageAlt?: string;
  video?: string;
  videoDescription?: string;
  linksDescription?: string;
};

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: "ankle-exoskeleton",
      title: "Ankle Exoskeleton",
      summary:
        `At the Harvard Biodesign Lab, designed, fabricated, and developed wearable ankle exoskeleton robots to assist gait. \
        Created detailed designs in SOLIDWORKS and fabricated multiple robot prototypes using SLS 3D printing, carbon fiber molding, \
        and soldering new electronic components. Conducted comprehensive data collection and analysis using MATLAB and Simulink, incorporating both on-body \
        and bench-top testing to optimize performance through power flow analysis and iterative design methods.`,
      linksDescription: "This work contributed to a paper featured at the IEEE International Conference on Robotics and Automation.",
      image: "/ankle_exo_design.png",
      imageAlt: "Ankle exoskeleton design rendering",
      video: "/biodesign_video.mp4",
      videoDescription: "Me walking with device:",
      links: [
        { label: "IEEE Paper", href: "https://ieeexplore.ieee.org/document/10610736" },
      ],
    },
    {
      id: "computer-vision-validation",
      title: "Computer Vision Model Validation",
      summary:
        `Captured a high-fidelity dataset to design and validate custom 3D human pose tracking algorithms, \
        compare IR, RGB, and point-cloud data quality between different camera alternatives, and perform validation \
        assessment of new solutions with respect to a reference motion capture system. Designed and implemented \
        a novel automated anomaly detection method for motion capture data to improve tracking reliability. \
        Performed statistical analysis on the resulting datasets to validate model performance.`,
      image: "/sapiens_joints_w_RGB.png",
      imageAlt: "Computer vision validation joints overlay",
      links: [
        { label: "View Slides", href: "/projects/vision-slides" },
      ],
    },
    {
      id: "tms-stroke-rehabilitation",
      title: "TMS Stroke Rehabilitation Study",
      summary:
        `Established a transcranial magnetic stimulation (TMS) experimental setup for investigating \
        paired associative stimulation (PAS) protocols in stroke rehabilitation research. Independently integrated \
        hardware and software systems using Cambridge Electronic Design (CED) Signal software and MATLAB to \
        control stimulation parameters and data acquisition. Conducted extensive data analysis on noisy experimental \
        datasets to extract meaningful insights for clinical applications. Below are two posters detailing the setup and the research details.`,
      image: "/MGH_TMS_image.webp",
      imageAlt: "TMS experimental setup at Mass General Hospital",
      links: [
        { label: "Protocol Setup Engineering", href: "/Engineering Solutions to Execute Paired Associative Stimulation Protocol.pdf" },
        { label: "PAS Research Details", href: "/PAS Poster_MGH_Research_Day_V2.pdf" },
      ],
    },
    {
      id: "gearbox-design",
      title: "Gearbox Design",
      summary:
        `As a course project, co-designed and optimized a lightweight aerospace gearbox based on Solar Impulse aircraft specifications as part of a four-member engineering team. \
        The gearbox was required to withstand 60 HP at 5,500 RPM while transmitting power to a propeller at 835 RPM, meeting strict aerospace requirements \
        for weight, reliability, and safety factors. Applied AGMA and ASME standards to ensure all components exceeded the required 1.5 safety factor through \
        iterative optimization, stress analysis, fatigue life estimation, advanced material selection, and CAD modeling. Delivered a final design with manufacturing-ready CAD drawings for the complete gearbox assembly.`,
      image: "/gearbox_CAD.png",
      imageAlt: "CAD model of aerospace gearbox design",
      links: [
        { label: "Gearbox Report", href: "/AidanKimberley_gearbox_report.pdf" },
      ],
    },
    {
      id: "bim-lidar-verification",
      title: "BIM LiDAR Verification",
      summary:
        `Developed an algorithm to verify as-built footing geometry using LiDAR point cloud data, integrating Building Information Modeling (BIM) principles to ensure construction accuracy. 
        Leveraged advanced computational methods—including Singular Value Decomposition (SVD), modified K-means clustering, and plane intersection—to process complex datasets and extract key geometric features such as planes and corner points. 
        Built comprehensive 3D analysis workflows to compare as-built structures with design specifications, demonstrating proficiency in large-scale spatial data processing, computational geometry, and construction technology.`,
      image: "/BIM_points.png",
      imageAlt: "LiDAR point cloud data visualization for BIM verification",
      links: [
        { label: "BIM Report", href: "/BIM_project_report.pdf" },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-300"></p>
      <div className="mt-8 space-y-8">
        {projects.map((p) => (
          <article key={p.title} id={p.id} className="rounded-xl border p-6">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            
            {/* Image */}
            {p.image ? (
              <div className="mt-4 w-full rounded-lg border bg-gray-50 p-2">
                <div className={`relative w-full ${
                  p.id === 'gearbox-design' || p.id === 'tms-stroke-rehabilitation' || p.id === 'computer-vision-validation' || p.id === 'bim-lidar-verification'
                    ? 'h-72' 
                    : 'h-64'
                }`}>
                  <Image src={p.image} alt={p.imageAlt ?? p.title} fill className="object-contain" />
                </div>
              </div>
            ) : null}

            {/* Summary text right after image */}
            <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{p.summary}</p>

            {/* Video with header */}
            {p.video ? (
              <div className="mt-6">
                {p.videoDescription && (
                  <h3 className="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">
                    {p.videoDescription}
                  </h3>
                )}
                <div className="w-full rounded-lg border bg-gray-50 p-2 flex justify-center">
                  <video
                    className="max-w-md w-full h-auto rounded-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={p.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ) : null}
            
            {/* Links description */}
            {p.linksDescription && (
              <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{p.linksDescription}</p>
            )}
            
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              {p.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="hover:underline px-3 py-1 rounded border"
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

