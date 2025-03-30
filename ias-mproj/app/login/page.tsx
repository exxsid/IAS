"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const images = ["/carousel1.jpg", "/carousel2.jpg", "/carousel3.jpg"];

export default function LoginPage() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-blue-50 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <Card className="p-6 shadow-lg w-full bg-white rounded-2xl">
          <CardContent>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Bank Login
            </h2>
            <form className="space-y-4">
              <Input type="text" placeholder="Username" className="w-full" />
              <Input
                type="password"
                placeholder="Password"
                className="w-full"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="relative w-full h-80 md:h-full rounded-2xl overflow-hidden">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[currentImage]}
              alt="Bank promotional image"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <Button
            className="absolute bottom-4 right-4 bg-white text-blue-600 p-2 rounded-full shadow-md"
            onClick={nextImage}
          >
            ▶
          </Button>
        </div>
      </div>
    </div>
  );
}
