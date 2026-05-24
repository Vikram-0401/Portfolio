import { motion } from 'framer-motion';
import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react';
import { SiLeetcode } from 'react-icons/si';
import Icon from './ui/Icon';

type ContactProps = {
  isStandalone?: boolean;
};

const contactCards = [
  {
    icon: 'Mail' as const,
    label: 'Email',
    value: 'vikramr0401@gmail.com',
    href: 'mailto:vikramr0401@gmail.com',
  },
  {
    icon: 'MapPin' as const,
    label: 'Location',
    value: 'Tumkur, Karnataka, India',
  },
];

const socials = [
  { icon: 'Github' as const, href: 'https://github.com/Vikram-0401', label: 'GitHub' },
  { icon: 'Linkedin' as const, href: 'https://www.linkedin.com/in/vikram-r-6827b3259/', label: 'LinkedIn' },
  { icon: 'Twitter' as const, href: 'https://x.com/VikramS87249739?mx=2', label: 'Twitter' },
  {
    href: 'https://leetcode.com/u/Vikram0401/',
    label: 'LeetCode',
    customIcon: <SiLeetcode className="h-5 w-5" />,
  },
];

const Contact = ({ isStandalone = false }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const characterCount = useMemo(() => formData.message.trim().length, [formData.message]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = formData.subject.trim() || `Portfolio inquiry from ${formData.name.trim() || 'a visitor'}`;
    const body = [
      'Hi Vikram,',
      '',
      formData.message.trim(),
      '',
      'Regards,',
      formData.name.trim(),
      formData.email.trim() ? `Email: ${formData.email.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `mailto:vikramr0401@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('Opening your email app with the message ready.');
  };

  return (
    <section id="contact" className={`section-shell scroll-mt-24 ${isStandalone ? 'pt-32' : ''}`}>
      <div className="section-inner">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="section-kicker">
            <Icon name="Send" className="h-4 w-4 text-emerald-200" />
            Contact
          </span>
          <h2 className="section-title">Let us build something useful.</h2>
          <p className="section-copy mx-auto">
            Send a project idea, collaboration note, or opportunity. I will read the context and get back quickly.
          </p>
        </motion.div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.aside
            className="glass-panel p-5 sm:p-6"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="relative">
              <h3 className="text-2xl font-black text-white">Direct lines</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Best for internships, freelance builds, AI prototypes, and product-minded web development.
              </p>

              <div className="mt-7 grid gap-3">
                {contactCards.map((card) => {
                  const content = (
                    <div className="flex min-h-20 items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-black">
                        <Icon name={card.icon} className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs font-bold uppercase text-slate-500">{card.label}</span>
                        <span className="mt-1 block break-words text-sm font-semibold text-white">{card.value}</span>
                      </span>
                    </div>
                  );

                  return card.href ? (
                    <a key={card.label} href={card.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={card.label}>{content}</div>
                  );
                })}
              </div>

              <div className="mt-8">
                <p className="text-sm font-bold uppercase text-slate-500">Profiles</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {socials.map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.055] text-slate-300 hover:border-cyan-200/40 hover:text-white"
                      aria-label={social.label}
                      title={social.label}
                    >
                      {'customIcon' in social ? social.customIcon : <Icon name={social.icon} className="h-5 w-5" />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>

          <motion.div
            className="glass-panel p-5 sm:p-6"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <form onSubmit={handleSubmit} className="relative space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black text-white">Message Vikram</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">A few details are enough to start the conversation.</p>
                </div>
                <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.055] text-cyan-100 sm:flex">
                  <Icon name="MessageSquare" className="h-5 w-5" />
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-300">Name</span>
                  <input
                    className="input-field"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-300">Email</span>
                  <input
                    className="input-field"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-300">Subject</span>
                <input
                  className="input-field"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project, opportunity, collaboration..."
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 flex items-center justify-between gap-4 text-sm font-bold text-slate-300">
                  Message
                  <span className="text-xs font-semibold text-slate-500">{characterCount} chars</span>
                </span>
                <textarea
                  className="input-field min-h-40 resize-y"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me what you want to build..."
                  required
                />
              </label>

              {status && (
                <p className="rounded-lg border border-emerald-300/30 bg-emerald-300/10 px-4 py-3 text-sm font-semibold text-emerald-100">
                  {status}
                </p>
              )}

              <button type="submit" className="btn btn-primary w-full">
                <Icon name="Send" className="h-4 w-4" />
                Prepare email
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
