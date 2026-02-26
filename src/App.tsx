import React, { useState, useEffect } from 'react';
import { Activity, User, FileText, HeartPulse, Globe } from 'lucide-react';
import { UserProfile, BiomarkerResult } from './types';
import Dashboard from './components/Dashboard';
import ProfileForm from './components/ProfileForm';
import BiomarkerList from './components/BiomarkerList';
import { useLanguage, Language } from './i18n';

export default function App() {
  const { language, setLanguage, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'profile' | 'biomarkers'>('profile');
  
  const [profile, setProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('health_profile');
    return saved ? JSON.parse(saved) : { age: null, gender: 'other', heightCm: null, weightKg: null };
  });

  const [results, setResults] = useState<BiomarkerResult[]>(() => {
    const saved = localStorage.getItem('health_results');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('health_profile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('health_results', JSON.stringify(results));
  }, [results]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-600">
            <HeartPulse className="w-6 h-6" />
            <h1 className="text-xl font-bold tracking-tight text-slate-900">{t('appTitle')}</h1>
          </div>
          <div className="flex items-center gap-4">
            <nav className="flex gap-1">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${activeTab === 'dashboard' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-100'}`}
              >
                <Activity className="w-4 h-4" />
                <span className="hidden sm:inline">{t('tabDashboard')}</span>
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${activeTab === 'profile' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-100'}`}
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">{t('tabProfile')}</span>
              </button>
              <button
                onClick={() => setActiveTab('biomarkers')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${activeTab === 'biomarkers' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-100'}`}
              >
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">{t('tabExams')}</span>
              </button>
            </nav>
            <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
              <Globe className="w-4 h-4 text-slate-400" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="text-sm bg-transparent border-none text-slate-600 focus:ring-0 cursor-pointer outline-none"
              >
                <option value="en">EN</option>
                <option value="pt-BR">PT-BR</option>
                <option value="es">ES</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && <Dashboard profile={profile} results={results} onNavigate={setActiveTab} />}
        {activeTab === 'profile' && <ProfileForm profile={profile} setProfile={setProfile} onNext={() => setActiveTab('biomarkers')} />}
        {activeTab === 'biomarkers' && <BiomarkerList results={results} setResults={setResults} onNext={() => setActiveTab('dashboard')} />}
      </main>
    </div>
  );
}
