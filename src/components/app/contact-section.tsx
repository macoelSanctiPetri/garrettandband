'use client';

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type FormState = 'idle' | 'sending' | 'success' | 'error' | 'invalid';

export function ContactSection() {
  const [status, setStatus] = useState<FormState>('idle');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const openModal = () => setOpen(true);
    const clickHandler = (e: Event) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href='#contact']");
      if (anchor) {
        e.preventDefault();
        openModal();
        window.history.replaceState(null, '', '#contact');
      }
    };

    if (window.location.hash === '#contact') {
      openModal();
    }
    const onHash = () => {
      if (window.location.hash === '#contact') setOpen(true);
    };
    window.addEventListener('hashchange', onHash);
    document.addEventListener('click', clickHandler, true);
    return () => {
      window.removeEventListener('hashchange', onHash);
      document.removeEventListener('click', clickHandler, true);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      type: String(formData.get('type') || ''),
      message: String(formData.get('message') || '').trim(),
      honeypot: String(formData.get('company') || '').trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus('invalid');
      return;
    }

    try {
      setStatus('sending');
      const formEndpointEnv = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
      const formEndpoint =
        formEndpointEnv ||
        (typeof window !== 'undefined' &&
        ['garrettandband.com', 'www.garrettandband.com'].includes(
          window.location.hostname
        )
          ? '/contact.php'
          : '/api/contact');
      const res = await fetch(formEndpoint || '/api/contact', {
        method: 'POST',
        headers: formEndpoint
          ? { 'Content-Type': 'application/json', Accept: 'application/json' }
          : { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          formEndpoint
            ? {
                name: payload.name,
                email: payload.email,
                type: payload.type,
                message: payload.message,
                _gotcha: payload.honeypot,
              }
            : payload
        ),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <section id="contact" className="sr-only" aria-hidden />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] overflow-auto sm:max-w-2xl bg-[#0b0b0c] text-white border border-white/10">
          <DialogHeader>
            <DialogTitle className="text-white">Contacto</DialogTitle>
            <DialogDescription className="text-white/70">
              Escríbenos y te responderemos lo antes posible.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-white/80">
                Nombre
                <input
                  name="name"
                  type="text"
                  className="rounded-lg border border-white/15 bg-white/90 px-3 py-2 text-neutral-900"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-white/80">
                Email
                <input
                  name="email"
                  type="email"
                  className="rounded-lg border border-white/15 bg-white/90 px-3 py-2 text-neutral-900"
                  required
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm text-white/80 sm:w-1/2">
              Motivo
              <select
                name="type"
                className="rounded-lg border border-white/15 bg-white/90 px-3 py-2 text-neutral-900"
                defaultValue="general"
              >
                <option value="general">General</option>
                <option value="contratacion">Contratación</option>
                <option value="prensa">Prensa</option>
                <option value="otros">Otros</option>
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm text-white/80">
              Mensaje
              <textarea
                name="message"
                rows={5}
                className="rounded-lg border border-white/15 bg-white/90 px-3 py-2 text-neutral-900"
                required
              />
            </label>

            <input
              type="text"
              name="company"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-[#d6b25a] px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:brightness-110 disabled:opacity-60"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
            </button>

            {status === 'success' && (
              <p className="text-sm text-emerald-300">Mensaje enviado. ¡Gracias!</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-rose-300">No se pudo enviar. Inténtalo de nuevo.</p>
            )}
            {status === 'invalid' && (
              <p className="text-sm text-amber-300">Completa los campos obligatorios.</p>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
