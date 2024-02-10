import { LinkedinIcon, MailIcon } from "lucide-react";

function App() {
  const name = "Krishna kanth";
  const bio =
    "i like to build thing i am software whatever dotn care fuck the police we balling";
  const location = "singapore";
  const profile_pic_url =
    "https://pub-ad0aee4ac47e45db9ea021c8baa12c81.r2.dev/userfiles/8rUEKISlZIamOYBDY2hwS8e75iA3/generations/kPxdOr4Mk6dxytfky2gpV.jpg";
  const about =
    "I used to be a software engineer at Cisco, but having kids completely shuffled my life! After eight years in a cushy corporate job, I made the decision to quit and pursue something I truly love.";
  const projects = [
    {
      name: "Archsynth",
      url: "archsynth.com",
      icon: "https://www.toolpilot.ai/cdn/shop/files/33d2065194e23f5a65182442ed1480a7_610x_crop_center.jpg?v=1696159383",
      descriptions: "Transform Sketches into Stunning Visuals",
    },
    {
      name: "Westidol",
      url: "westidol.com",
      icon: "https://www.toolpilot.ai/cdn/shop/files/33d2065194e23f5a65182442ed1480a7_610x_crop_center.jpg?v=1696159383",
      descriptions: "Transform Sketches into Stunning Visuals",
    },
    {
      name: "Gorilla Terminal",
      url: "gorillaterminal.com",
      icon: "https://www.toolpilot.ai/cdn/shop/files/33d2065194e23f5a65182442ed1480a7_610x_crop_center.jpg?v=1696159383",
      descriptions: "Transform Sketches into Stunning Visuals",
    },
  ];

  const skills = [
    "Javascript",
    "typescript",
    "vuejs",
    "react",
    "nuxt",
    "next.js",
    "firebase",
    "postgres",
    "mongoDB",
    "tailwindcss",
    "python",
    "docker",
  ];

  const links = [
    {
      name: "mail",
      icon: MailIcon,
      link: "mailto:team@archsynth.com",
    },
    {
      name: "twitter",
      icon: XdotComIcon,
      link: "mailto:team@archsynth.com",
    },
    {
      name: "LinkedIn",
      icon: LinkedinIcon,
      link: "mailto:team@archsynth.com",
    },
  ];
  return (
    <>
      <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
        <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-2xl font-bold">{name}</h1>
              <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
                {bio}
              </p>
              <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                <span className="inline-flex gap-x-1.5 align-baseline leading-none">
                  🌁 {location}
                </span>
              </p>
              <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                {links.map((item) => {
                  return (
                    <a
                      href={item.link}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
                    >
                      <item.icon className="size-4" />
                    </a>
                  );
                })}
              </div>
            </div>
            <span className="relative flex shrink-0 overflow-hidden rounded-xl size-28">
              <img
                className="aspect-square h-full w-full object-cover"
                alt="Damon Chen"
                src={profile_pic_url}
              />
            </span>
          </div>
          <section className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold">About</h2>
            <p className="text-pretty font-mono text-sm text-muted-foreground">
              {about}
            </p>
          </section>
          <section className="flex min-h-0 flex-col gap-y-3 print-force-new-page scroll-mb-16">
            <h2 className="text-xl font-bold">Portfolio</h2>
            <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-1 print:gap-2 md:grid-cols-2">
              {projects.map((item) => {
                return (
                  <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3">
                    <div className="flex flex-col space-y-1.5">
                      <div className="space-y-1">
                        <h3 className="font-semibold tracking-tight text-base flex items-center gap-x-2 gap-y-1 flex-wrap">
                          <img
                            src={item.icon}
                            alt="Vividshare Logo"
                            className="w-4 h-4 duration-200 drop-shadow-sm object-cover group-hover:rotate-12 delay-100"
                            width="20"
                            height="20"
                          />
                          <a
                            href={item.url}
                            target="_blank"
                            className="inline-flex items-center gap-1 hover:underline"
                          >
                            {item.name}
                            <span className="size-1 rounded-full bg-green-500"></span>
                          </a>
                        </h3>
                        <div className="hidden font-mono text-xs underline print:visible">
                          {item.name}
                        </div>
                        <p className="text-muted-foreground font-mono text-xs">
                          {item.descriptions}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="grid grid-cols-4">
              {skills.map((item) => {
                return (
                  <div className="text-pretty font-mono text-sm text-muted-foreground">
                    {item}
                  </div>
                );
              })}
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

function XdotComIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="size-4"
    >
      <title>X</title>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      ></path>
    </svg>
  );
}

export default App;
