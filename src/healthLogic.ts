import { BiomarkerDefinition, BiomarkerRange, BiomarkerResult, RiskLevel, UserProfile } from './types';
import { BIOMARKERS } from './constants';

export function calculateBMI(heightCm: number, weightKg: number): number {
  if (!heightCm || !weightKg) return 0;
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
}

export function evaluateBiomarker(value: number, definition: BiomarkerDefinition): BiomarkerRange | null {
  for (const range of definition.ranges) {
    const minMatch = range.min === undefined || value >= range.min;
    const maxMatch = range.max === undefined || value <= range.max;
    if (minMatch && maxMatch) {
      return range;
    }
  }
  return null;
}

export function calculateHealthScore(results: BiomarkerResult[], profile: UserProfile): number {
  let score = 100;
  let deductions = 0;
  
  // BMI penalty
  if (profile.heightCm && profile.weightKg) {
    const bmi = calculateBMI(profile.heightCm, profile.weightKg);
    if (bmi > 25) deductions += (bmi - 25) * 2;
    if (bmi < 18.5) deductions += (18.5 - bmi) * 2;
  }

  // Biomarker penalties
  results.forEach(result => {
    const def = BIOMARKERS.find(b => b.id === result.biomarkerId);
    if (!def) return;
    
    const evalResult = evaluateBiomarker(result.value, def);
    if (evalResult) {
      switch (evalResult.level) {
        case 'borderline': deductions += 3; break;
        case 'high': deductions += 8; break;
        case 'critical': deductions += 15; break;
        case 'optimal': deductions -= 1; break; // Bonus for optimal
      }
    }
  });

  return Math.max(0, Math.min(100, Math.round(score - deductions)));
}

export function calculateBiologicalAge(results: BiomarkerResult[], profile: UserProfile): number {
  if (!profile.age) return 0;
  
  let bioAge = profile.age;
  
  // BMI impact
  if (profile.heightCm && profile.weightKg) {
    const bmi = calculateBMI(profile.heightCm, profile.weightKg);
    if (bmi > 25) bioAge += (bmi - 25) * 0.5;
    if (bmi < 18.5) bioAge += (18.5 - bmi) * 0.5;
  }

  // Biomarker impacts (simplified heuristic)
  results.forEach(result => {
    const def = BIOMARKERS.find(b => b.id === result.biomarkerId);
    if (!def) return;
    
    const evalResult = evaluateBiomarker(result.value, def);
    if (evalResult) {
      switch (evalResult.level) {
        case 'borderline': bioAge += 0.5; break;
        case 'high': bioAge += 1.5; break;
        case 'critical': bioAge += 3; break;
        case 'optimal': bioAge -= 0.5; break; // Rejuvenation bonus
      }
    }
  });

  return Math.max(1, Math.round(bioAge * 10) / 10);
}
