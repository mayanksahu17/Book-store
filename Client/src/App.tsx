import React from "react";

interface BookOpenIconProps {
  className?: string;
}

function BookOpenIcon({ className }: BookOpenIconProps): JSX.Element {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

interface SocialIconProps {
  className?: string;
}

function FacebookIcon({ className }: SocialIconProps): JSX.Element {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: SocialIconProps): JSX.Element {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon({ className }: SocialIconProps): JSX.Element {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

const Component: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a href="#" className="flex items-center justify-center">
          <BookOpenIcon className="h-6 w-6" />
          <span className="sr-only">Bookstore</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4">Home</a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4">Books</a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4">About</a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4">Contact</a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4">Login</a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Our Bookstore
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover a world of knowledge and adventure in our curated collection of books.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Books</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              <a href="#">
                <img
                  alt="Book Cover"
                  className="aspect-[2/3] overflow-hidden rounded-lg object-cover object-center"
                  height="300"
                  src="/placeholder.svg"
                  width="200"
                />
                <h3 className="text-lg font-bold mt-2">Book Title</h3>
                <p className="text-gray-500">Author Name</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4">
            <FacebookIcon className="h-6 w-6" />
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4">
            <TwitterIcon className="h-6 w-6" />
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4">
            <InstagramIcon className="h-6 w-6" />
          </a>
        </nav>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 sm:mt-0">© 2024 Bookstore. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Component;
