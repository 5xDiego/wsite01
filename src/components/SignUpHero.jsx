export default function SignUpHero() {
  return (
    <>
      <div
        className="hero h-96 w-4/5 rounded"
        style={{
          backgroundImage: "url(/stockImg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Interesse geweckt?</h1>
            <p className="mb-5">
              Werde noch heute Mitglied und öffne die Türen der Selbständigkeit.
              Schreib mir einfach ein DM auf Instagram, mehr brauchts nicht!
            </p>
            <br></br>
            <button className="btn btn-primary">Jetzt loslegen!</button>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}
