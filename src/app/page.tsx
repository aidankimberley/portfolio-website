import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Aidan Kimberley
            </h1>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
              Mechanical Engineering Student — Applied AI • Mechanical Design • Controls • Computational Modeling • R&D • Data Analytics 
            </p>
            {/*
            <p className="mt-6 text-gray-700 dark:text-gray-300">
              Mechanical engineering student with experience in wearable robotics, data-driven design, and computational modeling.
              Combining technical expertise and clear communication to drive innovation across disciplines.
            </p>
            */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/resume" className="px-5 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700">Download Resume</Link>
              <a href="#projects" className="px-5 py-3 rounded-lg border text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5">View Projects</a>
              <a href="#contact" className="px-5 py-3 rounded-lg border text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5">Contact</a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/headshot.png"
              alt="Headshot of Aidan Kimberley"
              width={300}
              height={300}
              quality={100}
              priority
              className="rounded-full object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-3xl">
        Engineering student at McGill University with experience in robotics R&D, mechanical design, 
        and applied data analysis. Contributed to research presented at the IEEE International 
        Conference on Robotics and Automation and led multiple technical projects from concept 
        through execution. Seeking roles in robotics and consulting. 
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-6 grid gap-6">
          {/* Altec Research/Delsys */}
          <div className="rounded-xl border p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/delsys_logo.png"
                  alt="Delsys logo"
                  width={64}
                  height={64}
                  className="rounded object-contain"
                />
                <div>
                  <h3 className="font-semibold">Altec Research/Delsys, R&D Intern</h3>
                  <p className="text-sm text-gray-500">Natick, MA · May 2025 — August 2025</p>
                </div>
              </div>
            </div>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>Validated a state-of-the-art computer vision software with an injury prevention application.</li>
              <li>Motion capture data collection, processing, and analysis.</li>
            </ul>
          </div>

          {/* Mass General Hospital IHP */}
          <div className="rounded-xl border p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/mgh_logo.png"
                  alt="Mass General Hospital logo"
                  width={64}
                  height={64}
                  className="rounded object-contain"
                />
                <div>
                  <h3 className="font-semibold">Mass General Hospital IHP, Research Intern</h3>
                  <p className="text-sm text-gray-500">Boston, MA · January 2024 — August 2024</p>
                </div>
              </div>
            </div>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>Debugged and optimized hardware/software for experimental protocols with TMS and direct current stimulators.</li>
              <li>Worked independently to solve lab technical issues.</li>
              <li>Performed data analysis using MATLAB to extract insights from noisy data.</li>
            </ul>
          </div>

          {/* Harvard Biodesign Lab */}
          <div className="rounded-xl border p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/harvard_logo.png"
                  alt="Harvard University logo"
                  width={64}
                  height={64}
                  className="rounded object-contain"
                />
                <div>
                  <h3 className="font-semibold">Harvard Biodesign Lab, Undergraduate Research Fellow — Conor Walsh, PhD</h3>
                  <p className="text-sm text-gray-500">Boston, MA · April 2022 — August 2023 (summer months)</p>
                </div>
              </div>
            </div>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>Mechanical design, fabrication, and testing of wearable ankle exoskeleton robots and pneumatic robotic control boxes.</li>
              <li>Created designs in SOLIDWORKS; fabricated devices and control boxes using SLS/FDM 3D printing, electronics assembly, machining, and carbon fiber molding.</li>
              <li>Conducted benchtop testing with MATLAB/Simulink to characterize mechanical properties; iterated to improve mechanical advantage, frequency response, stiffness, yield strength, longevity, comfort, and adjustability.</li>
              <li>Ran on-body data collection using Qualisys to capture EMG, mocap, force plate, and internal sensing data.</li>
            </ul>
          </div>

          {/* McGill Formula Electric */}
          <div className="rounded-xl border p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/MFE_logo.png"
                  alt="McGill Formula Electric logo"
                  width={64}
                  height={64}
                  className="rounded object-contain"
                />
                <div>
                  <h3 className="font-semibold">McGill Formula Electric, Suspension Team Member</h3>
                  <p className="text-sm text-gray-500">Montreal, CA · October 2022 — May 2023</p>
                </div>
              </div>
            </div>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>Used Siemens NX and finite element analysis to design components for a carbon fiber decoupled suspension system.</li>
            </ul>
          </div>

          {/* Cycle Loft */}
          <div className="rounded-xl border p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/cycleloft_logo.webp"
                  alt="Cycle Loft logo"
                  width={64}
                  height={64}
                  className="rounded object-contain"
                />
                <div>
                  <h3 className="font-semibold">Cycle Loft Bike Shop, Service Technician</h3>
                  <p className="text-sm text-gray-500">Burlington, MA · May 2021 — May 2022</p>
                </div>
              </div>
            </div>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>Built mountain, road, hybrid, and electric bikes from parts; assisted with repairs.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Design & Fabrication</h3>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>Manufacturing: CNC, carbon fiber molding, thermoforming, SLS/FDM 3D printing, MasterCAM</li>
              <li>CAD/FEA: SOLIDWORKS, Siemens NX, AutoCAD, Abaqus</li>
              <li>Electronics assembly: soldering and cable fabrication</li>
            </ul>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Analytics & Programming</h3>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>Programming/Automation: Python, MATLAB, C, C++, Java, TypeScript</li>
              <li>Machine Learning: PyTorch, TensorFlow</li>
              <li>Simulation Tools: MATLAB, Simulink, Siemens NX</li>
              <li>Data processing/Statistical analysis: Python, Excel, MATLAB</li>
              <li>Motion capture: Vicon, Qualisys</li>
            </ul>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Management & Communication</h3>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>Technical writing & reporting</li>
              <li>Project coordination & team collaboration</li>
              <li>Presentation development and delivery</li>
              <li>Leadership roles in research and engineering teams</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold">Publications</h2>
        <div className="mt-6 rounded-xl border p-5">
          <h3 className="font-semibold">Design & Systematic Evaluation of Power Transmission Efficiency of an Ankle Exoskeleton for Walking Post-Stroke</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">IEEE International Conference on Robotics and Automation (ICRA) · May 13, 2024</p>
          <details className="mt-3">
            <summary className="cursor-pointer text-sm text-blue-600">Show abstract</summary>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              Abstract—Community-based locomotor training post-stroke has shown improvements in independent ambulation by increasing dose, intensity, and specificity of walking practice. Robotic ankle exoskeletons hold the potential to facilitate continued rehabilitation at home, but understanding what aspects of the design are most relevant for successful translation to the community presents a challenge. Here, we design a portable rigid ankle exoskeleton to use as a research platform for investigating the effect of assistance on post-stroke gait during overground, community-based walking. We first test our device with stroke survivors and validate its potential for future community use. We then present a systematic method for quantifying power transmission losses at each transmission stage from the battery to the wearer, using data gathered from walking trials with healthy participants. Our evaluation method revealed inefficiencies in power transfer at the interface level, likely resulting from the compliance in the structural components of the system, which motivates future redesign considerations. Overall, our method provides a framework to identify and characterize the components that must be redesigned to lower exoskeleton weight and maximize performance.
            </p>
          </details>
          <div className="mt-4">
            <a
              href="https://ieeexplore.ieee.org/document/10610736"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-sm px-4 py-2 rounded-lg border hover:bg-gray-50 dark:hover:bg-white/5"
            >
              View full paper
            </a>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <Link href="/projects" className="text-sm hover:underline">See all</Link>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Ankle Exoskeleton",
              href: "/projects#ankle-exoskeleton",
              image: "/ankle_exo_design.png",
              alt: "Ankle exoskeleton design rendering",
            },
            {
              title: "Computer Vision Model Validation",
              href: "/projects#computer-vision-validation",
              image: "/sapiens_joints_w_RGB.png",
              alt: "Computer vision validation joints overlay",
            },
            {
              title: "TMS Stroke Rehabilitation Study",
              href: "/projects#tms-stroke-rehabilitation",
              image: "/MGH_TMS_image.webp",
              alt: "TMS experimental setup at Mass General Hospital",
            },
            {
              title: "Gearbox Design",
              href: "/projects#gearbox-design",
              image: "/gearbox_CAD.png",
              alt: "CAD model of aerospace gearbox design",
            },
            {
              title: "BIM LiDAR Verification",
              href: "/projects#bim-lidar-verification",
              image: "/BIM_points.png",
              alt: "LiDAR point cloud data visualization for BIM verification",
            },
          ].map((p) => (
            <Link key={p.title} href={p.href} className="rounded-xl border overflow-hidden group">
              <div className="relative aspect-video bg-gray-50">
                {p.image ? (
                  <Image src={p.image} alt={p.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sm text-gray-600">Preview</div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Click to view details
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="rounded-2xl border p-8 text-center">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Email me at <a className="underline" href="mailto:aidanlkimberley@gmail.com">aidanlkimberley@gmail.com</a>.</p>
          <div className="mt-4 flex justify-center gap-4 text-sm">
            <a className="hover:underline" href="https://www.linkedin.com/in/aidan-kimberley-36386221b" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:underline" href="https://github.com/aidankimberley" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </section>
    </div>
  );
}
