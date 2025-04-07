'use client'

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Oops! 😓</h1>
        <p className="text-gray-700 text-lg">
          Sorry, something went wrong. Please try again later.
        </p>
      </div>
    </div>
  );
}
