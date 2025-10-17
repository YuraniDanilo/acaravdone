"use client";

import React, { createContext, useState, useEffect } from "react";

// Cria o contexto global
export const DataContext = createContext();

export default function AppContextProvider({ children }) {
  const [studies, setStudies] = useState([]);
  const [prophecies, setProphecies] = useState({});
  const [selectedStudy, setSelectedStudy] = useState(null);

  // Exemplo simples: você pode trocar isso por fetch() real
  useEffect(() => {
    // 🔹 Simula carregamento de dados
    setStudies([
      {
        id: "1",
        type: "study",
        title: "O Amor de Deus",
        description: "Uma reflexão sobre o amor que destrói o ego.",
        image: "https://images.pexels.com/photos/681391/pexels-photo-681391.jpeg",
        content: "Conteúdo completo do estudo...",
      },
    ]);

    setProphecies({
      recent: [
        {
          id: "p1",
          type: "prophecy",
          title: "A Promessa e o Fim",
          description: "Palavras sobre os tempos finais.",
          image:
            "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
          content: "Conteúdo completo da profecia...",
        },
      ],
    });
  }, []);

  return (
    <DataContext.Provider
      value={{
        studies,
        prophecies,
        selectedStudy,
        setSelectedStudy,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
