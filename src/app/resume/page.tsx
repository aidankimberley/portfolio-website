import fs from "node:fs";
import path from "node:path";

function getCvPath(): string | null {
  try {
    const publicDir = path.join(process.cwd(), "public");
    const files = fs.readdirSync(publicDir);
    const pdfs = files.filter((f) => f.toLowerCase().endsWith(".pdf"));
    if (pdfs.length === 0) return null;
    const prioritized = pdfs
      .filter((f) => /cv|resume|aidan/i.test(f))
      .sort();
    const chosen = (prioritized[0] ?? pdfs.sort()[0]) as string;
    return `/${chosen}`;
  } catch {
    return null;
  }
}

export default function ResumePage() {
  const cvPath = getCvPath();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold">Resume</h1>
      {/* <p className="mt-3 text-gray-600 dark:text-gray-300">One-page summary tailored for robotics roles.</p> */}

      <div className="mt-6">
        {cvPath ? (
          <a
            href={cvPath}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-5 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
          >
            Download CV (PDF)
          </a>
        ) : (
          <span className="text-sm text-gray-600 dark:text-gray-300">No CV found in public/</span>
        )}
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Experience</h2>
        <div className="mt-4 space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Altec Research/Delsys, R&D Intern</h3>
              <span className="text-sm text-gray-500">Natick, MA · May 2025 — August 2025</span>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
              <li>Validated a state-of-the-art computer vision software with an injury prevention application.</li>
              <li>Motion capture data collection, processing, and analysis.</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Mass General Hospital IHP, Research Intern</h3>
              <span className="text-sm text-gray-500">Boston, MA · January 2024 — August 2024</span>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
              <li>Debugged and optimized hardware/software for experimental protocols with transcranial magnetic stimulation and direct current stimulators.</li>
              <li>Worked independently to solve lab technical issues.</li>
              <li>Performed data analysis using MATLAB to extract insights from noisy data.</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Harvard Biodesign Lab, Undergraduate Research Fellow — Conor Walsh, PhD</h3>
              <span className="text-sm text-gray-500">Boston, MA · April 2022 — August 2023 (summer months)</span>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
              <li>Mechanical design, fabrication, and testing of wearable ankle exoskeleton robots and pneumatic control boxes.</li>
              <li>CAD in SOLIDWORKS; fabricated with SLS/FDM 3D printing, electronics, machining, carbon fiber molding.</li>
              <li>Benchtop testing with MATLAB/Simulink; improved mechanical advantage, frequency response, stiffness, and comfort.</li>
              <li>On-body data collection with Qualisys (EMG, mocap, force plates, internal sensing).</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">McGill Formula Electric, Suspension Team Member</h3>
              <span className="text-sm text-gray-500">Montreal, CA · October 2022 — May 2023</span>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
              <li>Used Siemens NX and FEA to design components for a carbon fiber decoupled suspension system.</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Cycle Loft Bike Shop, Service Technician</h3>
              <span className="text-sm text-gray-500">Burlington, MA · May 2021 — May 2022</span>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
              <li>Built mountain, road, hybrid, and electric bikes; assisted with repairs.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
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
    </div>
  );
}

