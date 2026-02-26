import React from 'react';
import { UserProfile, BiomarkerResult } from '../types';
import { calculateHealthScore, calculateBiologicalAge, calculateBMI, evaluateBiomarker } from '../healthLogic';
import { BIOMARKERS, RISK_COLORS } from '../constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { Activity, AlertTriangle, ArrowRight, HeartPulse, ShieldCheck, TrendingUp, User, Info } from 'lucide-react';
import { useLanguage } from '../i18n';

interface Props {
  profile: UserProfile;
  results: BiomarkerResult[];
  onNavigate: (tab: 'profile' | 'biomarkers') => void;
}

export default function Dashboard({ profile, results, onNavigate }: Props) {
  const { t, tb } = useLanguage();

  if (!profile.age || !profile.heightCm || !profile.weightKg) {
    return (
      <div className="text-center py-20">
        <HeartPulse className="w-16 h-16 text-emerald-200 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">{t('welcomeTitle')}</h2>
        <p className="text-slate-500 mb-6 max-w-md mx-auto">
          {t('welcomeDesc')}
        </p>
        <Button onClick={() => onNavigate('profile')} size="lg">
          {t('btnCompleteProfile')}
        </Button>
      </div>
    );
  }

  const healthScore = calculateHealthScore(results, profile);
  const bioAge = calculateBiologicalAge(results, profile);
  const bmi = calculateBMI(profile.heightCm, profile.weightKg);

  const ageDiff = bioAge - profile.age;
  const isYounger = ageDiff < 0;

  const outOfRange = results.map(r => {
    const def = BIOMARKERS.find(b => b.id === r.biomarkerId);
    if (!def) return null;
    const evalResult = evaluateBiomarker(r.value, def);
    if (evalResult && ['borderline', 'high', 'critical'].includes(evalResult.level)) {
      return { def, result: r, evalResult };
    }
    return null;
  }).filter(Boolean) as { def: any, result: any, evalResult: any }[];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{t('overviewTitle')}</h2>
          <p className="text-slate-500">{t('overviewDesc', { count: results.length })}</p>
        </div>
        <Button onClick={() => onNavigate('biomarkers')} variant="outline" className="shrink-0">
          {t('btnUpdateExams')}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Health Score Card */}
        <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-none shadow-lg relative group">
          <CardHeader className="pb-2">
            <CardTitle className="text-emerald-50 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              {t('healthScore')}
              <div className="relative ml-auto">
                <Info className="w-4 h-4 text-emerald-200 cursor-help" />
                <div className="absolute right-0 top-6 w-64 p-3 bg-slate-900 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 pointer-events-none">
                  {t('healthScoreExplanation')}
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold tracking-tighter">{healthScore}</span>
              <span className="text-emerald-100 font-medium">/ 100</span>
            </div>
            <p className="text-emerald-50 text-sm mt-4 opacity-90">
              {healthScore >= 90 ? t('scoreExcellent') :
               healthScore >= 75 ? t('scoreGood') :
               healthScore >= 50 ? t('scoreFair') :
               t('scorePoor')}
            </p>
          </CardContent>
        </Card>

        {/* Biological Age Card */}
        <Card className="bg-gradient-to-br from-indigo-500 to-blue-600 text-white border-none shadow-lg relative group">
          <CardHeader className="pb-2">
            <CardTitle className="text-indigo-50 flex items-center gap-2">
              <Activity className="w-5 h-5" />
              {t('bioAge')}
              <div className="relative ml-auto">
                <Info className="w-4 h-4 text-indigo-200 cursor-help" />
                <div className="absolute right-0 top-6 w-64 p-3 bg-slate-900 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 pointer-events-none">
                  {t('bioAgeExplanation')}
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold tracking-tighter">{bioAge}</span>
              <span className="text-indigo-100 font-medium">{t('years')}</span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm bg-white/10 rounded-lg p-2 backdrop-blur-sm">
              {isYounger ? (
                <TrendingUp className="w-4 h-4 text-emerald-300 rotate-180" />
              ) : (
                <TrendingUp className="w-4 h-4 text-rose-300" />
              )}
              <span className="text-indigo-50">
                {t('bioAgeDesc', { diff: Math.abs(ageDiff).toFixed(1), direction: isYounger ? t('younger') : t('older'), age: profile.age })}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* BMI Card */}
        <Card className="relative group">
          <CardHeader className="pb-2">
            <CardTitle className="text-slate-500 flex items-center gap-2">
              <User className="w-5 h-5" />
              {t('bmiTitle')}
              <div className="relative ml-auto">
                <Info className="w-4 h-4 text-slate-300 cursor-help" />
                <div className="absolute right-0 top-6 w-64 p-3 bg-slate-900 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 pointer-events-none">
                  {t('bmiExplanation')}
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold tracking-tighter text-slate-900">{bmi.toFixed(1)}</span>
            </div>
            <p className={`text-sm mt-4 font-medium ${
              bmi < 18.5 ? 'text-amber-600' :
              bmi < 25 ? 'text-emerald-600' :
              bmi < 30 ? 'text-orange-600' : 'text-red-600'
            }`}>
              {bmi < 18.5 ? t('bmiUnderweight') :
               bmi < 25 ? t('bmiNormal') :
               bmi < 30 ? t('bmiOverweight') : t('bmiObese')}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Actionable Insights */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          {t('areasImprovement')}
        </h3>
        
        {outOfRange.length === 0 ? (
          <Card className="bg-emerald-50 border-emerald-100">
            <CardContent className="p-6 text-center">
              <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
              <p className="text-emerald-800 font-medium">{t('allOptimal')}</p>
              {results.length < 5 && (
                <p className="text-emerald-600 text-sm mt-2">{t('addMoreExams')}</p>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {outOfRange.map(({ def, result, evalResult }) => (
              <Card key={def.id} className="border-l-4" style={{ borderLeftColor: 
                evalResult.level === 'borderline' ? '#f59e0b' : 
                evalResult.level === 'high' ? '#ea580c' : '#dc2626' 
              }}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">{tb('biomarkers', def.id, 'name')}</CardTitle>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${RISK_COLORS[evalResult.level]}`}>
                      {tb('levels', evalResult.label)}
                    </span>
                  </div>
                  <CardDescription>
                    {t('yourValue')} <strong className="text-slate-900">{result.value} {def.unit}</strong>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <strong className="text-slate-900 block mb-1">{t('recommendation')}</strong>
                    {tb('biomarkers', def.id, 'rec')}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200">
        <p className="text-xs text-slate-500 flex items-start gap-2">
          <Info className="w-4 h-4 shrink-0 mt-0.5" />
          {t('referenceNote')}
        </p>
      </div>
    </motion.div>
  );
}
