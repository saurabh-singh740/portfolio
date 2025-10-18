import React, { useRef } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import AppRoutes from "./AppRoutes";

function App() {
  const scrollRef = useRef(null);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500 min-h-screen flex flex-col">
      <Navbar onLinkClick={(section) => scrollRef.current(section)} />
      <main className="flex-1">
        <AppRoutes scrollToSection={scrollRef} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
