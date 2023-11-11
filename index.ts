function parse(string: string) {
  const [day, month, year] = string.split("/");
  return new Date(`${year}-${month}-${day}`);
}

function safeParse(string: string) {
  const date = parse(string);
  if (isNaN(date.getTime()))
    return { date: undefined, error: new Error("Invalid date") };
  return { date, error: null };
}

function format(date: Date) {
  const [year, month, day] = date.toISOString().slice(0, 10).split("-");
  return `${day}/${month}/${year}`;
}

function safeFormat(date: Date, fallback = "Invalid date") {
  try {
    return format(date);
  } catch (e) {
    return fallback;
  }
}

export { parse, safeParse, format, safeFormat };
