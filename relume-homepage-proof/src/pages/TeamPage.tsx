import { Header81 } from "@/components/relume/Header81";
import { team } from "@/content";

export function TeamPage() {
  return (
    <>
      <Header81
        compact
        heading="Meet the team"
        description="A highly experienced and efficient team ready to assist small businesses with day-to-day accounting and tax issues."
        buttons={[{ title: "Work with us", url: "/contact-us" }]}
        image={{ src: "/images/team-stella.png", alt: "Stella Ezeogu" }}
      />
      {team.map((member, index) => (
        <section
          key={member.name}
          className={index % 2 === 1 ? "bg-brand-500 px-[5%] py-16 text-white md:py-20" : "px-[5%] py-16 md:py-20"}
        >
          <div className="container grid items-center gap-10 md:grid-cols-2">
            <img
              src={member.image}
              alt={member.alt}
              className={`aspect-[4/5] w-full object-cover object-top ${index % 2 === 1 ? "md:order-2" : ""}`}
            />
            <div>
              <p className="mb-2 text-small font-semibold text-brand-gold">{member.role}</p>
              <h2 className="mb-4 text-h3 font-bold">{member.name}</h2>
              {member.bio.map((paragraph) => (
                <p key={paragraph} className="mb-4 text-medium">
                  {paragraph}
                </p>
              ))}
              <p className="mt-6 text-small font-semibold">Specialist areas</p>
              <ul className="mt-2 list-disc pl-5 text-small">
                {member.specialties.map((specialty) => (
                  <li key={specialty}>{specialty}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
