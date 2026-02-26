import React, { useState } from 'react';
import { BiomarkerResult } from '../types';
import { BIOMARKERS, RISK_COLORS, RISK_BAR_COLORS } from '../constants';
import { evaluateBiomarker } from '../healthLogic';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { Info, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../i18n';

interface Props {
  results: BiomarkerResult[];
  setResults: (r: BiomarkerResult[]) => void;
  onNext: () => void;
}

export default function BiomarkerList({ results, setResults, onNext }: Props) {
  const { t, tb } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleInputChange = (id: string, value: string) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setResults(results.filter(r => r.biomarkerId !== id));
      return;
    }

    const existingIndex = results.findIndex(r => r.biomarkerId === id);
    if (existingIndex >= 0) {
      const newResults = [...results];
      newResults[existingIndex] = { ...newResults[existingIndex], value: numValue };
      setResults(newResults);
    } else {
      setResults([...results, { biomarkerId: id, value: numValue, date: new Date().toISOString() }]);
    }
  };

  const categories = ['all', ...Array.from(new Set(BIOMARKERS.map(b => b.category)))];

  const filteredBiomarkers = activeCategory === 'all' 
    ? BIOMARKERS 
    : BIOMARKERS.filter(b => b.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{t('examsTitle')}</h2>
          <p className="text-slate-500">{t('examsDesc')}</p>
        </div>
        <Button onClick={onNext} size="lg" className="shrink-0">
          {t('btnViewDashboard')}
        </Button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === cat 
                ? 'bg-slate-900 text-white' 
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat === 'all' ? t('catAll') : tb('categories', cat)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredBiomarkers.map(biomarker => {
          const result = results.find(r => r.biomarkerId === biomarker.id);
          const evaluation = result ? evaluateBiomarker(result.value, biomarker) : null;
          
          return (
            <Card key={biomarker.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-base">{tb('biomarkers', biomarker.id, 'name')}</CardTitle>
                    <CardDescription className="text-xs mt-1 flex items-center gap-1">
                      <Info className="w-3 h-3" />
                      {tb('biomarkers', biomarker.id, 'desc')}
                    </CardDescription>
                  </div>
                  {evaluation && (
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${RISK_COLORS[evaluation.level]}`}>
                      {tb('levels', evaluation.label)}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="relative flex-1">
                    <Input
                      type="number"
                      placeholder={`${t('enterValue')} ${biomarker.unit}`}
                      value={result?.value ?? ''}
                      onChange={(e) => handleInputChange(biomarker.id, e.target.value)}
                      className="pr-16"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-400 pointer-events-none">
                      {biomarker.unit}
                    </span>
                  </div>
                  {evaluation && (
                    <div className="shrink-0">
                      {evaluation.level === 'optimal' || evaluation.level === 'normal' ? (
                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                      ) : (
                        <AlertCircle className={`w-6 h-6 ${
                          evaluation.level === 'borderline' ? 'text-amber-500' :
                          evaluation.level === 'high' ? 'text-orange-500' : 'text-red-500'
                        }`} />
                      )}
                    </div>
                  )}
                </div>
                
                {/* Visual Range Bar */}
                <div className="mt-4 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden flex">
                  {biomarker.ranges.map((range, idx) => {
                    // Simple equal width distribution for visualization
                    const width = `${100 / biomarker.ranges.length}%`;
                    return (
                      <div 
                        key={idx} 
                        style={{ width }} 
                        className={`h-full ${RISK_BAR_COLORS[range.level]} opacity-20`}
                        title={tb('levels', range.label)}
                      />
                    );
                  })}
                </div>
                
                <div className="mt-3 text-xs text-slate-500 bg-slate-50/50 p-2 rounded border border-slate-100">
                  <span className="font-semibold text-slate-700">{t('referenceRanges')}</span>
                  <ul className="mt-1 space-y-1">
                    {biomarker.ranges.map((r, idx) => (
                      <li key={idx} className="flex justify-between items-center">
                        <span>{tb('levels', r.label)}</span>
                        <span className="font-mono">
                          {r.min !== undefined && r.max !== undefined ? `${r.min} - ${r.max}` : r.min !== undefined ? `> ${r.min}` : `< ${r.max}`} {biomarker.unit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {evaluation && (
                  <p className="text-xs text-slate-500 mt-3 bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <span className="font-semibold">{t('recommendation')}</span> {tb('biomarkers', biomarker.id, 'rec')}
                  </p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </motion.div>
  );
}
