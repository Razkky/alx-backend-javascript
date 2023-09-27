export default function guardrail(mathFunction) {
  const newArray = [];

  try {
    newArray.push(mathFunction());
  } catch (err) {
    newArray.push(err.toString());
  } finally {
    newArray.push('Guardrail was processed');
  }
  return newArray;
}
