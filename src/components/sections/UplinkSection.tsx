import { Button } from "@components/ui/Button";
import { Input } from "@components/ui/Input";
import { Textarea } from "@components/ui/Textarea";
import { TerminalBox } from "@components/widgets/TerminalBox";
import { profile } from "@data/profile";
import { consoleStore } from "@scripts/consoleStore";
import type { ChangeEvent, SubmitEvent } from "react";
import { useState } from "react";

type FormStatus = "idle" | "opened";
type CopyStatus = "idle" | "copied" | "failed";

const MAX_MESSAGE_LENGTH = 1500;

export function UplinkSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");

  const update =
    (field: "name" | "email" | "message") =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      if (status !== "idle") setStatus("idle");
    };

  /**
   * This is a static site, so there is no server to send mail. We open the visitor's own
   * email app with the message pre-filled. We never claim the message was "sent" and we never
   * clear the form, so nothing is lost if no email app opens.
   * To use a real form service later (Formspree, Web3Forms, ...), replace this function.
   */
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = formData.name.trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${formData.email.trim()}\n\n${formData.message.trim()}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    consoleStore.append("> OPENING MAIL CLIENT...", "info");
    setStatus("opened");
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
  };

  return (
    <section id="uplink" className="section" aria-labelledby="uplink-heading">
      <h2 id="uplink-heading" className="section-header">
        {"// 03_UPLINK :: ESTABLISH_DIRECT_TRANSMISSION"}
      </h2>

      <TerminalBox title="TRANSMISSION_PROTOCOL // CONTACT_FORM">
        <form onSubmit={handleSubmit}>
          <Input
            id="contact-name"
            label="INPUT_IDENTIFIER [NAME]:"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={update("name")}
            required
          />
          <Input
            id="contact-email"
            label="RETURN_UPLINK [EMAIL]:"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={formData.email}
            onChange={update("email")}
            required
          />
          <Textarea
            id="contact-message"
            label="TRANSMISSION_PAYLOAD [MESSAGE]:"
            name="message"
            value={formData.message}
            onChange={update("message")}
            maxLength={MAX_MESSAGE_LENGTH}
            hint={`Opens your email app with this message filled in (max ${MAX_MESSAGE_LENGTH} characters).`}
            required
          />
          <div className="form-actions">
            <Button type="submit" variant="primary">
              [ {">"} OPEN_MAIL_CLIENT ]
            </Button>
          </div>

          <div className="form-status" role="status">
            {status === "opened" && (
              <p>
                Your email app should open with the message filled in. Nothing is sent until you
                press send there. If nothing opened, use the address below.
              </p>
            )}
          </div>
        </form>

        <div className="direct-contact">
          <span className="direct-contact__label caps">OR_DIRECT:</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <Button type="button" onClick={copyEmail}>
            [ {">"} COPY_ADDRESS ]
          </Button>
          <span className="direct-contact__result" role="status">
            {copyStatus === "copied" && "Address copied."}
            {copyStatus === "failed" && "Could not copy. Please select the address manually."}
          </span>
        </div>
      </TerminalBox>
    </section>
  );
}
