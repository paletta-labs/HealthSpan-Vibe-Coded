import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'pt-BR' | 'es';

export const translations = {
  en: {
    appTitle: 'HealthSpan',
    tabDashboard: 'Dashboard',
    tabProfile: 'Profile',
    tabExams: 'Exams',
    
    profileTitle: 'Basic Profile',
    profileDesc: 'Enter your basic information to help us calculate your health metrics accurately.',
    ageLabel: 'Age (years)',
    genderLabel: 'Gender',
    genderMale: 'Male',
    genderFemale: 'Female',
    genderOther: 'Other',
    heightLabel: 'Height (cm)',
    weightLabel: 'Weight (kg)',
    bloodGroupLabel: 'Blood Group',
    bloodGroupUnknown: 'Unknown',
    calcBmi: 'Calculated BMI',
    bmiUnderweight: 'Underweight',
    bmiNormal: 'Normal weight',
    bmiOverweight: 'Overweight',
    bmiObese: 'Obese',
    btnNextExams: 'Next: Enter Exams',
    
    examsTitle: 'Medical Exams',
    examsDesc: 'Input your latest blood work and exam results.',
    btnViewDashboard: 'View Dashboard',
    catAll: 'All',
    enterValue: 'Enter value in',
    recommendation: 'Recommendation:',
    referenceRanges: 'Reference Ranges:',
    
    welcomeTitle: 'Welcome to HealthSpan',
    welcomeDesc: 'Please complete your basic profile to unlock your health dashboard and biological age calculation.',
    btnCompleteProfile: 'Complete Profile',
    overviewTitle: 'Health Overview',
    overviewDesc: 'Based on your profile and {count} exam results.',
    btnUpdateExams: 'Update Exams',
    healthScore: 'Health Score',
    scoreExcellent: 'Excellent! Keep up the great work.',
    scoreGood: 'Good. Some areas need attention.',
    scoreFair: 'Fair. Significant improvements needed.',
    scorePoor: 'Poor. Please consult a healthcare professional.',
    bioAge: 'Biological Age',
    years: 'years',
    bioAgeDesc: 'You are {diff} years {direction} than your chronological age ({age}).',
    younger: 'younger',
    older: 'older',
    bmiTitle: 'Body Mass Index',
    areasImprovement: 'Areas for Improvement',
    allOptimal: 'All your recorded biomarkers are within optimal or normal ranges!',
    addMoreExams: 'Consider adding more exam results for a comprehensive overview.',
    yourValue: 'Your value:',
    
    // Explanations
    healthScoreExplanation: 'The Health Score (0-100) is calculated based on your BMI and biomarker results. Points are deducted for values in borderline, high, or critical ranges, and bonus points are awarded for optimal values.',
    bioAgeExplanation: 'Biological Age is an estimate of how your body is aging internally. It starts with your chronological age and adjusts based on your BMI and biomarker results. Optimal values can make you "younger", while critical values add years.',
    bmiExplanation: 'Body Mass Index (BMI) is a simple calculation using your height and weight (kg/m²). It is used by the World Health Organization (WHO) to classify underweight, overweight and obesity in adults.',
    referenceNote: 'Reference ranges are based on general guidelines from organizations like the American Heart Association (AHA), American Diabetes Association (ADA), and World Health Organization (WHO). Always consult your doctor for personalized advice.',
  },
  'pt-BR': {
    appTitle: 'HealthSpan',
    tabDashboard: 'Painel',
    tabProfile: 'Perfil',
    tabExams: 'Exames',
    
    profileTitle: 'Perfil Básico',
    profileDesc: 'Insira suas informações básicas para nos ajudar a calcular suas métricas de saúde com precisão.',
    ageLabel: 'Idade (anos)',
    genderLabel: 'Gênero',
    genderMale: 'Masculino',
    genderFemale: 'Feminino',
    genderOther: 'Outro',
    heightLabel: 'Altura (cm)',
    weightLabel: 'Peso (kg)',
    bloodGroupLabel: 'Grupo Sanguíneo',
    bloodGroupUnknown: 'Desconhecido',
    calcBmi: 'IMC Calculado',
    bmiUnderweight: 'Abaixo do peso',
    bmiNormal: 'Peso normal',
    bmiOverweight: 'Sobrepeso',
    bmiObese: 'Obeso',
    btnNextExams: 'Próximo: Inserir Exames',
    
    examsTitle: 'Exames Médicos',
    examsDesc: 'Insira seus exames de sangue e resultados mais recentes.',
    btnViewDashboard: 'Ver Painel',
    catAll: 'Todos',
    enterValue: 'Insira o valor em',
    recommendation: 'Recomendação:',
    referenceRanges: 'Faixas de Referência:',
    
    welcomeTitle: 'Bem-vindo ao HealthSpan',
    welcomeDesc: 'Por favor, complete seu perfil básico para desbloquear seu painel de saúde e cálculo de idade biológica.',
    btnCompleteProfile: 'Completar Perfil',
    overviewTitle: 'Visão Geral da Saúde',
    overviewDesc: 'Com base no seu perfil e {count} resultados de exames.',
    btnUpdateExams: 'Atualizar Exames',
    healthScore: 'Pontuação de Saúde',
    scoreExcellent: 'Excelente! Continue com o ótimo trabalho.',
    scoreGood: 'Bom. Algumas áreas precisam de atenção.',
    scoreFair: 'Razoável. Melhorias significativas são necessárias.',
    scorePoor: 'Ruim. Por favor, consulte um profissional de saúde.',
    bioAge: 'Idade Biológica',
    years: 'anos',
    bioAgeDesc: 'Você é {diff} anos mais {direction} que sua idade cronológica ({age}).',
    younger: 'jovem',
    older: 'velho',
    bmiTitle: 'Índice de Massa Corporal',
    areasImprovement: 'Áreas para Melhoria',
    allOptimal: 'Todos os seus biomarcadores registrados estão dentro das faixas ideais ou normais!',
    addMoreExams: 'Considere adicionar mais resultados de exames para uma visão geral abrangente.',
    yourValue: 'Seu valor:',
    
    // Explanations
    healthScoreExplanation: 'A Pontuação de Saúde (0-100) é calculada com base no seu IMC e resultados de biomarcadores. Pontos são deduzidos para valores em faixas limítrofes, altas ou críticas, e pontos de bônus são concedidos para valores ideais.',
    bioAgeExplanation: 'A Idade Biológica é uma estimativa de como seu corpo está envelhecendo internamente. Começa com sua idade cronológica e se ajusta com base no seu IMC e resultados de biomarcadores. Valores ideais podem torná-lo "mais jovem", enquanto valores críticos adicionam anos.',
    bmiExplanation: 'O Índice de Massa Corporal (IMC) é um cálculo simples usando sua altura e peso (kg/m²). É usado pela Organização Mundial da Saúde (OMS) para classificar baixo peso, sobrepeso e obesidade em adultos.',
    referenceNote: 'As faixas de referência são baseadas em diretrizes gerais de organizações como a American Heart Association (AHA), American Diabetes Association (ADA) e Organização Mundial da Saúde (OMS). Sempre consulte seu médico para aconselhamento personalizado.',
  },
  es: {
    appTitle: 'HealthSpan',
    tabDashboard: 'Panel',
    tabProfile: 'Perfil',
    tabExams: 'Exámenes',
    
    profileTitle: 'Perfil Básico',
    profileDesc: 'Ingrese su información básica para ayudarnos a calcular sus métricas de salud con precisión.',
    ageLabel: 'Edad (años)',
    genderLabel: 'Género',
    genderMale: 'Masculino',
    genderFemale: 'Femenino',
    genderOther: 'Otro',
    heightLabel: 'Altura (cm)',
    weightLabel: 'Peso (kg)',
    bloodGroupLabel: 'Grupo Sanguíneo',
    bloodGroupUnknown: 'Desconocido',
    calcBmi: 'IMC Calculado',
    bmiUnderweight: 'Bajo peso',
    bmiNormal: 'Peso normal',
    bmiOverweight: 'Sobrepeso',
    bmiObese: 'Obeso',
    btnNextExams: 'Siguiente: Ingresar Exámenes',
    
    examsTitle: 'Exámenes Médicos',
    examsDesc: 'Ingrese sus últimos análisis de sangre y resultados de exámenes.',
    btnViewDashboard: 'Ver Panel',
    catAll: 'Todos',
    enterValue: 'Ingrese valor en',
    recommendation: 'Recomendación:',
    referenceRanges: 'Rangos de Referencia:',
    
    welcomeTitle: 'Bienvenido a HealthSpan',
    welcomeDesc: 'Por favor, complete su perfil básico para desbloquear su panel de salud y cálculo de edad biológica.',
    btnCompleteProfile: 'Completar Perfil',
    overviewTitle: 'Resumen de Salud',
    overviewDesc: 'Basado en su perfil y {count} resultados de exámenes.',
    btnUpdateExams: 'Actualizar Exámenes',
    healthScore: 'Puntuación de Salud',
    scoreExcellent: '¡Excelente! Siga con el gran trabajo.',
    scoreGood: 'Bien. Algunas áreas necesitan atención.',
    scoreFair: 'Regular. Se necesitan mejoras significativas.',
    scorePoor: 'Pobre. Por favor, consulte a un profesional de la salud.',
    bioAge: 'Edad Biológica',
    years: 'años',
    bioAgeDesc: 'Usted es {diff} años más {direction} que su edad cronológica ({age}).',
    younger: 'joven',
    older: 'viejo',
    bmiTitle: 'Índice de Masa Corporal',
    areasImprovement: 'Áreas de Mejora',
    allOptimal: '¡Todos sus biomarcadores registrados están dentro de los rangos óptimos o normales!',
    addMoreExams: 'Considere agregar más resultados de exámenes para obtener una descripción general completa.',
    yourValue: 'Su valor:',
    
    // Explanations
    healthScoreExplanation: 'La Puntuación de Salud (0-100) se calcula en función de su IMC y los resultados de los biomarcadores. Se deducen puntos por valores en rangos limítrofes, altos o críticos, y se otorgan puntos de bonificación por valores óptimos.',
    bioAgeExplanation: 'La Edad Biológica es una estimación de cómo envejece su cuerpo internamente. Comienza con su edad cronológica y se ajusta según su IMC y los resultados de los biomarcadores. Los valores óptimos pueden hacerlo "más joven", mientras que los valores críticos agregan años.',
    bmiExplanation: 'El Índice de Masa Corporal (IMC) es un cálculo simple que utiliza su altura y peso (kg/m²). Es utilizado por la Organización Mundial de la Salud (OMS) para clasificar el bajo peso, el sobrepeso y la obesidad en adultos.',
    referenceNote: 'Los rangos de referencia se basan en pautas generales de organizaciones como la Asociación Americana del Corazón (AHA), la Asociación Americana de la Diabetes (ADA) y la Organización Mundial de la Salud (OMS). Siempre consulte a su médico para obtener asesoramiento personalizado.',
  }
};

export const biomarkerTranslations = {
  en: {
    categories: {
      metabolic: 'Metabolic',
      cardiovascular: 'Cardiovascular',
      inflammation: 'Inflammation',
      hormonal: 'Hormonal',
      general: 'General'
    },
    levels: {
      'Optimal': 'Optimal',
      'Normal': 'Normal',
      'Borderline': 'Borderline',
      'High': 'High',
      'Critical': 'Critical',
      'Hypoglycemia': 'Hypoglycemia',
      'Prediabetes': 'Prediabetes',
      'Diabetes': 'Diabetes',
      'Desirable': 'Desirable',
      'Borderline High': 'Borderline High',
      'Near Optimal': 'Near Optimal',
      'Very High': 'Very High',
      'Low (High Risk)': 'Low (High Risk)',
      'Acceptable': 'Acceptable',
      'Low Risk': 'Low Risk',
      'Average Risk': 'Average Risk',
      'High Risk': 'High Risk',
      'Very High (Acute Inflammation)': 'Very High (Acute Inflammation)',
      'Deficient': 'Deficient',
      'Insufficient': 'Insufficient',
      'Sufficient': 'Sufficient',
      'Toxicity Possible': 'Toxicity Possible',
      'Elevated': 'Elevated',
      'Stage 1 Hypertension': 'Stage 1 Hypertension',
      'Stage 2 Hypertension': 'Stage 2 Hypertension',
      'Low': 'Low',
      'Low (Anemia)': 'Low (Anemia)',
      'Low (Hypothyroidism)': 'Low (Hypothyroidism)',
      'High (Hyperthyroidism)': 'High (Hyperthyroidism)',
      'Subclinical Hypothyroidism': 'Subclinical Hypothyroidism',
      'High (Hypothyroidism)': 'High (Hypothyroidism)',
      'Negative / Trace': 'Negative / Trace',
      'Mildly Elevated': 'Mildly Elevated',
      'High (Proteinuria)': 'High (Proteinuria)',
      'Low Normal': 'Low Normal',
      'Low (Iron Deficiency)': 'Low (Iron Deficiency)',
      'High (Iron Overload)': 'High (Iron Overload)'
    },
    biomarkers: {
      fasting_glucose: {
        name: 'Fasting Glucose',
        desc: 'Measures blood sugar levels after fasting. Key indicator for diabetes risk.',
        rec: 'Maintain a balanced diet low in refined sugars and engage in regular physical activity.'
      },
      hba1c: {
        name: 'HbA1c',
        desc: 'Average blood sugar levels over the past 2-3 months.',
        rec: 'Consistent exercise and a diet rich in fiber can help stabilize long-term blood sugar.'
      },
      total_cholesterol: {
        name: 'Total Cholesterol',
        desc: 'Total amount of cholesterol in your blood.',
        rec: 'Reduce saturated fats and eliminate trans fats. Increase soluble fiber intake.'
      },
      ldl: {
        name: 'LDL Cholesterol',
        desc: 'Low-density lipoprotein, often called "bad" cholesterol.',
        rec: 'Limit red meat and full-fat dairy. Consider plant sterols and regular aerobic exercise.'
      },
      hdl: {
        name: 'HDL Cholesterol',
        desc: 'High-density lipoprotein, often called "good" cholesterol.',
        rec: 'Regular aerobic exercise, quitting smoking, and consuming healthy fats (like olive oil) can increase HDL.'
      },
      triglycerides: {
        name: 'Triglycerides',
        desc: 'A type of fat found in your blood.',
        rec: 'Limit sugar and refined carbohydrates. Reduce alcohol consumption and increase omega-3 fatty acids.'
      },
      crp: {
        name: 'hs-CRP',
        desc: 'High-sensitivity C-reactive protein, a marker of inflammation.',
        rec: 'An anti-inflammatory diet (Mediterranean), stress management, and adequate sleep can lower CRP.'
      },
      vitamin_d: {
        name: 'Vitamin D (25-OH)',
        desc: 'Crucial for bone health, immune function, and mood.',
        rec: 'Safe sun exposure and vitamin D3 supplementation if levels are low.'
      },
      systolic_bp: {
        name: 'Systolic Blood Pressure',
        desc: 'Pressure in your arteries when your heart beats.',
        rec: 'Reduce sodium intake, manage stress, and maintain a healthy weight.'
      },
      diastolic_bp: {
        name: 'Diastolic Blood Pressure',
        desc: 'Pressure in your arteries when your heart rests between beats.',
        rec: 'Regular aerobic exercise and a diet rich in potassium can help lower diastolic pressure.'
      },
      creatinine: {
        name: 'Creatinine',
        desc: 'Indicator of kidney function.',
        rec: 'Stay hydrated and avoid excessive protein intake if levels are high.'
      },
      ferritin: {
        name: 'Serum Ferritin',
        desc: 'Measures the amount of iron stored in the body.',
        rec: 'Adjust iron intake. If low, consume iron-rich foods; if high, consult a doctor.'
      },
      ggt: {
        name: 'Gamma GT (GGT)',
        desc: 'Liver enzyme that indicates liver health and possible alcohol toxicity.',
        rec: 'Limit alcohol consumption and avoid hepatotoxic medications.'
      },
      hemoglobin: {
        name: 'Hemoglobin (CBC)',
        desc: 'Protein in red blood cells that carries oxygen. Part of a Complete Blood Count.',
        rec: 'Ensure adequate intake of iron, vitamin B12, and folate.'
      },
      free_t4: {
        name: 'Free T4',
        desc: 'Thyroid hormone that regulates metabolism.',
        rec: 'Consult an endocrinologist if levels are outside the normal range.'
      },
      ast: {
        name: 'AST (SGOT)',
        desc: 'Enzyme found in the liver and heart. High levels indicate tissue damage.',
        rec: 'Maintain a healthy weight and avoid excessive alcohol.'
      },
      alt: {
        name: 'ALT (SGPT)',
        desc: 'Enzyme found primarily in the liver. Best test for detecting liver damage.',
        rec: 'Maintain a healthy diet and limit alcohol intake to protect liver function.'
      },
      tsh: {
        name: 'Ultrasensitive TSH',
        desc: 'Thyroid-stimulating hormone. Evaluates overall thyroid function.',
        rec: 'Requires medical evaluation if abnormal. Iodine intake may need adjustment.'
      },
      urea: {
        name: 'Urea',
        desc: 'Waste product filtered by the kidneys.',
        rec: 'Stay hydrated. High protein diets can elevate urea levels.'
      },
      urine_protein: {
        name: 'Urine Protein (Urinalysis)',
        desc: 'Protein in urine. A key marker in routine urinalysis for kidney health.',
        rec: 'Persistent protein in urine requires nephrology evaluation.'
      },
      vitamin_b12: {
        name: 'Vitamin B12',
        desc: 'Essential for nerve tissue health, brain function, and red blood cell production.',
        rec: 'Consider B12 supplementation or consuming more animal products/fortified foods if low.'
      },
      uric_acid: {
        name: 'Uric Acid',
        desc: 'Produced during the breakdown of purines. High levels can cause gout.',
        rec: 'Limit purine-rich foods (red meat, seafood) and alcohol. Drink plenty of water.'
      },
      transferrin_sat: {
        name: 'Transferrin Saturation',
        desc: 'Indicates how much iron is bound to transferrin in the blood.',
        rec: 'If low, increase iron intake. If high, evaluate for hemochromatosis.'
      }
    }
  },
  'pt-BR': {
    categories: {
      metabolic: 'Metabólico',
      cardiovascular: 'Cardiovascular',
      inflammation: 'Inflamação',
      hormonal: 'Hormonal',
      general: 'Geral'
    },
    levels: {
      'Optimal': 'Ideal',
      'Normal': 'Normal',
      'Borderline': 'Limítrofe',
      'High': 'Alto',
      'Critical': 'Crítico',
      'Hypoglycemia': 'Hipoglicemia',
      'Prediabetes': 'Pré-diabetes',
      'Diabetes': 'Diabetes',
      'Desirable': 'Desejável',
      'Borderline High': 'Limítrofe Alto',
      'Near Optimal': 'Quase Ideal',
      'Very High': 'Muito Alto',
      'Low (High Risk)': 'Baixo (Alto Risco)',
      'Acceptable': 'Aceitável',
      'Low Risk': 'Baixo Risco',
      'Average Risk': 'Risco Médio',
      'High Risk': 'Alto Risco',
      'Very High (Acute Inflammation)': 'Muito Alto (Agudo)',
      'Deficient': 'Deficiente',
      'Insufficient': 'Insuficiente',
      'Sufficient': 'Suficiente',
      'Toxicity Possible': 'Possível Toxicidade',
      'Elevated': 'Elevado',
      'Stage 1 Hypertension': 'Hipertensão Estágio 1',
      'Stage 2 Hypertension': 'Hipertensão Estágio 2',
      'Low': 'Baixo',
      'Low (Anemia)': 'Baixo (Anemia)',
      'Low (Hypothyroidism)': 'Baixo (Hipotireoidismo)',
      'High (Hyperthyroidism)': 'Alto (Hipertireoidismo)',
      'Subclinical Hypothyroidism': 'Hipotireoidismo Subclínico',
      'High (Hypothyroidism)': 'Alto (Hipotireoidismo)',
      'Negative / Trace': 'Negativo / Traços',
      'Mildly Elevated': 'Levemente Elevado',
      'High (Proteinuria)': 'Alto (Proteinúria)',
      'Low Normal': 'Normal Baixo',
      'Low (Iron Deficiency)': 'Baixo (Deficiência de Ferro)',
      'High (Iron Overload)': 'Alto (Sobrecarga de Ferro)'
    },
    biomarkers: {
      fasting_glucose: {
        name: 'Glicemia em Jejum',
        desc: 'Mede os níveis de açúcar no sangue após o jejum. Indicador chave para o risco de diabetes.',
        rec: 'Mantenha uma dieta equilibrada com baixo teor de açúcares refinados e pratique atividade física regular.'
      },
      hba1c: {
        name: 'HbA1c (Hemoglobina Glicada)',
        desc: 'Níveis médios de açúcar no sangue nos últimos 2-3 meses.',
        rec: 'Exercícios consistentes e uma dieta rica em fibras podem ajudar a estabilizar o açúcar no sangue a longo prazo.'
      },
      total_cholesterol: {
        name: 'Colesterol Total',
        desc: 'Quantidade total de colesterol no seu sangue.',
        rec: 'Reduza as gorduras saturadas e elimine as gorduras trans. Aumente a ingestão de fibras solúveis.'
      },
      ldl: {
        name: 'Colesterol LDL',
        desc: 'Lipoproteína de baixa densidade, frequentemente chamada de colesterol "ruim".',
        rec: 'Limite a carne vermelha e laticínios integrais. Considere esteróis vegetais e exercícios aeróbicos regulares.'
      },
      hdl: {
        name: 'Colesterol HDL',
        desc: 'Lipoproteína de alta densidade, frequentemente chamada de colesterol "bom".',
        rec: 'Exercícios aeróbicos regulares, parar de fumar e consumir gorduras saudáveis (como azeite) podem aumentar o HDL.'
      },
      triglycerides: {
        name: 'Triglicerídeos',
        desc: 'Um tipo de gordura encontrada no seu sangue.',
        rec: 'Limite o açúcar e carboidratos refinados. Reduza o consumo de álcool e aumente os ácidos graxos ômega-3.'
      },
      crp: {
        name: 'PCR-as',
        desc: 'Proteína C-reativa de alta sensibilidade, um marcador de inflamação.',
        rec: 'Uma dieta anti-inflamatória (Mediterrânea), controle do estresse e sono adequado podem diminuir a PCR.'
      },
      vitamin_d: {
        name: 'Vitamina D (25-OH)',
        desc: 'Crucial para a saúde óssea, função imunológica e humor.',
        rec: 'Exposição solar segura e suplementação de vitamina D3 se os níveis estiverem baixos.'
      },
      systolic_bp: {
        name: 'Pressão Arterial Sistólica',
        desc: 'Pressão nas artérias quando o coração bate.',
        rec: 'Reduza a ingestão de sódio, gerencie o estresse e mantenha um peso saudável.'
      },
      diastolic_bp: {
        name: 'Pressão Arterial Diastólica',
        desc: 'Pressão nas artérias quando o coração descansa entre as batidas.',
        rec: 'Exercícios aeróbicos regulares e uma dieta rica em potássio podem ajudar a reduzir a pressão diastólica.'
      },
      creatinine: {
        name: 'Creatinina',
        desc: 'Indicador da função renal.',
        rec: 'Mantenha-se hidratado e evite a ingestão excessiva de proteínas se os níveis estiverem altos.'
      },
      ferritin: {
        name: 'Ferritina Sérica',
        desc: 'Mede a quantidade de ferro armazenada no corpo.',
        rec: 'Ajuste a ingestão de ferro. Se estiver baixa, consuma alimentos ricos em ferro; se estiver alta, consulte um médico.'
      },
      ggt: {
        name: 'Gama GT',
        desc: 'Enzima hepática que indica a saúde do fígado e possível toxicidade por álcool.',
        rec: 'Limite o consumo de álcool e evite medicamentos hepatotóxicos.'
      },
      hemoglobin: {
        name: 'Hemograma (Hemoglobina)',
        desc: 'Proteína nos glóbulos vermelhos que transporta oxigênio. Parte de um Hemograma Completo.',
        rec: 'Garanta a ingestão adequada de ferro, vitamina B12 e folato.'
      },
      free_t4: {
        name: 'T4 Livre',
        desc: 'Hormônio da tireoide que regula o metabolismo.',
        rec: 'Consulte um endocrinologista se os níveis estiverem fora da faixa normal.'
      },
      ast: {
        name: 'Transaminase Oxalacética (TGO/AST)',
        desc: 'Enzima encontrada no fígado e no coração. Níveis altos indicam dano tecidual.',
        rec: 'Mantenha um peso saudável e evite o excesso de álcool.'
      },
      alt: {
        name: 'Transaminase Pirúvica (TGP/ALT)',
        desc: 'Enzima encontrada principalmente no fígado. Melhor teste para detectar danos no fígado.',
        rec: 'Mantenha uma dieta saudável e limite a ingestão de álcool para proteger a função hepática.'
      },
      tsh: {
        name: 'TSH Ultra Sensível',
        desc: 'Hormônio estimulante da tireoide. Avalia a função geral da tireoide.',
        rec: 'Requer avaliação médica se estiver anormal. A ingestão de iodo pode precisar de ajuste.'
      },
      urea: {
        name: 'Ureia',
        desc: 'Produto residual filtrado pelos rins.',
        rec: 'Mantenha-se hidratado. Dietas ricas em proteínas podem elevar os níveis de ureia.'
      },
      urine_protein: {
        name: 'Urina Rotina (Proteína)',
        desc: 'Proteína na urina. Um marcador chave no exame de urina de rotina para a saúde renal.',
        rec: 'Proteína persistente na urina requer avaliação nefrológica.'
      },
      vitamin_b12: {
        name: 'Vitamina B12',
        desc: 'Essencial para a saúde do tecido nervoso, função cerebral e produção de glóbulos vermelhos.',
        rec: 'Considere a suplementação de B12 ou o consumo de mais produtos de origem animal/alimentos fortificados se estiver baixa.'
      },
      uric_acid: {
        name: 'Ácido Úrico',
        desc: 'Produzido durante a quebra de purinas. Níveis altos podem causar gota.',
        rec: 'Limite alimentos ricos em purinas (carne vermelha, frutos do mar) e álcool. Beba muita água.'
      },
      transferrin_sat: {
        name: 'Índice de Saturação da Transferrina',
        desc: 'Indica quanto ferro está ligado à transferrina no sangue.',
        rec: 'Se estiver baixo, aumente a ingestão de ferro. Se estiver alto, avalie para hemocromatose.'
      }
    }
  },
  es: {
    categories: {
      metabolic: 'Metabólico',
      cardiovascular: 'Cardiovascular',
      inflammation: 'Inflamación',
      hormonal: 'Hormonal',
      general: 'General'
    },
    levels: {
      'Optimal': 'Óptimo',
      'Normal': 'Normal',
      'Borderline': 'Limítrofe',
      'High': 'Alto',
      'Critical': 'Crítico',
      'Hypoglycemia': 'Hipoglucemia',
      'Prediabetes': 'Prediabetes',
      'Diabetes': 'Diabetes',
      'Desirable': 'Deseable',
      'Borderline High': 'Limítrofe Alto',
      'Near Optimal': 'Casi Óptimo',
      'Very High': 'Muy Alto',
      'Low (High Risk)': 'Bajo (Alto Riesgo)',
      'Acceptable': 'Aceptable',
      'Low Risk': 'Bajo Riesgo',
      'Average Risk': 'Riesgo Medio',
      'High Risk': 'Alto Riesgo',
      'Very High (Acute Inflammation)': 'Muy Alto (Agudo)',
      'Deficient': 'Deficiente',
      'Insufficient': 'Insuficiente',
      'Sufficient': 'Suficiente',
      'Toxicity Possible': 'Posible Toxicidad',
      'Elevated': 'Elevado',
      'Stage 1 Hypertension': 'Hipertensión Etapa 1',
      'Stage 2 Hypertension': 'Hipertensión Etapa 2',
      'Low': 'Bajo',
      'Low (Anemia)': 'Bajo (Anemia)',
      'Low (Hypothyroidism)': 'Bajo (Hipotiroidismo)',
      'High (Hyperthyroidism)': 'Alto (Hipertiroidismo)',
      'Subclinical Hypothyroidism': 'Hipotiroidismo Subclínico',
      'High (Hypothyroidism)': 'Alto (Hipotiroidismo)',
      'Negative / Trace': 'Negativo / Trazas',
      'Mildly Elevated': 'Ligeramente Elevado',
      'High (Proteinuria)': 'Alto (Proteinuria)',
      'Low Normal': 'Normal Bajo',
      'Low (Iron Deficiency)': 'Bajo (Deficiencia de Hierro)',
      'High (Iron Overload)': 'Alto (Sobrecarga de Hierro)'
    },
    biomarkers: {
      fasting_glucose: {
        name: 'Glucosa en Ayunas',
        desc: 'Mide los niveles de azúcar en la sangre después del ayuno. Indicador clave para el riesgo de diabetes.',
        rec: 'Mantenga una dieta equilibrada baja en azúcares refinados y participe en actividad física regular.'
      },
      hba1c: {
        name: 'HbA1c (Hemoglobina Glicosilada)',
        desc: 'Niveles promedio de azúcar en la sangre durante los últimos 2-3 meses.',
        rec: 'El ejercicio constante y una dieta rica en fibra pueden ayudar a estabilizar el azúcar en la sangre a largo plazo.'
      },
      total_cholesterol: {
        name: 'Colesterol Total',
        desc: 'Cantidad total de colesterol en su sangre.',
        rec: 'Reduzca las grasas saturadas y elimine las grasas trans. Aumente la ingesta de fibra soluble.'
      },
      ldl: {
        name: 'Colesterol LDL',
        desc: 'Lipoproteína de baja densidad, a menudo llamada colesterol "malo".',
        rec: 'Limite la carne roja y los lácteos enteros. Considere esteroles vegetales y ejercicio aeróbico regular.'
      },
      hdl: {
        name: 'Colesterol HDL',
        desc: 'Lipoproteína de alta densidad, a menudo llamada colesterol "bueno".',
        rec: 'El ejercicio aeróbico regular, dejar de fumar y consumir grasas saludables (como el aceite de oliva) pueden aumentar el HDL.'
      },
      triglycerides: {
        name: 'Triglicéridos',
        desc: 'Un tipo de grasa que se encuentra en su sangre.',
        rec: 'Limite el azúcar y los carbohidratos refinados. Reduzca el consumo de alcohol y aumente los ácidos grasos omega-3.'
      },
      crp: {
        name: 'PCR-as',
        desc: 'Proteína C reactiva de alta sensibilidad, un marcador de inflamación.',
        rec: 'Una dieta antiinflamatoria (mediterránea), el manejo del estrés y un sueño adecuado pueden reducir la PCR.'
      },
      vitamin_d: {
        name: 'Vitamina D (25-OH)',
        desc: 'Crucial para la salud ósea, la función inmunológica y el estado de ánimo.',
        rec: 'Exposición solar segura y suplementación con vitamina D3 si los niveles son bajos.'
      },
      systolic_bp: {
        name: 'Presión Arterial Sistólica',
        desc: 'Presión en sus arterias cuando su corazón late.',
        rec: 'Reduzca la ingesta de sodio, maneje el estrés y mantenga un peso saludable.'
      },
      diastolic_bp: {
        name: 'Presión Arterial Diastólica',
        desc: 'Presión en sus arterias cuando su corazón descansa entre latidos.',
        rec: 'El ejercicio aeróbico regular y una dieta rica en potasio pueden ayudar a reducir la presión diastólica.'
      }
    }
  }
};

export const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations['en'], params?: Record<string, string | number>) => string;
  tb: (type: 'categories' | 'levels' | 'biomarkers', key: string, field?: 'name' | 'desc' | 'rec') => string;
}>({
  language: 'en',
  setLanguage: () => {},
  t: (key) => translations['en'][key],
  tb: () => '',
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('health_language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('health_language', language);
  }, [language]);

  const t = (key: keyof typeof translations['en'], params?: Record<string, string | number>) => {
    let str = translations[language][key] || translations['en'][key];
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        str = str.replace(`{${k}}`, String(v));
      });
    }
    return str;
  };

  const tb = (type: 'categories' | 'levels' | 'biomarkers', key: string, field?: 'name' | 'desc' | 'rec') => {
    try {
      if (type === 'biomarkers' && field) {
        return biomarkerTranslations[language][type][key as keyof typeof biomarkerTranslations['en']['biomarkers']][field] || 
               biomarkerTranslations['en'][type][key as keyof typeof biomarkerTranslations['en']['biomarkers']][field];
      }
      if (type === 'categories') {
        return biomarkerTranslations[language][type][key as keyof typeof biomarkerTranslations['en']['categories']] || key;
      }
      if (type === 'levels') {
        return biomarkerTranslations[language][type][key as keyof typeof biomarkerTranslations['en']['levels']] || key;
      }
    } catch (e) {
      return key;
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tb }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
