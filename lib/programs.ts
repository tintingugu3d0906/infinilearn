export function generateProgram(goal: string) {
  const db: Record<string, string[]> = {
    football: ["dribble", "tir", "passe", "match"],
    basketball: ["dribble", "shoot", "defense", "match"],
    volleyball: ["passe", "service", "smash", "match"],
    handball: ["tir", "passe", "defense", "match"],
    hiphop: ["rythme", "moves", "choré", "freestyle"],
    tennis: ["coup droit", "revers", "service", "match"],
    muscu: ["push", "pull", "legs", "repos"],
    code: ["HTML", "CSS", "JS", "projet"]
  };

  return db[goal] || ["Programme IA en génération..."];
}
