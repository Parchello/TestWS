import  { useState } from "react";
// import HealthBar from "../HealthBar/HealthBar.jsx"; // Імпортуємо компонент

const HeroComponent = () => {
	const [currentHealth, setCurrentHealth] = useState(100); // Поточне здоров'я героя
	const [maxHealth, setMaxHealth] = useState(150); // Максимальне здоров'я героя

	return (
		<div>
			<h2>Hero Health</h2>
			{/*<HealthBar currentHealth={currentHealth} maxHealth={maxHealth} />*/}

			{/* Наприклад, кнопки для зменшення/збільшення здоров'я */}
			<button onClick={() => setCurrentHealth((prev) => Math.max(prev - 10, 0))}>
				Take Damage
			</button>
			<button onClick={() => setCurrentHealth((prev) => Math.min(prev + 10, maxHealth))}>
				Heal
			</button>

			{/* Кнопки для зміни максимального здоров'я */}
			<button onClick={() => setMaxHealth((prev) => prev + 50)}>
				Increase Max Health
			</button>
			<button onClick={() => setMaxHealth((prev) => Math.max(prev - 50, currentHealth))}>
				Decrease Max Health
			</button>
		</div>
	);
};

export default HeroComponent;
