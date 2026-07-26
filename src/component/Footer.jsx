import {
  FaFacebook,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-20">

      <div className="max-w-7xl mx-auto py-16 text-center">

        <h1 className="text-5xl font-bold">
          KeenKeeper
        </h1>

        <p className="mt-5 text-gray-300">
          Your personal shelf of meaningful
          connections.
        </p>

        <h3 className="mt-8">
          Social Links
        </h3>

        <div className="flex justify-center gap-5 mt-4 text-2xl">

          <FaYoutube />

          <FaFacebook />

          <FaXTwitter />

        </div>

        <div className="mt-10 text-gray-400 flex justify-center gap-8">

          <p>Privacy Policy</p>

          <p>Terms</p>

          <p>Cookies</p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;