import { useState } from "react";
import React from "react";
import "./App.css";
const Zenzen = () => {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [stages, setStages] = useState([
    {
      value: "new candidates",
      candidates: [{ name: "amin", info: "studiert Maschinenbau" }],
    },
    {
      value: "bewerbungsprozess",
      candidates: [
        { name: "Jonas", info: "studiert WIWI und spielt gerne Fußball" },
      ],
    },
    {
      value: "akzeptiert",
      candidates: [{ name: "Axel", info: "Kommt aus Frankreich" }],
    },
  ]);

  const handleAddNewCandidate = () => {
    const newNewCandidates = [
      ...stages[0].candidates,
      { name: name, info: info },
    ];
    const newStages = stages.map((val) => {
      if (val.value === "new candidates") {
        return { value: val.value, candidates: newNewCandidates };
      } else {
        return val;
      }
    });

    setStages(newStages);
    setName("");
  };

  const handleMoveCandidate = (
    candidate: { name: string; info: string },
    stageValue: string,
    newStage: number,
    where: string
  ) => {
    const newCandidates = [...stages[newStage].candidates, candidate];

    const newStages = stages.map((val) => {
      if (where === stageValue) {
        if (val.value === where) {
          return val;
        }
      }
      if (val.value === where) {
        return { value: val.value, candidates: newCandidates };
      }
      if (val.value === stageValue) {
        return {
          value: val.value,
          candidates: val.candidates.filter(
            (word) => candidate.name !== word.name
          ),
        };
      } else {
        return val;
      }
    });

    setStages(newStages);
    setName("");
  };

  return (
    <div>
      <>
        enter new candidates:
        <input
          type={"text"}
          value={name}
          onInput={(evt) => setName(evt.currentTarget.value)}
        />
        enter information of candidates:
        <input
          type={"text"}
          value={info}
          onInput={(evt) => setInfo(evt.currentTarget.value)}
        />
        <button onClick={handleAddNewCandidate}>submit</button>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            gap: "1rem",
          }}
        >
          {stages.map((stage, stageIndex) => {
            return (
              <div>
                <h1>{stage.value}</h1>
                <div>
                  {stage.candidates.map((candidate) => {
                    return (
                      <>
                        <div>Name: {candidate.name}</div>
                        <div>Infos: {candidate.info}</div>
                        <button
                          onClick={() =>
                            handleMoveCandidate(
                              candidate,
                              stage.value,
                              0,
                              "new candidates"
                            )
                          }
                        >
                          to new candidates
                        </button>
                        <button
                          onClick={() =>
                            handleMoveCandidate(
                              candidate,
                              stage.value,
                              1,
                              "bewerbungsprozess"
                            )
                          }
                        >
                          to bewerbungsprozess
                        </button>
                        <button
                          onClick={() =>
                            handleMoveCandidate(
                              candidate,
                              stage.value,
                              2,
                              "akzeptiert"
                            )
                          }
                        >
                          to akzeptiert
                        </button>
                      </>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </>
    </div>
  );
};

export default Zenzen;
