import { list } from "./api";
import { api } from "./axios";

export async function loadLists() {
  const toDo = await list(api, "A Fazer");
  const inProgress = await list(api, "Em Progresso");
  const done = await list(api, "Concluído");
  return [
    {
      title: "A Fazer",
      creatable: true,
      cards: toDo.data,
    },
    {
      title: "Em Progresso",
      creatable: false,
      cards: inProgress.data,
    },
    {
      title: "Concluído",
      creatable: false,
      done: true,
      cards: done.data,
    },
  ];
}
