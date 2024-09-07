"use client";

import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import "react-toastify/dist/ReactToastify.css";

export default function SampleForm({ serviceId, publicKey }) {
  const form = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const sendEmail = (template) => {
    return emailjs.sendForm(serviceId, template, form.current, {
      publicKey: publicKey,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      console.error("Please fill in both name and email fields.");
      return;
    }

    sendEmail("template_uywjia6")
      .then(() => {
        return sendEmail("template_7rlvksh");
      })
      .then(() => {
        console.log("SUCCESS!");
        toast.success("Email terkirim!");
      })
      .catch((error) => {
        console.log("FAILED...", error);
      })
      .finally(() => {
        setName("");
        setEmail("");
      });
  };

  return (
    <>
      <ToastContainer />

      <section className="border py-16">
        <div className="container mx-auto max-w-screen-lg px-4">
          <div className="flex flex-col items-center justify-between">
            <div className="md:w-3/4">
              <h2 className="mb-6 text-center text-2xl font-semibold text-[#343434]">
                Mau coba dulu? gratis!
              </h2>
              <p className="mb-6 text-[#343434] md:text-center">
                Masih ragu? Tenang, kita kasih sample gratis buat kamu. Isi
                email kamu di bawah, dan kita bakal kirim beberapa halaman ke
                inbox kamu. Dijamin bikin kamu jadi penasaran!
              </p>
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Input
                  type="text"
                  placeholder="Nama kamu di sini"
                  className="flex-grow"
                  value={name}
                  name="name"
                  id="name"
                  autoComplete="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  placeholder="Email kamu di sini"
                  className="flex-grow"
                  type="email"
                  value={email}
                  name="email"
                  id="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  className="bg-[#343434] text-white hover:bg-[#202020]"
                  id="kirim-sample"
                  data-umami-event="Kirim sample"
                >
                  Kirim Sample
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
