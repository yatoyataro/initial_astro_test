import { useState } from "react";
import type { FormEvent } from "react";
import { consoleLog } from "@components/widgets/ConsoleLog";
import { Input } from "@components/ui/Input";
import { Textarea } from "@components/ui/Textarea";
import { Button } from "@components/ui/Button";
import { TerminalBox } from "@components/widgets/TerminalBox";

export function UplinkSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`UPLINK TRANSMISSION FROM ${formData.name}`);
    const body = encodeURIComponent(
      `NAME: ${formData.name}\nEMAIL: ${formData.email}\n\nMESSAGE:\n${formData.message}`
    );
    window.location.href = `mailto:dwightjairo.pingul23@gmail.com?subject=${subject}&body=${body}`;

    consoleLog.append("[ OK ] TRANSMISSION_PACKET_SENT", "ok");
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="uplink" className="section">
      <div className="section-header">{"// 03_UPLINK :: ESTABLISH_DIRECT_TRANSMISSION"}</div>

      <TerminalBox legend="TRANSMISSION_PROTOCOL // CONTACT_FORM">
        <form
          onSubmit={handleSubmit}
          action="mailto:dwightjairo.pingul23@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <Input
            label="> INPUT_IDENTIFIER [NAME]:"
            name="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            disabled={submitted}
          />
          <Input
            label="> RETURN_UPLINK [EMAIL]:"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            disabled={submitted}
          />
          <Textarea
            label="> TRANSMISSION_PAYLOAD [MESSAGE]:"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            disabled={submitted}
          />
          <div style={{ display: "flex", gap: "8px", marginTop: "0.5rem" }}>
            <Button type="submit" variant="primary" disabled={submitted}>
              {submitted ? "[ > TRANSMITTED ]" : "[ > EXECUTE_TRANSMISSION ]"}
            </Button>
          </div>
        </form>
      </TerminalBox>
    </section>
  );
}
