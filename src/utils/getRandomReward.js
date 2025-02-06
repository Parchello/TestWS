// src/utils/getRandomReward.js

export const getRandomReward = (enemyId) => {
  // Нагороди
  const rewards = [
    { name: "Золото", type: "gold" },
    { name: "Зілля здоров'я", type: "healthPotion" },
    { name: "Новий рівень", type: "levelUp" },
    null, // Без нагороди
    { name: "Рідкісна зброя", type: "rareWeapon" }, // Рідкісна річ
  ];

  let rewardChance;

  // Визначаємо шанси залежно від ворога
  switch (enemyId) {
    case 1: // Goblin
      rewardChance = 0.2; // 20% шанс
      break;
    case 4: // Dragon
      rewardChance = 0.8; // 80% шанс
      break;
    case 10: // Mummy
      rewardChance = 0.4; // 40% шанс
      break;
    default: // Для всіх інших
      rewardChance = 0.5; // 50% шанс
      break;
  }

  // Генерація випадкового числа для шансів
  const randomChance = Math.random();
  if (randomChance < rewardChance) {
    // Якщо шанс випадіння нагороди
    const randomRewardIndex = Math.floor(Math.random() * rewards.length);
    return rewards[randomRewardIndex];
  }
  return null; // Без нагороди
};
