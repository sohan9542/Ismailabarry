import React, { useContext, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { RapperContent } from "../App";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Courses", href: "/courses" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(RapperContent);
  const navigate = useNavigate();
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-white border-b">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className=" flex items-center gap-3">
            <img className="w-12" src="/logo.png" alt="" />
            <h2 className="text-2xl font-bold text-pr">Jangflix</h2>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <>
              {item.name === "Dashboard" ? (
                <>
                  {isAuthenticated && (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-sm font-semibold leading-6 hover:text-pr text-gray-900"
                    >
                      {item.name}
                    </Link>
                  )}
                </>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-semibold leading-6 hover:text-pr text-gray-900"
                >
                  {item.name}
                </Link>
              )}
            </>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!isAuthenticated ? (
            <Link
              to="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          ) : (
            <div
              onClick={() => {
                setIsAuthenticated(false);
                navigate("/login");
              }}
              className="text-sm font-semibold leading-6 cursor-pointer text-gray-900"
            >
              Logout <span aria-hidden="true">&rarr;</span>
            </div>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="w-12" src="/logo.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <>
                    {item.name === "Dashboard" ? (
                      <>
                        {isAuthenticated && (
                          <Link
                          onClick={() => setMobileMenuOpen(false)}
                            key={item.name}
                            to={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Link>
                        )}
                      </>
                    ) : (
                      <Link
                      onClick={() => setMobileMenuOpen(false)}
                        key={item.name}
                        to={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    )}
                  </>
                ))}
              </div>
              <div className="py-6">
                {!isAuthenticated ? (
                  <Link
                  onClick={() => setMobileMenuOpen(false)}
                    to="/login"
                    className="font-semibold leading-6 text-gray-900"
                  >
                    Log in <span aria-hidden="true">&rarr;</span>
                  </Link>
                ) : (
                  <div
                    onClick={() => {
                      setIsAuthenticated(false);
                      navigate("/login");
                      setMobileMenuOpen(false)
                    }}
                    className=" font-semibold leading-6 cursor-pointer text-gray-900"
                  >
                    Logout <span aria-hidden="true">&rarr;</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
