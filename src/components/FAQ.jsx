export default function FAQ() {
  return (
    <>
      <div className="hero w-4/5 h-fit flex flex-col">
        <h1 className="text-4xl text-neutral-content font-bold"> FAQ's </h1>
        <div className="collapse collapse-arrow bg-info-content mt-5">
          <input type="radio" name="my-accordion-2" defaultChecked="true" />
          <div className="collapse-title text-xl font-medium text-neutral-content">
            Welchen Mehrwehrt bietet unsere Plattform?
          </div>
          <div className="collapse-content">
            <p className="text-neutral-content">
              Fakt ist: Die Reichen werden immer reicher und die Armen immer
              ärmer. Eine Mittelklasse existiert praktisch gar nicht mehr. Warum
              ist das so? Ganz einfach! Die Einen wissen wie man sich mehrere
              Einkommensquellen aufbaut und wie man sein Geld für sich arbeiten
              lässt. Die Anderen eben nicht.
            </p>
            <p className="text-neutral-content">
              Genau zu diesem Problem bieten wir die Lösung!
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-info-content mt-5">
          <input type="radio" name="my-accordion-2"/>
          <div className="collapse-title text-xl text-neutral-content font-medium">
            Was genau bietet unsere Firma an?
          </div>
          <div className="collapse-content">
            <p className="text-neutral-content">
              Die Unternehmung mit welcher ich Arbeite, bietet Dienstleistungen
              an, welche ihren Kunden helfen besser mit ihren Finanzen
              umzugehen, ihr Geld für sich arbeiten zu lassen und günstiger
              reisen zu gehen.
            </p>
            <p className="text-neutral-content">
              Es besteht des Weiteren die Möglichkeit als Geschäftspartner
              ebenfalls Cashflow zu generieren.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-info-content mt-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium text-neutral-content">
            Warum macht es Sinn Geschäftspartner zu werden?
          </div>
          <div className="collapse-content">
            <p className="text-neutral-content">
              Ganz einfach, weil du dir durch dieses Business-Modell ein
              sogenanntes "passives Einkommen" aufbauen kannst.
            </p>
            <br></br>
            <div className="flex w-full h-auto flex-col lg:flex-row">
              <div className="grid h-auto w-full lg:w-1/2  card bg-neutral rounded-box place-items-left p-2">
                <h3 className="text-neutral-content font-semibold text-lg">Aktives Einkommen</h3>
                <p className="text-neutral-content"> - Wenn du arbeitest, verdienst du Geld, wenn nicht, dann nicht.</p>
                <p className="text-neutral-content"> - Dein Einkommen ist von deiner Leistung abhängig. </p>
                <p className="text-neutral-content"> - Dein Einkommen ist von der Zeit, welche du investierst abhängig. </p>
              </div>
              <div className="divider lg:divider-horizontal divider-vertical text-neutral-content">
                VS
              </div>
              <div className="grid h-auto w-full lg:w-1/2 card bg-neutral rounded-box place-items-left p-2">
                <h3 className="text-neutral-content font-semibold text-lg">Passives Einkommen</h3>
                <p className="text-neutral-content"> - Wenn du dir ein Mal ein Business aufgebaut hast, welches passives Einkommen generiert, dann verdienst du Geld, auch wenn du keine Zeit mehr investierst. </p>
                <p className="text-neutral-content"> - Dein Einkommen ist weder von deiner Zeit, noch von deiner Leistung abhängig. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-info-content mt-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium text-neutral-content">
            Voraussetzungen um Kunde zu werden
          </div>
          <div className="collapse-content">
            <p className="text-neutral-content"> - mindestens 18 Jahre alt</p>
            <p className="text-neutral-content">
              {" "}
              - Bereitschaft Geld zu investieren{" "}
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-info-content mt-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium text-neutral-content">
            Voraussetzungen um mit MIR als Geschäftspartner zu arbeiten
          </div>
          <div className="collapse-content">
            <p className="text-neutral-content"> - mindestens 18 Jahre alt</p>
            <p className="text-neutral-content">
              {" "}
              - Bereitschaft Geld zu investieren{" "}
            </p>
            <p className="text-neutral-content">
              {" "}
              - Bereitschaft mindestens zehn bis fünfzehn Stunden pro Woche,
              über mindestens sechs Monate zu investieren
            </p>
            <p className="text-neutral-content"> - Lernbereitschaft</p>
          </div>
        </div>
      </div>
    </>
  );
}
