import React, { useState } from "react";

const allQuestions = {
  bore: [
    {
      question: "Koliko imaš godina?",
      options: ["18–25", "25–35", "35–55", "55+"],
    },
    {
      question: "Jesu li tvoje bore vidljive i kad ne pokazuješ emocije?",
      options: [
        "Ne, samo kad se smijem",
        "Ponekad",
        "Da, stalno su vidljive",
      ],
    },
    {
      question: "Gdje su najizraženije bore?",
      options: ["Čelo", "Oko očiju", "Oko usana i brade"],
    },
    {
      question: "Jesi li već isprobala tretmane za bore?",
      options: [
        "Ne još",
        "Da, ali nije pomoglo",
        "Da, i djelomično je pomoglo",
      ],
    },
    {
      question: "Koliko ti je važno da bore nestanu ili se smanje?",
      options: [
        "Nije mi jako važno",
        "Željela bih poboljšanje",
        "To mi je jako bitno",
      ],
    },
  ],
  podocnjaci: [
    {
      question: "Koliko dugo imaš problema s podočnjacima?",
      options: ["Manje od 6 mjeseci", "1–2 godine", "Više od 2 godine"],
    },
    {
      question: "Kako bi opisala podočnjake?",
      options: [
        "Blagi i povremeni",
        "Tamni i često prisutni",
        "Tamni i natečeni stalno",
      ],
    },
    {
      question: "Jesi li već nešto pokušala?",
      options: ["Ne još", "Kreme i serumi", "Tretmane kod stručnjaka"],
    },
    {
      question: "Koliko utječu na tvoje samopouzdanje?",
      options: [
        "Ne smetaju mi",
        "Povremeno me smetaju",
        "Smeta me svaki dan",
      ],
    },
    {
      question: "Koliko si spremna uložiti u rješenje?",
      options: [
        "Tek želim istražiti",
        "Uložila bih umjereno",
        "Spremna sam ozbiljno se posvetiti",
      ],
    },
  ],
  celulit: [
    {
      question: "Koliko dugo imaš celulit?",
      options: ["Godinu dana ili manje", "Više od 2 godine", "Oduvijek"],
    },
    {
      question: "Gdje se najviše vidi?",
      options: ["Bedra", "Stražnjica", "Trbuh i bokovi"],
    },
    {
      question: "Kakav je?",
      options: [
        "Vidljiv samo kad pritisnem kožu",
        "Vidljiv kad sjedim",
        "Vidljiv i u stajanju",
      ],
    },
    {
      question: "Jesi li već probala nešto?",
      options: ["Kreme", "Masaže", "Profesionalne tretmane"],
    },
    {
      question: "Koliko te frustrira?",
      options: ["Ne previše", "Povremeno", "Svakodnevno mi smeta"],
    },
  ],
  strije: [
    {
      question: "Koliko su stare tvoje strije?",
      options: [
        "Nastale nedavno",
        "Starije od godinu dana",
        "Imaš ih oduvijek",
      ],
    },
    {
      question: "Koje su boje?",
      options: ["Ružičaste", "Bijele", "Kombinacija"],
    },
    {
      question: "Gdje se nalaze?",
      options: ["Trbuh", "Bedra i stražnjica", "Ruke i leđa"],
    },
    {
      question: "Jesi li ih pokušala tretirati?",
      options: [
        "Nisam još",
        "Prirodnim metodama",
        "Stručnim tretmanima",
      ],
    },
    {
      question: "Kako se osjećaš kad ih vidiš u ogledalu?",
      options: [
        "Priznajem ih",
        "Želim ih smanjiti",
        "Želim da nestanu",
      ],
    },
  ],
  oziljci: [
    {
      question: "Gdje se nalazi ožiljak koji želiš tretirati?",
      options: ["Lice", "Tijelo", "Više različitih mjesta"],
    },
    {
      question: "Kakav je ožiljak?",
      options: [
        "Površinski i svijetao",
        "Crven ili pigmentiran",
        "Dubok ili ispupčen",
      ],
    },
    {
      question: "Koliko je star ožiljak?",
      options: ["Manje od 6 mjeseci", "1–2 godine", "Više od 2 godine"],
    },
    {
      question: "Kako si ga do sada pokušavala ukloniti?",
      options: [
        "Nisam ništa",
        "Prirodni pripravci",
        "Profesionalni tretmani",
      ],
    },
    {
      question: "Koliko bi ti značilo da ga ublažimo?",
      options: [
        "Bila bih zadovoljna i s malim poboljšanjem",
        "Važno mi je",
        "To mi je prioritet",
      ],
    },
  ],
  podbradak: [
    {
      question: "Koliko je izražen tvoj podbradak?",
      options: [
        "Jedva primjetan",
        "Primjetan na fotografijama",
        "Vidljiv u svakodnevici",
      ],
    },
    {
      question: "Imaš li višak kilograma?",
      options: ["Ne", "Nešto malo", "Da"],
    },
    {
      question: "Je li podbradak tu oduvijek ili se pojavio kasnije?",
      options: ["Oduvijek", "Nakon debljanja", "Nakon 30-e godine"],
    },
    {
      question: "Jesi li pokušala vježbe, masaže ili tretmane?",
      options: [
        "Ne još",
        "Da, bez većih rezultata",
        "Da, s djelomičnim uspjehom",
      ],
    },
    {
      question: "Koliko te estetski smeta?",
      options: ["Nimalo", "Povremeno", "Vrlo često"],
    },
  ],
  trbuh: [
    {
      question: "Koliko je opušten trbuh?",
      options: ["Blago", "Umjereno", "Jako"],
    },
    {
      question: "Imaš li višak kože ili samo masno tkivo?",
      options: ["Više masnoće", "Više kože", "Kombinacija"],
    },
    {
      question: "Jesi li rodila ili naglo smršavila?",
      options: ["Nisam", "Rodila sam", "Naglo smršavila"],
    },
    {
      question: "Koliko dugo želiš riješiti taj problem?",
      options: [
        "Tek razmišljam",
        "Nekoliko mjeseci",
        "Godinama",
      ],
    },
    {
      question: "Koliko si spremna uložiti u rješenje?",
      options: [
        "Samo informativno",
        "Umjereno",
        "Spremna sam se ozbiljno posvetiti",
      ],
    },
  ],
  antiage: [
    {
      question: "Imaš li osjećaj da ti lice „visi“?",
      options: ["Ne", "Povremeno", "Da, jako"],
    },
    {
      question: "Kako bi opisala tonus kože?",
      options: ["Napeto", "Malo opušteno", "Vidljivo opušteno"],
    },
    {
      question: "Koja ti je zona najproblematičnija?",
      options: ["Čeljust", "Obrazi", "Sve ukupno"],
    },
    {
      question: "Jesi li već radila tretmane zatezanja?",
      options: ["Ne još", "Jednom ili dva puta", "Redovito"],
    },
    {
      question: "Koliko ti je važno da lice izgleda zategnuto i svježe?",
      options: [
        "Ne jako",
        "Voljela bih poboljšanje",
        "Vrlo važno",
      ],
    },
  ],
};

const Calculator = () => {
  const [step, setStep] = useState(0);
  const [problem, setProblem] = useState("");
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (step < allQuestions[problem].length - 1) {
      setStep(step + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (answers) => {
    let points = 0;
    answers.forEach((a) => {
      if (
        a.includes("stalno") ||
        a.includes("55+") ||
        a.includes("jako") ||
        a.includes("svakodnevno") ||
        a.includes("prioritet") ||
        a.includes("Više od 2 godine")
      ) {
        points += 3;
      } else if (
        a.includes("Povremeno") ||
        a.includes("35–55") ||
        a.includes("djelomično") ||
        a.includes("često") ||
        a.includes("nešto") ||
        a.includes("kombinacija")
      ) {
        points += 2;
      } else {
        points += 1;
      }
    });

    const minTretmana = points >= 12 ? 15 : 10;
    setResult(
      `Preporučujemo minimalno ${minTretmana} tretmana za vidljive rezultate. Do kraja mjeseca traje promotivna akcija -50% na sve pakete! Odgovori na upitnik i rezerviraj svoj termin.`
    );
  };

  const problems = {
    bore: "Uklanjanje bora",
    podocnjaci: "Uklanjanje podočnjaka",
    celulit: "Uklanjanje celulita",
    strije: "Uklanjanje strija",
    oziljci: "Uklanjanje ožiljaka",
    podbradak: "Uklanjanje podbratka",
    trbuh: "Zatezanje trbuha",
    antiage: "Zatezanje i anti-age lica",
  };

  if (!problem) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold mb-4">
          Koji problem želiš tretirati?
        </h2>
        <div className="grid gap-2">
          {Object.entries(problems).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setProblem(key)}
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold mb-4">Rezultat</h2>
        <p>{result}</p>
        <button
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          onClick={() => {
            setProblem("");
            setStep(0);
            setAnswers([]);
            setResult(null);
          }}
        >
          Pokreni ponovno
        </button>
      </div>
    );
  }

  const currentQuestion = allQuestions[problem][step];

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-lg font-semibold mb-3">
        {step + 1}. {currentQuestion.question}
      </h2>
      <div className="grid gap-2">
        {currentQuestion.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt)}
            className="bg-gray-200 py-2 px-4 rounded hover:bg-gray-300"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
