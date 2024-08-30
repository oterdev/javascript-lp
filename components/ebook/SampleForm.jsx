"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function SampleForm() {
  const form = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const sendEmail = (template) => {
    return emailjs.sendForm("service_ywq3648", template, form.current, {
      publicKey: "Iz_ZTYcxSEZtuyjaR",
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
        console.log("FAILED...", error.message);
      })
      .finally(() => {
        setName("");
        setEmail("");
      });
  };

  return (
    <>
      <ToastContainer />

      <section className="py-16 bg-yellow-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between">
            <div className="md:w-1/2">
              <h2 className="text-2xl text-center font-semibold text-[#343434] mb-6">
                Mau Coba Dulu? Gratis!
              </h2>
              <p className="md:text-center text-[#343434] mb-6">
                Masih ragu? Tenang, kita kasih sample gratis buat kamu. Isi
                email kamu di bawah, dan kita bakal kirim beberapa halaman ke
                inbox kamu. Dijamin bikin kamu jadi penasaran!
              </p>
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Input
                  type="text"
                  placeholder="Nama kamu di sini"
                  className="flex-grow"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  placeholder="Email kamu di sini"
                  className="flex-grow"
                  type="email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button className="bg-[#343434] text-white hover:bg-[#202020]">
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
