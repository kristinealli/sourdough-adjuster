import React, { useState } from "react";

export default function SourdoughAdjuster() {
	const [starter, setStarter] = useState(1); // Default starter in cups

	const originalFlour = 5; // Total flour in the original recipe
	const originalWater = 1.5; // Total water in the original recipe
	const originalStarter = 1; // Default starter in the original recipe

	const starterFlour = starter / 2; // Each cup of starter is 1/2 cup flour
	const starterWater = starter / 2; // Each cup of starter is 1/2 cup water

	const flourAdjustment = (originalStarter - starter) / 2;
	const waterAdjustment = (originalStarter - starter) / 2;

	const adjustedFlour = originalFlour + flourAdjustment;
	const adjustedWater = originalWater + waterAdjustment;

	// Conversion factors
	const flourToGrams = 120; // 1 cup of flour is approximately 120 grams
	const waterToGrams = 237; // 1 cup of water is approximately 237 grams

	const adjustedFlourGrams = adjustedFlour * flourToGrams;
	const adjustedWaterGrams = adjustedWater * waterToGrams;

	const starterFlourGrams = starterFlour * flourToGrams;
	const starterWaterGrams = starterWater * waterToGrams;
	const starterTotalGrams = starterFlourGrams + starterWaterGrams;

	return (
		<div
			style={{
				maxWidth: "400px",
				margin: "auto",
				padding: "20px",
				fontFamily: "Arial",
			}}>
			<h2>Sourdough Recipe Adjuster</h2>
			<label>
				Starter (cups):
				<input
					type='number'
					value={starter}
					onChange={(e) =>
						setStarter(parseFloat(e.target.value) || 0)
					}
					step='0.1'
					min='0'
				/>
			</label>
			<h3>Adjusted Recipe</h3>
			<p>
				Starter: {starter} cups ({starterTotalGrams.toFixed(2)} grams)
			</p>
			<p>
				Flour: {adjustedFlour.toFixed(2)} cups (
				{adjustedFlourGrams.toFixed(2)} grams)
			</p>
			<p>
				Water: {adjustedWater.toFixed(2)} cups (
				{adjustedWaterGrams.toFixed(2)} grams)
			</p>
		</div>
	);
}
