import Image from 'next/image';

const testimonials = [
  {
    name: "Amit Sharma",
    feedback: "This platform helped me land my first developer job!",
    image: "/images/Men.png", // Replace with actual image path
    rating: 5,
  },
  {
    name: "Priya Verma",
    feedback: "The interactive coding playground made learning so much easier!",
    image: "/images/Men.png", // Replace with actual image path
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    feedback: "I gained confidence in coding through real-world projects!",
    image: "/images/Men.png", // Replace with actual image path
    rating: 4,
  },
  {
    name: "Sneha Kapoor",
    feedback: "The structured learning path kept me motivated throughout my journey!",
    image: "/images/Men.png", // Replace with actual image path
    rating: 5,
  },
  {
    name: "Vikram Rao",
    feedback: "The mentorship sessions were incredibly helpful in my job search!",
    image: "/images/Men.png", // Replace with actual image path
    rating: 5,
  },
  {
    name: "Neha Agarwal",
    feedback: "The hands-on coding exercises made learning fun and effective!",
    image: "/images/Men.png", // Replace with actual image path
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Testimonials & Success Stories
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow-lg p-6 rounded-2xl flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={80}
              height={80}
              className="rounded-full mb-4 border-4 border-blue-500"
            />
            <p className="text-lg text-gray-700 mb-2">"{testimonial.feedback}"</p>
            <h3 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h3>
            <div className="flex mt-2">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i} className="text-yellow-500 text-xl">⭐</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;