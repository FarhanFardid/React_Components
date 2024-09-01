// Change content as necessary.

const Newsletter = () => {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-xl font-semibold mb-4">Newsletter Signup</h2>
      <form className="max-w-md mx-auto flex space-x-4">
        <input
          className="flex-grow p-2 border border-gray-300 rounded"
          type="email"
          placeholder="Your email"
          required
        />
        <button className="p-2 bg-blue-500 text-white rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default Newsletter;
