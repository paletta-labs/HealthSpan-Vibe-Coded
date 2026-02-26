import { BiomarkerDefinition } from './types';

export const BIOMARKERS: BiomarkerDefinition[] = [
  {
    id: 'fasting_glucose',
    name: 'Fasting Glucose',
    category: 'metabolic',
    unit: 'mg/dL',
    description: 'Measures blood sugar levels after fasting. Key indicator for diabetes risk.',
    ranges: [
      { max: 70, level: 'critical', label: 'Hypoglycemia' },
      { min: 70, max: 99, level: 'optimal', label: 'Normal' },
      { min: 100, max: 125, level: 'borderline', label: 'Prediabetes' },
      { min: 126, level: 'high', label: 'Diabetes' },
    ],
    recommendation: 'Maintain a balanced diet low in refined sugars and engage in regular physical activity.',
  },
  {
    id: 'hba1c',
    name: 'HbA1c',
    category: 'metabolic',
    unit: '%',
    description: 'Average blood sugar levels over the past 2-3 months.',
    ranges: [
      { max: 5.6, level: 'optimal', label: 'Normal' },
      { min: 5.7, max: 6.4, level: 'borderline', label: 'Prediabetes' },
      { min: 6.5, level: 'high', label: 'Diabetes' },
    ],
    recommendation: 'Consistent exercise and a diet rich in fiber can help stabilize long-term blood sugar.',
  },
  {
    id: 'total_cholesterol',
    name: 'Total Cholesterol',
    category: 'cardiovascular',
    unit: 'mg/dL',
    description: 'Total amount of cholesterol in your blood.',
    ranges: [
      { max: 199, level: 'optimal', label: 'Desirable' },
      { min: 200, max: 239, level: 'borderline', label: 'Borderline High' },
      { min: 240, level: 'high', label: 'High' },
    ],
    recommendation: 'Reduce saturated fats and eliminate trans fats. Increase soluble fiber intake.',
  },
  {
    id: 'ldl',
    name: 'LDL Cholesterol',
    category: 'cardiovascular',
    unit: 'mg/dL',
    description: 'Low-density lipoprotein, often called "bad" cholesterol.',
    ranges: [
      { max: 99, level: 'optimal', label: 'Optimal' },
      { min: 100, max: 129, level: 'normal', label: 'Near Optimal' },
      { min: 130, max: 159, level: 'borderline', label: 'Borderline High' },
      { min: 160, max: 189, level: 'high', label: 'High' },
      { min: 190, level: 'critical', label: 'Very High' },
    ],
    recommendation: 'Limit red meat and full-fat dairy. Consider plant sterols and regular aerobic exercise.',
  },
  {
    id: 'hdl',
    name: 'HDL Cholesterol',
    category: 'cardiovascular',
    unit: 'mg/dL',
    description: 'High-density lipoprotein, often called "good" cholesterol.',
    ranges: [
      { max: 39, level: 'high', label: 'Low (High Risk)' },
      { min: 40, max: 59, level: 'normal', label: 'Acceptable' },
      { min: 60, level: 'optimal', label: 'Optimal' },
    ],
    recommendation: 'Regular aerobic exercise, quitting smoking, and consuming healthy fats (like olive oil) can increase HDL.',
  },
  {
    id: 'triglycerides',
    name: 'Triglycerides',
    category: 'cardiovascular',
    unit: 'mg/dL',
    description: 'A type of fat found in your blood.',
    ranges: [
      { max: 149, level: 'optimal', label: 'Normal' },
      { min: 150, max: 199, level: 'borderline', label: 'Borderline High' },
      { min: 200, max: 499, level: 'high', label: 'High' },
      { min: 500, level: 'critical', label: 'Very High' },
    ],
    recommendation: 'Limit sugar and refined carbohydrates. Reduce alcohol consumption and increase omega-3 fatty acids.',
  },
  {
    id: 'crp',
    name: 'hs-CRP',
    category: 'inflammation',
    unit: 'mg/L',
    description: 'High-sensitivity C-reactive protein, a marker of inflammation.',
    ranges: [
      { max: 0.9, level: 'optimal', label: 'Low Risk' },
      { min: 1.0, max: 3.0, level: 'normal', label: 'Average Risk' },
      { min: 3.1, max: 10.0, level: 'high', label: 'High Risk' },
      { min: 10.1, level: 'critical', label: 'Very High (Acute Inflammation)' },
    ],
    recommendation: 'An anti-inflammatory diet (Mediterranean), stress management, and adequate sleep can lower CRP.',
  },
  {
    id: 'vitamin_d',
    name: 'Vitamin D (25-OH)',
    category: 'general',
    unit: 'ng/mL',
    description: 'Crucial for bone health, immune function, and mood.',
    ranges: [
      { max: 19, level: 'high', label: 'Deficient' },
      { min: 20, max: 29, level: 'borderline', label: 'Insufficient' },
      { min: 30, max: 100, level: 'optimal', label: 'Sufficient' },
      { min: 101, level: 'critical', label: 'Toxicity Possible' },
    ],
    recommendation: 'Safe sun exposure and vitamin D3 supplementation if levels are low.',
  },
  {
    id: 'systolic_bp',
    name: 'Systolic Blood Pressure',
    category: 'cardiovascular',
    unit: 'mmHg',
    description: 'Pressure in your arteries when your heart beats.',
    ranges: [
      { max: 119, level: 'optimal', label: 'Normal' },
      { min: 120, max: 129, level: 'borderline', label: 'Elevated' },
      { min: 130, max: 139, level: 'high', label: 'Stage 1 Hypertension' },
      { min: 140, level: 'critical', label: 'Stage 2 Hypertension' },
    ],
    recommendation: 'Reduce sodium intake, manage stress, and maintain a healthy weight.',
  },
  {
    id: 'diastolic_bp',
    name: 'Diastolic Blood Pressure',
    category: 'cardiovascular',
    unit: 'mmHg',
    description: 'Pressure in your arteries when your heart rests between beats.',
    ranges: [
      { max: 79, level: 'optimal', label: 'Normal' },
      { min: 80, max: 89, level: 'high', label: 'Stage 1 Hypertension' },
      { min: 90, level: 'critical', label: 'Stage 2 Hypertension' },
    ],
    recommendation: 'Regular aerobic exercise and a diet rich in potassium can help lower diastolic pressure.',
  },
  {
    id: 'creatinine',
    name: 'Creatinine',
    category: 'metabolic',
    unit: 'mg/dL',
    description: 'Indicator of kidney function.',
    ranges: [
      { max: 0.5, level: 'borderline', label: 'Low' },
      { min: 0.6, max: 1.2, level: 'optimal', label: 'Normal' },
      { min: 1.3, max: 1.9, level: 'high', label: 'High' },
      { min: 2.0, level: 'critical', label: 'Very High' }
    ],
    recommendation: 'Stay hydrated and avoid excessive protein intake if levels are high.'
  },
  {
    id: 'ferritin',
    name: 'Serum Ferritin',
    category: 'general',
    unit: 'ng/mL',
    description: 'Measures the amount of iron stored in the body.',
    ranges: [
      { max: 29, level: 'high', label: 'Deficient' },
      { min: 30, max: 200, level: 'optimal', label: 'Normal' },
      { min: 201, max: 400, level: 'borderline', label: 'Elevated' },
      { min: 401, level: 'critical', label: 'Very High' }
    ],
    recommendation: 'Adjust iron intake. If low, consume iron-rich foods; if high, consult a doctor.'
  },
  {
    id: 'ggt',
    name: 'Gamma GT (GGT)',
    category: 'metabolic',
    unit: 'U/L',
    description: 'Liver enzyme that indicates liver health and possible alcohol toxicity.',
    ranges: [
      { max: 30, level: 'optimal', label: 'Optimal' },
      { min: 31, max: 50, level: 'normal', label: 'Normal' },
      { min: 51, max: 100, level: 'high', label: 'High' },
      { min: 101, level: 'critical', label: 'Very High' }
    ],
    recommendation: 'Limit alcohol consumption and avoid hepatotoxic medications.'
  },
  {
    id: 'hemoglobin',
    name: 'Hemoglobin (CBC)',
    category: 'general',
    unit: 'g/dL',
    description: 'Protein in red blood cells that carries oxygen. Part of a Complete Blood Count.',
    ranges: [
      { max: 11.9, level: 'high', label: 'Low (Anemia)' },
      { min: 12.0, max: 17.5, level: 'optimal', label: 'Normal' },
      { min: 17.6, level: 'critical', label: 'High' }
    ],
    recommendation: 'Ensure adequate intake of iron, vitamin B12, and folate.'
  },
  {
    id: 'free_t4',
    name: 'Free T4',
    category: 'hormonal',
    unit: 'ng/dL',
    description: 'Thyroid hormone that regulates metabolism.',
    ranges: [
      { max: 0.7, level: 'high', label: 'Low (Hypothyroidism)' },
      { min: 0.8, max: 1.8, level: 'optimal', label: 'Normal' },
      { min: 1.9, level: 'high', label: 'High (Hyperthyroidism)' }
    ],
    recommendation: 'Consult an endocrinologist if levels are outside the normal range.'
  },
  {
    id: 'ast',
    name: 'AST (SGOT)',
    category: 'metabolic',
    unit: 'U/L',
    description: 'Enzyme found in the liver and heart. High levels indicate tissue damage.',
    ranges: [
      { max: 35, level: 'optimal', label: 'Normal' },
      { min: 36, max: 100, level: 'high', label: 'High' },
      { min: 101, level: 'critical', label: 'Very High' }
    ],
    recommendation: 'Maintain a healthy weight and avoid excessive alcohol.'
  },
  {
    id: 'alt',
    name: 'ALT (SGPT)',
    category: 'metabolic',
    unit: 'U/L',
    description: 'Enzyme found primarily in the liver. Best test for detecting liver damage.',
    ranges: [
      { max: 35, level: 'optimal', label: 'Normal' },
      { min: 36, max: 100, level: 'high', label: 'High' },
      { min: 101, level: 'critical', label: 'Very High' }
    ],
    recommendation: 'Maintain a healthy diet and limit alcohol intake to protect liver function.'
  },
  {
    id: 'tsh',
    name: 'Ultrasensitive TSH',
    category: 'hormonal',
    unit: 'mIU/L',
    description: 'Thyroid-stimulating hormone. Evaluates overall thyroid function.',
    ranges: [
      { max: 0.3, level: 'high', label: 'Low (Hyperthyroidism)' },
      { min: 0.4, max: 4.0, level: 'optimal', label: 'Normal' },
      { min: 4.1, max: 10.0, level: 'borderline', label: 'Subclinical Hypothyroidism' },
      { min: 10.1, level: 'critical', label: 'High (Hypothyroidism)' }
    ],
    recommendation: 'Requires medical evaluation if abnormal. Iodine intake may need adjustment.'
  },
  {
    id: 'urea',
    name: 'Urea',
    category: 'metabolic',
    unit: 'mg/dL',
    description: 'Waste product filtered by the kidneys.',
    ranges: [
      { max: 15, level: 'borderline', label: 'Low' },
      { min: 16, max: 45, level: 'optimal', label: 'Normal' },
      { min: 46, max: 80, level: 'high', label: 'High' },
      { min: 81, level: 'critical', label: 'Very High' }
    ],
    recommendation: 'Stay hydrated. High protein diets can elevate urea levels.'
  },
  {
    id: 'urine_protein',
    name: 'Urine Protein (Urinalysis)',
    category: 'general',
    unit: 'mg/dL',
    description: 'Protein in urine. A key marker in routine urinalysis for kidney health.',
    ranges: [
      { max: 14, level: 'optimal', label: 'Negative / Trace' },
      { min: 15, max: 30, level: 'borderline', label: 'Mildly Elevated' },
      { min: 31, level: 'critical', label: 'High (Proteinuria)' }
    ],
    recommendation: 'Persistent protein in urine requires nephrology evaluation.'
  },
  {
    id: 'vitamin_b12',
    name: 'Vitamin B12',
    category: 'general',
    unit: 'pg/mL',
    description: 'Essential for nerve tissue health, brain function, and red blood cell production.',
    ranges: [
      { max: 199, level: 'critical', label: 'Deficient' },
      { min: 200, max: 399, level: 'borderline', label: 'Low Normal' },
      { min: 400, max: 900, level: 'optimal', label: 'Normal' },
      { min: 901, level: 'high', label: 'High' }
    ],
    recommendation: 'Consider B12 supplementation or consuming more animal products/fortified foods if low.'
  },
  {
    id: 'uric_acid',
    name: 'Uric Acid',
    category: 'metabolic',
    unit: 'mg/dL',
    description: 'Produced during the breakdown of purines. High levels can cause gout.',
    ranges: [
      { max: 2.4, level: 'borderline', label: 'Low' },
      { min: 2.5, max: 7.0, level: 'optimal', label: 'Normal' },
      { min: 7.1, max: 8.5, level: 'high', label: 'High' },
      { min: 8.6, level: 'critical', label: 'Very High' }
    ],
    recommendation: 'Limit purine-rich foods (red meat, seafood) and alcohol. Drink plenty of water.'
  },
  {
    id: 'transferrin_sat',
    name: 'Transferrin Saturation',
    category: 'general',
    unit: '%',
    description: 'Indicates how much iron is bound to transferrin in the blood.',
    ranges: [
      { max: 19, level: 'high', label: 'Low (Iron Deficiency)' },
      { min: 20, max: 50, level: 'optimal', label: 'Normal' },
      { min: 51, level: 'critical', label: 'High (Iron Overload)' }
    ],
    recommendation: 'If low, increase iron intake. If high, evaluate for hemochromatosis.'
  }
];

export const RISK_COLORS = {
  optimal: 'text-emerald-600 bg-emerald-100 border-emerald-200',
  normal: 'text-blue-600 bg-blue-100 border-blue-200',
  borderline: 'text-amber-600 bg-amber-100 border-amber-200',
  high: 'text-orange-600 bg-orange-100 border-orange-200',
  critical: 'text-red-600 bg-red-100 border-red-200',
};

export const RISK_BAR_COLORS = {
  optimal: 'bg-emerald-500',
  normal: 'bg-blue-500',
  borderline: 'bg-amber-500',
  high: 'bg-orange-500',
  critical: 'bg-red-500',
};
