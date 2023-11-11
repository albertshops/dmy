function parse(string: string) {
  const [day, month, year] = string.split("/");
  return new Date(`${year}-${month}-${day}`);
}

function safeParse(string: string) {
  try {
    const date = parse(string);
    return { date, error: null };
  } catch (e) {
    const error = new Error("failed to parse date");
    return { date: undefined, error };
  }
}

function format(date: Date) {
  const [year, month, day] = date.toISOString().slice(0, 10).split("-");
  return `${day}/${month}/${year}`;
}

export { parse, safeParse, format };
