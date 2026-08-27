import { ButtonLink, Container } from "@designally/ui";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <Container className="hero__content">
          <p className="eyebrow">Independent design agency · Bangkok</p>
          <h1>
            Clear ideas.
            <br />
            Meaningful design.
          </h1>
          <p className="intro">
            Designally creates brand identities and digital experiences that
            help ambitious businesses move forward.
          </p>
          <ButtonLink href="mailto:hello@designally.com">
            Start a project
          </ButtonLink>
        </Container>
      </section>
      <section className="foundation">
        <Container>
          <p>Website foundation</p>
          <h2>
            Ready for projects, stories, and the next stage of Designally.
          </h2>
        </Container>
      </section>
    </main>
  );
}
