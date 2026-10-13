
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-green-400">
          GameStreet App
        </h1>

        <p className="mt-4 text-slate-300">
          Your gaming session starts here.
        </p>

        <button className="mt-6 rounded-lg bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400">
          Enter verification code
        </button>
      </div>
    </div>
  )
}

export default App
