const generateRandomIncrement = (timestampt) => {
  // Obtener la fecha actual
  const date = new Date(timestampt)
  const currentDate = new Date();

  // Calcular la diferencia en días entre la fecha actual y la fecha inicial
  const timeDiff = Math.abs(currentDate.getTime() - date.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  // Generar un número aleatorio basado en la diferencia de días
  const randomIncrement = Math.floor(date.getSeconds() * (diffDays + currentDate.getHours()));

  return randomIncrement;
}

export { generateRandomIncrement }
