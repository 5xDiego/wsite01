export default function SignUpHero() {
  return (
    <>
      <div
        className="hero h-96 w-4/5 rounded"
        style={{
          backgroundImage: "url(stockImg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Interesse geweckt?</h1>
            <p className="mb-5">
              Werde noch heute Mitglied und öffne die Türen der Selbständigkeit.
              Schreib mir einfach eine Nachricht, mehr brauchts nicht!
            </p>
            <br></br>
            <button>
              <a href="https://wa.me/***********?text=Hi%20Viktor%21%20Ich%20interessiere%20mich%20f%C3%BCr%20dein%20Business%20und%20m%C3%B6chte%20auch%20einsteigen.%20Erz%C3%A4hl%20mir%20mehr%21%20">
                <img
                  alt="Chat on WhatsApp"
                  src="WhatsAppButtonGreenLarge.svg"
                />
              </a>
            </button>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}
