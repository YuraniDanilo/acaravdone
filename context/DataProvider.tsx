// context/DataProvider.jsx
"use client";
import React, { useState, useEffect, createContext } from "react";
import Papa from "papaparse";

export const DataContext = createContext();

const SHEET_ESTUDOS =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRg3zmeoUqUOh08hGDourCsZsHh0VD_rdGh_Kwy3IwdOm_5tMwGwM_V-SrAsyUgiwQaxvaqRb1GqKgB/pub?gid=0&single=true&output=csv";
const SHEET_PROFECIAS =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRg3zmeoUqUOh08hGDourCsZsHh0VD_rdGh_Kwy3IwdOm_5tMwGwM_V-SrAsyUgiwQaxvaqRb1GqKgB/pub?gid=2131997092&single=true&output=csv";
const SHEET_DOWNLOADS =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRg3zmeoUqUOh08hGDourCsZsHh0VD_rdGh_Kwy3IwdOm_5tMwGwM_V-SrAsyUgiwQaxvaqRb1GqKgB/pub?gid=715916802&single=true&output=csv";

export default function DataProvider({ children }) {
  const [studies, setStudies] = useState([]);
  const [prophecies, setProphecies] = useState({});
  const [downloads, setDownloads] = useState([]);
  const [selectedStudy, setSelectedStudy] = useState(null);

  // Estudos
  useEffect(() => {
    Papa.parse(SHEET_ESTUDOS, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const data = results.data.map((r, i) => ({
          id: r.Id || i.toString(),
          title: r.Title || "Sem título",
          description: r.Description || "",
          image: r.Image || "https://via.placeholder.com/400x250?text=Estudo",
          content: r.Content || "",
          year: r.Year || "",
          type: "study",
        }));
        setStudies(data);
      },
      error: (error) => console.error("Error fetching studies:", error),
    });
  }, []);

  // Profecias
  useEffect(() => {
    Papa.parse(SHEET_PROFECIAS, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const data = results.data.map((r, i) => ({
          id: r.Id || i.toString(),
          title: r.Title || "Profecia sem título",
          description: r.Description || "",
          image: r.Image || "https://via.placeholder.com/400x250?text=Profecia",
          content: r.Content || "",
          year: r.Year || "Outros",
          type: "prophecy",
        }));

        const grouped = data.reduce((acc, item) => {
          const year = item.year || "Outros";
          if (!acc[year]) acc[year] = [];
          acc[year].push(item);
          return acc;
        }, {});
        setProphecies(grouped);
      },
      error: (error) => console.error("Error fetching prophecies:", error),
    });
  }, []);

  // Downloads
  useEffect(() => {
    Papa.parse(SHEET_DOWNLOADS, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const data = results.data.map((r, i) => {
          let fileUrl = r.fileUrl?.trim() || "";
          if (fileUrl.includes("drive.google.com")) {
            const idMatch = fileUrl.match(/[-\w]{25,}/);
            if (idMatch) {
              fileUrl = `https://drive.google.com/uc?export=download&id=${idMatch[0]}`;
            }
          }
          return {
            id: r.Id || i.toString(),
            title: r.Title || "Sem título",
            description: r.Description || "",
            image:
              r.Image?.trim() ||
              "https://via.placeholder.com/400x250?text=Livro",
            file: fileUrl || "#",
          };
        });
        setDownloads(data);
      },
      error: (error) => console.error("Error fetching downloads:", error),
    });
  }, []);

  return (
    <DataContext.Provider
      value={{ studies, prophecies, downloads, selectedStudy, setSelectedStudy }}
    >
      {children}
    </DataContext.Provider>
  );
}
