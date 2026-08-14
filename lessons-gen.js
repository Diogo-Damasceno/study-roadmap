/* lessons-gen.js — gera a "Aula prática" de cada modulo.
   Se existir override em RMAP_LESSONS (lessons.js), usa ele.
   Senao, gera a partir de explain (documentacao) + exercicios do modulo.
   Assim TODAS as 34 trilhas tem aula pratica com doc e exercicios. */
function buildLesson(areaId, stage, override) {
  if (override && override.sections) return override;
  const topicDocs = (stage.explain || []).map(e =>
    `**${e.topic.replace(/\.$/, "")}** — ${e.text}`);
  const doc = (stage.blurb ? stage.blurb + ". " : "") + topicDocs.join("  ");
  const exercises = (stage.exercises || []).map(e => ({
    t: e.t, tip: e.tip, check: e.check
  }));
  return {
    intro: `Aula prática de ${stage.title}. Leia a documentação dos assuntos da etapa e faça os exercícios abaixo.`,
    sections: [
      { h: `${stage.title}`, doc: doc, exercises: exercises }
    ]
  };
}

module.exports = { buildLesson };
