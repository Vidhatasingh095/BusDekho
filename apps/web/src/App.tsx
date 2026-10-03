function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <section className="text-center">
        <div className="mb-4 text-6xl">🚌</div>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Bus<span className="text-green-600">Dekho</span>
        </h1>

        <p className="mt-3 text-lg text-slate-500">Your Bus. Live.</p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white px-8 py-6 shadow-sm">
          <p className="font-medium text-slate-700">
            BusDekho frontend is ready.
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Smart bus tracking starts here.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;