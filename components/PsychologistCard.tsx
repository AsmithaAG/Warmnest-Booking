export default function PsychologistCard() {
  return (
    <section className="section">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/images/psychologist.jpg"
          alt="Psychologist"
          className="rounded-2xl object-cover"
        />

        <div>
          <h2 className="heading-lg">Dr. Krisha Aishwarya</h2>

          <p className="body-text mt-4">
            Licensed Clinical Psychologist with extensive experience in anxiety,
            emotional regulation, and relationship counseling.
          </p>

          <ul className="body-text mt-6 space-y-2">
            <li>• MSc in Clinical Psychology</li>
            <li>• Evidence-based therapeutic methods</li>
            <li>• Confidential, judgment-free sessions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
