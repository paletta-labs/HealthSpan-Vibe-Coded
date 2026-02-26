import React from 'react';
import { UserProfile } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { calculateBMI } from '../healthLogic';
import { useLanguage } from '../i18n';

interface Props {
  profile: UserProfile;
  setProfile: (p: UserProfile) => void;
  onNext: () => void;
}

export default function ProfileForm({ profile, setProfile, onNext }: Props) {
  const { t } = useLanguage();
  const bmi = profile.heightCm && profile.weightKg ? calculateBMI(profile.heightCm, profile.weightKg) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-xl mx-auto"
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{t('profileTitle')}</CardTitle>
          <CardDescription>
            {t('profileDesc')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">{t('ageLabel')}</Label>
              <Input
                id="age"
                type="number"
                min="1"
                max="120"
                placeholder="e.g. 35"
                value={profile.age || ''}
                onChange={(e) => setProfile({ ...profile, age: parseInt(e.target.value) || null })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">{t('genderLabel')}</Label>
              <select
                id="gender"
                className="flex h-10 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                value={profile.gender}
                onChange={(e) => setProfile({ ...profile, gender: e.target.value as any })}
              >
                <option value="male">{t('genderMale')}</option>
                <option value="female">{t('genderFemale')}</option>
                <option value="other">{t('genderOther')}</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="height">{t('heightLabel')}</Label>
              <Input
                id="height"
                type="number"
                min="50"
                max="300"
                placeholder="e.g. 175"
                value={profile.heightCm || ''}
                onChange={(e) => setProfile({ ...profile, heightCm: parseInt(e.target.value) || null })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">{t('weightLabel')}</Label>
              <Input
                id="weight"
                type="number"
                min="20"
                max="300"
                placeholder="e.g. 70"
                value={profile.weightKg || ''}
                onChange={(e) => setProfile({ ...profile, weightKg: parseFloat(e.target.value) || null })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bloodGroup">{t('bloodGroupLabel')}</Label>
            <select
              id="bloodGroup"
              className="flex h-10 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              value={profile.bloodGroup || 'unknown'}
              onChange={(e) => setProfile({ ...profile, bloodGroup: e.target.value as any })}
            >
              <option value="unknown">{t('bloodGroupUnknown')}</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          {bmi !== null && (
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{t('calcBmi')}</p>
                <p className="text-2xl font-bold text-slate-900">{bmi.toFixed(1)}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm font-medium ${
                  bmi < 18.5 ? 'text-amber-600' :
                  bmi < 25 ? 'text-emerald-600' :
                  bmi < 30 ? 'text-orange-600' : 'text-red-600'
                }`}>
                  {bmi < 18.5 ? t('bmiUnderweight') :
                   bmi < 25 ? t('bmiNormal') :
                   bmi < 30 ? t('bmiOverweight') : t('bmiObese')}
                </p>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={onNext} disabled={!profile.age || !profile.heightCm || !profile.weightKg}>
            {t('btnNextExams')}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
