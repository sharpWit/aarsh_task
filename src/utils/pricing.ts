export const calculateTotal = (selectedToys) => {
  let totalPrice = 0;
  let totalVolume = 0;

  selectedToys.forEach((toy) => {
    totalPrice += toy.price;
    totalVolume += toy.size ** 3; // assuming cubic volume for simplicity
  });

  const packageCost = getPackageCost(totalVolume);
  return totalPrice + packageCost;
};

const getPackageCost = (volume) => {
  if (volume <= 20 ** 3) return 10;
  if (volume <= 30 ** 3) return 20;
  return 30;
};
