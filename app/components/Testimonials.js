import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    text: "Rian Infotech greatly enhanced our workflow efficiency with their advanced software solutions. I highly recommend their services to any business seeking growth!",
    image: "/images/globe.png", // Replace with actual image URL
    rating: 4,
  },
  {
    name: "Jane Smith",
    text: "Rian Infotech greatly enhanced our workflow efficiency with their advanced software solutions. I highly recommend their services to any business seeking growth!",
    image: "/images/person.png", // Replace with actual image URL
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold ">Hear From Our Satisfied Clients</h2>
        <p className=" mt-2">Discover how our solutions have made a difference in the lives of our clients.</p>
      </div>

      <div className="flex flex-col gap-8 items-center">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className={`w-full max-w-2xl p-6 shadow-lg border border-gray-200 rounded-xl ${
              index % 2 === 0 ? "self-start" : "self-end"
            }`}
          >
            <CardContent className="flex flex-col gap-4">
              <p className=" italic">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <div className="text-yellow-500">
                    {"★".repeat(testimonial.rating)}
                    {"☆".repeat(5 - testimonial.rating)}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
