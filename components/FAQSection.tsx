const faqs = [
  {
    q: "Is this confidential?",
    a: "Yes. All sessions follow professional confidentiality standards.",
  },
  {
    q: "When do I make the payment?",
    a: "Only after your session request is approved.",
  },
  {
    q: "Can I reschedule?",
    a: "Yes, with prior notice.",
  },
];

export default function FAQSection() {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-lg text-center">FAQs</h2>

        <div className="mt-12 space-y-8">
          {faqs.map((faq, i) => (
            <div key={i}>
              <p className="font-medium text-neutral-900">{faq.q}</p>
              <p className="body-text mt-2">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
