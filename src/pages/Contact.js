function Contact() {
    return (
      <div className="p-8">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" className="border p-2 mb-4 w-full" />
          <input type="email" placeholder="Your Email" className="border p-2 mb-4 w-full" />
          <textarea placeholder="Your Message" className="border p-2 mb-4 w-full"></textarea>
          <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
        </form>
      </div>
    );
  }
  
  export default Contact;
  