import Icon from "@/components/Icon";
import { FiInstagram, FiGlobe, FiMail } from "react-icons/fi";

export default function ConnectSection() {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto text-center">
        <p className="body-text">Follow insights & updates</p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-8 text-sm text-neutral-700">
          <a
            href="https://instagram.com/mental_healthcompass"
            target="_blank"
            className="flex items-center gap-2 hover:underline"
          >
            <Icon icon={FiInstagram} />
            @mental_healthcompass
          </a>

          <a
            href="https://krishaishwarya.exlyapp.com/"
            target="_blank"
            className="flex items-center gap-2 hover:underline"
          >
            <Icon icon={FiGlobe} />
            krishaishwarya.exlyapp.com
          </a>

          <a
            href="mailto:contact@mentalhealthcompass.in"
            className="flex items-center gap-2 hover:underline"
          >
            <Icon icon={FiMail} />
            contact@mentalhealthcompass.in
          </a>
        </div>
      </div>
    </section>
  );
}
