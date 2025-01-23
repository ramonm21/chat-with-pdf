import { Button } from "@/components/ui/button";

import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    name: "Store your PDF Documents 1",
    description: "Keep all your important PDF files securely stored",
    icon: GlobeIcon,
  },
  {
    name: "Store your PDF Documents 2",
    description: "Keep all your important PDF files securely stored",
    icon: EyeIcon,
  },
  {
    name: "Store your PDF Documents 3",
    description: "Keep all your important PDF files securely stored",
    icon: ServerCogIcon,
  },
  {
    name: "Store your PDF Documents 4",
    description: "Keep all your important PDF files securely stored",
    icon: MonitorSmartphoneIcon,
  },
  {
    name: "Store your PDF Documents 5",
    description: "Keep all your important PDF files securely stored",
    icon: BrainCogIcon,
  },
  {
    name: "Store your PDF Documents 6",
    description: "Keep all your important PDF files securely stored",
    icon: ZapIcon,
  },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600">
      <div className="bg-white py-24 sm:py-24 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6  lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Your Interactive Document Companion</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">One Stop Solution for Your Document Management needs</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Introducing{" "}
              <span className="font-bold text-indigo-600">Chat with PDF.</span>
              <br />
              <br /> Upload your document, and our chatbot will answer questions, summarize content, and answer all your Qs. Ideal for everyone, <span className="text-indigo-600">
                Chat with PDF
              </span>{" "}
              turns static documents into{" "}
              <span className="font-bold">dynamic conversations</span>, enhancing productivity 10x fold effortlessly.
            </p>
          </div>

          <Button asChild className="mt-10">
             <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
