const Contact = () => (
  <div className="w-full py-16 bg-gray-100 flex flex-col items-center lg:px-32 px-10">
    <h2 className="lg:text-4xl text-2xl font-bold mb-8">Contact Me</h2>
    <p className="lg:text-lg text-base mb-6 text-center">
      I am open to new opportunities, collaborations, or just a friendly chat!
      Reach out to me via phone or email.
    </p>

    {/* Contact Details */}
    <div className="space-y-4 text-center">
      <p className="lg:text-base text-sm">
        Phone: <a className="text-blue-500 hover:underline">+34 608 667 749</a>
      </p>
      <p className="lg:text-base text-sm">
        Email:{" "}
        <a className="text-blue-500 hover:underline">sgerickee@gmail.com</a>
      </p>
    </div>
  </div>
);

export default Contact;
