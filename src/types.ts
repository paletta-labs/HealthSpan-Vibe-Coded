export type Gender = 'male' | 'female' | 'other';
export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-' | 'unknown';

export interface UserProfile {
  age: number | null;
  gender: Gender;
  heightCm: number | null;
  weightKg: number | null;
  bloodGroup?: BloodGroup;
}

export type RiskLevel = 'optimal' | 'normal' | 'borderline' | 'high' | 'critical';

export interface BiomarkerRange {
  min?: number;
  max?: number;
  level: RiskLevel;
  label: string;
}

export interface BiomarkerDefinition {
  id: string;
  name: string;
  category: 'metabolic' | 'cardiovascular' | 'inflammation' | 'hormonal' | 'general';
  unit: string;
  ranges: BiomarkerRange[];
  description: string;
  recommendation?: string;
}

export interface BiomarkerResult {
  biomarkerId: string;
  value: number;
  date: string;
}
