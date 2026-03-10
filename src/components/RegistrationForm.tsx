'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { Loader2, CheckCircle, XCircle, User, CreditCard, Calendar, GraduationCap, Phone, School, Users, Briefcase, MapPin, BookOpen, MessageCircle } from 'lucide-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { UiVariant } from './uiVariant'

interface RegistrationFormData {
    fullName: string
    nationalId: string
    birthDate: Date | null
    currentMemorization: string
    age: number
    educationType: 'azhari' | 'general'
    educationStage: 'primary' | 'preparatory' | 'secondary' | 'university' | 'graduated'
    gradeLevel: string
    whatsappNumber: string
    guardianName?: string
    guardianNationalId?: string
    guardianOccupation?: string
    guardianAddress?: string
    guardianWhatsappNumber?: string
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

interface RegistrationFormProps {
    variant?: UiVariant
}

export default function RegistrationForm({ variant = 'v1' }: RegistrationFormProps) {
    const [submitState, setSubmitState] = useState<SubmitState>('idle')
    const [errorMessage, setErrorMessage] = useState('')
    const [maxBirthDate, setMaxBirthDate] = useState<Date | undefined>(undefined)
    const sheetsEndpoint = 'https://script.google.com/macros/s/AKfycbzM9hxOSDgJa6gurNOf3CuR23eC3ZzlcPrTuEnbzNinCoRFGufiU8MfDT4LxTU0CXCa/exec'

    useEffect(() => {
        setMaxBirthDate(new Date())
    }, [])

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
        control,
    } = useForm<RegistrationFormData>({
        defaultValues: {
            birthDate: null,
        }
    })

    // Watch education stage to filter grade levels and show/hide guardian section
    const selectedEducationStage = watch('educationStage')
    const isGuardianRequired = selectedEducationStage &&
        selectedEducationStage !== 'university' &&
        selectedEducationStage !== 'graduated'

    // Define grade options based on education stage
    const getGradeOptions = () => {
        switch (selectedEducationStage) {
            case 'primary':
                return [
                    { value: 'grade_1_primary', label: 'الصف الأول الابتدائي • 1st Grade' },
                    { value: 'grade_2_primary', label: 'الصف الثاني الابتدائي • 2nd Grade' },
                    { value: 'grade_3_primary', label: 'الصف الثالث الابتدائي • 3rd Grade' },
                    { value: 'grade_4_primary', label: 'الصف الرابع الابتدائي • 4th Grade' },
                    { value: 'grade_5_primary', label: 'الصف الخامس الابتدائي • 5th Grade' },
                    { value: 'grade_6_primary', label: 'الصف السادس الابتدائي • 6th Grade' },
                ]
            case 'preparatory':
                return [
                    { value: 'grade_1_preparatory', label: 'الصف الأول الإعدادي • 1st Prep' },
                    { value: 'grade_2_preparatory', label: 'الصف الثاني الإعدادي • 2nd Prep' },
                    { value: 'grade_3_preparatory', label: 'الصف الثالث الإعدادي • 3rd Prep' },
                ]
            case 'secondary':
                return [
                    { value: 'grade_1_secondary', label: 'الصف الأول الثانوي • 1st Secondary' },
                    { value: 'grade_2_secondary', label: 'الصف الثاني الثانوي • 2nd Secondary' },
                    { value: 'grade_3_secondary', label: 'الصف الثالث الثانوي • 3rd Secondary' },
                ]
            case 'university':
                return [
                    { value: 'university', label: 'جامعي • University' },
                ]
            case 'graduated':
                return [
                    { value: 'graduated', label: 'خريج • Graduated' },
                ]
            default:
                return []
        }
    }

    const onSubmit = async (data: RegistrationFormData) => {
        setSubmitState('loading')
        setErrorMessage('')

        try {
            const payload = {
                NationalID: data.nationalId,
                Name: data.fullName,
                birthdate: data.birthDate ? data.birthDate.toISOString().split('T')[0] : '',
                Age: data.age,
                EducationType: data.educationType,
                EducationStage: data.educationStage,
                'grade level': data.gradeLevel || '',
                WhatsApp: data.whatsappNumber,
                SubmittedAt: new Date().toISOString(),
                guardianName: isGuardianRequired ? (data.guardianName ?? '') : '',
                guardianNationalId: isGuardianRequired ? (data.guardianNationalId ?? '') : '',
                guardianOccupation: isGuardianRequired ? (data.guardianOccupation ?? '') : '',
                guardianAddress: isGuardianRequired ? (data.guardianAddress ?? '') : '',
                guardianWhatsappNumber: isGuardianRequired ? (data.guardianWhatsappNumber ?? '') : '',
                Memoraization: data.currentMemorization,
            }

            await fetch(sheetsEndpoint, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify(payload),
            })

            setSubmitState('success')
            reset()

            // Auto-close success modal after 5 seconds
            setTimeout(() => {
                setSubmitState('idle')
            }, 5000)
        } catch (error) {
            console.error('Registration error:', error)
            setSubmitState('error')
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : 'حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى. • An error occurred during registration. Please try again.'
            )
        }
    }

    const sectionClassName =
        variant === 'v1'
            ? 'section-container bg-white'
            : variant === 'v2'
                ? 'section-container bg-transparent'
                : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-transparent relative z-10'

    const getLabelText = (arabic: string, english: string) => {
        if (variant !== 'v3') return <span>{`${arabic} • ${english}`}</span>
        return (
            <span className="text-right">
                <span className="block v3-label-ar">{arabic}</span>
                <span className="block v3-label-en">{english}</span>
            </span>
        )
    }

    const formShellClassName =
        variant === 'v1'
            ? 'bg-white rounded-2xl shadow-2xl p-8 sm:p-12 border-2 border-gray-100'
            : variant === 'v2'
                ? 'bento-shell p-7 sm:p-12'
                : 'glass-shell p-7 sm:p-12'

    const formThemeClassName =
        variant === 'v2'
            ? 'form-v2'
            : variant === 'v3'
                ? 'form-v3'
                : ''

    const headingClassName =
        variant === 'v3'
            ? 'text-4xl sm:text-5xl font-bold text-[#064e3b] mb-4 text-center'
            : variant === 'v2'
                ? 'text-4xl sm:text-5xl font-bold text-slate-900 mb-4'
                : 'text-4xl sm:text-5xl font-bold text-gray-900 mb-4'

    const submitButtonClassName =
        variant === 'v2'
            ? 'w-full text-xl py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-full transition-all duration-300 border-2 border-islamic-gold/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-islamic-gold/60'
            : variant === 'v3'
                ? 'w-full text-xl py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 bg-[#EAB308] hover:bg-[#b99638] text-[#064e3b] font-bold rounded-2xl transition-all duration-300 border border-[#EAB308]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAB308]/80'
                : 'w-full btn-primary text-xl py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-islamic-emerald/60'

    return (
        <section id="registration" className={sectionClassName} aria-label="نموذج التسجيل">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className={headingClassName}>
                    <span className={variant === 'v3' ? 'text-[#EAB308]' : 'bg-gradient-to-r from-islamic-emerald via-emerald-600 to-islamic-emerald bg-clip-text text-transparent'}>التسجيل</span>
                    <span className={`block text-3xl sm:text-4xl mt-2 ${variant === 'v3' ? 'text-[#064e3b]/90' : 'text-gray-700'}`}>Registration</span>
                </h2>
                <p className={`text-lg max-w-2xl mx-auto ${variant === 'v3' ? 'text-[#064e3b]/85' : 'text-gray-600'}`}>
                    انضم إلى عائلتنا وابدأ رحلتك في حفظ القرآن الكريم
                    <br />
                    <span className={`text-base ${variant === 'v3' ? 'text-[#064e3b]/75' : ''}`}>Join our family and start your Quran memorization journey</span>
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-islamic-emerald to-islamic-gold mx-auto rounded-full mt-4" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
            >
                <div className={formShellClassName}>
                    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 ${formThemeClassName}`} noValidate aria-live="polite">
                        {/* Full Name */}
                        <div>
                            <label htmlFor="fullName" className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                <div className="flex w-full items-center justify-end gap-2 text-right">
                                    {getLabelText('الاسم الكامل', 'Full Name')}
                                    <User className={`w-5 h-5 text-islamic-emerald ${variant === 'v3' ? '!text-[#064e3b]' : ''}`} />
                                </div>
                            </label>
                            <input
                                id="fullName"
                                type="text"
                                {...register('fullName', {
                                    required: 'الاسم الكامل مطلوب • Full name is required',
                                    minLength: {
                                        value: 3,
                                        message: 'يجب أن يكون الاسم 3 أحرف على الأقل • Name must be at least 3 characters',
                                    },
                                })}
                                className={`input-field text-right ${errors.fullName ? 'border-red-500' : ''}`}
                                placeholder="أدخل الاسم الكامل • Enter full name"
                                aria-invalid={Boolean(errors.fullName)}
                                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                            />
                            {errors.fullName && (
                                <p id="fullName-error" className="text-red-500 text-sm mt-1 text-right">{errors.fullName.message}</p>
                            )}
                        </div>

                        {/* National ID */}
                        <div>
                            <label htmlFor="nationalId" className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                <div className="flex w-full items-center justify-end gap-2 text-right">
                                    {getLabelText('الرقم القومي', 'National ID')}
                                    <CreditCard className={`w-5 h-5 text-islamic-emerald ${variant === 'v3' ? '!text-[#064e3b]' : ''}`} />
                                </div>
                            </label>
                            <input
                                id="nationalId"
                                type="text"
                                {...register('nationalId', {
                                    required: 'الرقم القومي مطلوب • National ID is required',
                                    pattern: {
                                        value: /^\d{14}$/,
                                        message: 'يجب أن يكون الرقم القومي 14 رقماً • National ID must be exactly 14 digits',
                                    },
                                })}
                                className={`input-field text-right ${errors.nationalId ? 'border-red-500' : ''}`}
                                placeholder="أدخل الرقم القومي (14 رقم) • Enter National ID (14 digits)"
                                maxLength={14}
                                aria-invalid={Boolean(errors.nationalId)}
                                aria-describedby={errors.nationalId ? 'nationalId-error' : undefined}
                            />
                            {errors.nationalId && (
                                <p id="nationalId-error" className="text-red-500 text-sm mt-1 text-right">{errors.nationalId.message}</p>
                            )}
                        </div>

                        {/* Birth Date */}
                        <div>
                            <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                <div className="flex w-full items-center justify-end gap-2 text-right">
                                    {getLabelText('تاريخ الميلاد', 'Date of Birth')}
                                    <Calendar className={`w-5 h-5 text-islamic-emerald ${variant === 'v3' ? '!text-[#064e3b]' : ''}`} />
                                </div>
                            </label>
                            <Controller
                                name="birthDate"
                                control={control}
                                rules={{
                                    required: 'تاريخ الميلاد مطلوب • Date of birth is required',
                                    validate: (value) => {
                                        if (!value) return 'تاريخ الميلاد مطلوب • Date of birth is required'
                                        const age = Math.floor((new Date().getTime() - value.getTime()) / (365.25 * 24 * 60 * 60 * 1000))
                                        if (age < 5) return 'يجب أن يكون العمر 5 سنوات على الأقل • Age must be at least 5 years'
                                        if (age > 100) return 'يرجى إدخال تاريخ ميلاد صحيح • Please enter a valid birth date'
                                        return true
                                    }
                                }}
                                render={({ field }) => (
                                    <DatePicker
                                        selected={field.value}
                                        onChange={(date: Date | null) => field.onChange(date)}
                                        dateFormat="dd/MM/yyyy"
                                        maxDate={maxBirthDate}
                                        showYearDropdown
                                        scrollableYearDropdown
                                        yearDropdownItemNumber={100}
                                        placeholderText="اختر تاريخ الميلاد • Select birth date"
                                        id="birthDate"
                                        className={`input-field text-right w-full ${errors.birthDate ? 'border-red-500' : ''}`}
                                        aria-invalid={Boolean(errors.birthDate)}
                                        aria-describedby={errors.birthDate ? 'birthDate-error' : undefined}
                                    />
                                )}
                            />
                            {errors.birthDate && (
                                <p id="birthDate-error" className="text-red-500 text-sm mt-1 text-right">{errors.birthDate.message}</p>
                            )}
                        </div>

                        {/* Current Memorization */}
                        <div>
                            <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                <div className="flex w-full items-center justify-end gap-2 text-right">
                                    {getLabelText('مقدار الحفظ الحالي', 'Current Memorization Amount')}
                                    <BookOpen className={`w-5 h-5 text-islamic-emerald ${variant === 'v3' ? '!text-[#064e3b]' : ''}`} />
                                </div>
                            </label>
                            <input
                                type="text"
                                {...register('currentMemorization', {
                                    required: 'مقدار الحفظ مطلوب • Current memorization is required',
                                    minLength: {
                                        value: 3,
                                        message: 'يجب أن يكون النص 3 أحرف على الأقل • Must be at least 3 characters',
                                    },
                                })}
                                className={`input-field text-right ${errors.currentMemorization ? 'border-red-500' : ''}`}
                                placeholder="مثال: جزء عم • Example: Juz Amma"
                            />
                            <AnimatePresence>
                                {errors.currentMemorization && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: -10, height: 0 }}
                                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                                        exit={{ opacity: 0, y: -10, height: 0 }}
                                        className="text-red-500 text-sm mt-1 text-right"
                                    >
                                        {errors.currentMemorization.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Age */}
                        <div>
                            <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                <div className="flex w-full items-center justify-end gap-2 text-right">
                                    {getLabelText('العمر', 'Age')}
                                    <Calendar className={`w-5 h-5 text-islamic-emerald ${variant === 'v3' ? '!text-[#064e3b]' : ''}`} />
                                </div>
                            </label>
                            <input
                                type="number"
                                {...register('age', {
                                    required: 'العمر مطلوب • Age is required',
                                    min: {
                                        value: 5,
                                        message: 'يجب أن يكون العمر 5 سنوات على الأقل • Age must be at least 5 years',
                                    },
                                    max: {
                                        value: 100,
                                        message: 'يرجى إدخال عمر صحيح • Please enter a valid age',
                                    },
                                })}
                                className={`input-field text-right ${errors.age ? 'border-red-500' : ''}`}
                                placeholder="أدخل العمر • Enter age"
                            />
                            <AnimatePresence>
                                {errors.age && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: -10, height: 0 }}
                                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                                        exit={{ opacity: 0, y: -10, height: 0 }}
                                        className="text-red-500 text-sm mt-1 text-right"
                                    >
                                        {errors.age.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Education Type */}
                        <div>
                            <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                <div className="flex w-full items-center justify-end gap-2 text-right">
                                    {getLabelText('نوع التعليم', 'Education Type')}
                                    <School className={`w-5 h-5 text-islamic-emerald ${variant === 'v3' ? '!text-[#064e3b]' : ''}`} />
                                </div>
                            </label>

                            <div className={`grid grid-cols-2 ${variant === 'v3' ? 'gap-10' : 'gap-4'}`}>
                                {/* خيار عام */}
                                <label className="cursor-pointer relative">
                                    <input
                                        type="radio"
                                        value="general"
                                        {...register('educationType', {
                                            required: 'نوع التعليم مطلوب • Education type is required',
                                        })}
                                        className="peer sr-only"
                                    />
                                    {/* هذا الـ div هو المسئول عن الشكل الآن */}
                                    <div className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg transition-all hover:border-islamic-emerald peer-checked:border-islamic-emerald peer-checked:text-islamic-emerald ${variant === 'v3' ? 'border-green-200 bg-white shadow-sm peer-checked:bg-green-50 peer-checked:border-[#064e3b] peer-checked:text-[#064e3b]' : variant === 'v2' ? 'border-gray-300 peer-checked:bg-islamic-gold/20' : 'border-gray-300 peer-checked:bg-emerald-50'}`}>
                                        <div className="font-arabic text-lg font-bold">عام</div>
                                        <div className="text-sm font-semibold">General</div>
                                    </div>
                                </label>

                                {/* خيار أزهري */}
                                <label className="cursor-pointer relative">
                                    <input
                                        type="radio"
                                        value="azhari"
                                        {...register('educationType', {
                                            required: 'نوع التعليم مطلوب • Education type is required',
                                        })}
                                        className="peer sr-only"
                                    />
                                    {/* هذا الـ div هو المسئول عن الشكل الآن */}
                                    <div className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg transition-all hover:border-islamic-emerald peer-checked:border-islamic-emerald peer-checked:text-islamic-emerald ${variant === 'v3' ? 'border-green-200 bg-white shadow-sm peer-checked:bg-green-50 peer-checked:border-[#064e3b] peer-checked:text-[#064e3b]' : variant === 'v2' ? 'border-gray-300 peer-checked:bg-islamic-gold/20' : 'border-gray-300 peer-checked:bg-emerald-50'}`}>
                                        <div className="font-arabic text-lg font-bold">أزهري</div>
                                        <div className="text-sm font-semibold">Azhari</div>
                                    </div>
                                </label>
                            </div>

                            <AnimatePresence>
                                {errors.educationType && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: -10, height: 0 }}
                                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                                        exit={{ opacity: 0, y: -10, height: 0 }}
                                        className="text-red-500 text-sm mt-1 text-right"
                                    >
                                        {errors.educationType.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Education Stage */}
                        <div>
                            <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                <div className="flex w-full items-center justify-end gap-2 text-right">
                                    {getLabelText('المرحلة الدراسية', 'Education Stage')}
                                    <GraduationCap className={`w-5 h-5 text-islamic-emerald ${variant === 'v3' ? '!text-[#064e3b]' : ''}`} />
                                </div>
                            </label>
                            <select
                                {...register('educationStage', {
                                    required: 'المرحلة الدراسية مطلوبة • Education stage is required',
                                })}
                                className={`input-field text-right ${errors.educationStage ? 'border-red-500' : ''}`}
                            >
                                <option value="">اختر المرحلة • Select stage</option>
                                <option value="primary">ابتدائي • Primary</option>
                                <option value="preparatory">إعدادي • Preparatory</option>
                                <option value="secondary">ثانوي • Secondary</option>
                                <option value="university">جامعي • University</option>
                                <option value="graduated">خريج • Graduated</option>
                            </select>
                            <AnimatePresence>
                                {errors.educationStage && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: -10, height: 0 }}
                                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                                        exit={{ opacity: 0, y: -10, height: 0 }}
                                        className="text-red-500 text-sm mt-1 text-right"
                                    >
                                        {errors.educationStage.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Grade Level - Hidden for university and graduated students */}
                        {selectedEducationStage &&
                            selectedEducationStage !== 'university' &&
                            selectedEducationStage !== 'graduated' && (
                                <div>
                                    <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                        <div className="flex w-full items-center justify-end gap-2 text-right">
                                            {getLabelText('الصف الدراسي', 'Grade Level')}
                                            <School className={`w-5 h-5 text-islamic-emerald ${variant === 'v3' ? '!text-[#064e3b]' : ''}`} />
                                        </div>
                                    </label>
                                    <select
                                        {...register('gradeLevel', {
                                            required: (selectedEducationStage === 'primary' ||
                                                selectedEducationStage === 'preparatory' ||
                                                selectedEducationStage === 'secondary')
                                                ? 'الصف الدراسي مطلوب • Grade level is required'
                                                : false,
                                        })}
                                        className={`input-field text-right ${errors.gradeLevel ? 'border-red-500' : ''}`}
                                        disabled={!selectedEducationStage}
                                    >
                                        <option value="">
                                            {selectedEducationStage
                                                ? 'اختر الصف • Select grade'
                                                : 'اختر المرحلة أولاً • Select stage first'}
                                        </option>
                                        {getGradeOptions().map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                    <AnimatePresence>
                                {errors.gradeLevel && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: -10, height: 0 }}
                                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                                        exit={{ opacity: 0, y: -10, height: 0 }}
                                        className="text-red-500 text-sm mt-1 text-right"
                                    >
                                        {errors.gradeLevel.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                                </div>
                            )}

                        {/* WhatsApp Number */}
                        <div>
                            <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                    <div className="flex w-full items-center justify-end gap-2 text-right">
                                    {getLabelText('رقم الواتساب', 'WhatsApp Number')}
                                    <Phone className={`w-5 h-5 text-islamic-emerald ${variant === 'v3' ? '!text-[#064e3b]' : ''}`} />
                                </div>
                            </label>
                            <input
                                type="tel"
                                {...register('whatsappNumber', {
                                    required: 'رقم الواتساب مطلوب • WhatsApp number is required',
                                    pattern: {
                                        value: /^01[0-2,5]{1}[0-9]{8}$/,
                                        message: 'يرجى إدخال رقم موبايل صحيح (11 رقم يبدأ بـ 01) • Please enter a valid mobile number (11 digits starting with 01)',
                                    },
                                })}
                                className={`input-field text-right ${errors.whatsappNumber ? 'border-red-500' : ''}`}
                                placeholder="01012345678"
                            />
                            <AnimatePresence>
                                {errors.whatsappNumber && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: -10, height: 0 }}
                                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                                        exit={{ opacity: 0, y: -10, height: 0 }}
                                        className="text-red-500 text-sm mt-1 text-right"
                                    >
                                        {errors.whatsappNumber.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Guardian Details Section - Conditional */}
                        {isGuardianRequired && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="border-t-2 border-islamic-emerald/20 pt-6 mt-6"
                            >
                                <div className="mb-6">
                                    <h3 className={`text-2xl font-bold text-center mb-2 font-arabic ${variant === 'v3' ? 'text-[#064e3b]' : 'text-islamic-emerald'}`}>
                                        بيانات ولي الأمر
                                    </h3>
                                    <p className={`text-center text-lg ${variant === 'v3' ? 'text-[#064e3b]' : 'text-gray-600'}`}>
                                        Guardian Information
                                    </p>
                                    <div className="w-16 h-1 bg-gradient-to-r from-islamic-emerald to-islamic-gold mx-auto rounded-full mt-2" />
                                </div>

                                {/* Guardian Full Name */}
                                <div>
                                    <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                        <div className="flex w-full items-center justify-end gap-2 text-right">
                                            {getLabelText('اسم ولي الأمر بالكامل', 'Guardian Full Name')}
                                            <Users className={`w-5 h-5 text-islamic-emerald ${variant === 'v3' ? '!text-[#064e3b]' : ''}`} />
                                        </div>
                                    </label>
                                    <input
                                        type="text"
                                        {...register('guardianName', {
                                            required: isGuardianRequired ? 'اسم ولي الأمر مطلوب • Guardian name is required' : false,
                                            minLength: {
                                                value: 3,
                                                message: 'يجب أن يكون الاسم 3 أحرف على الأقل • Name must be at least 3 characters',
                                            },
                                        })}
                                        className={`input-field text-right ${errors.guardianName ? 'border-red-500' : ''}`}
                                        placeholder="أدخل اسم ولي الأمر • Enter guardian name"
                                    />
                                    <AnimatePresence>
                                {errors.guardianName && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: -10, height: 0 }}
                                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                                        exit={{ opacity: 0, y: -10, height: 0 }}
                                        className="text-red-500 text-sm mt-1 text-right"
                                    >
                                        {errors.guardianName.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                                </div>

                                {/* Guardian National ID */}
                                <div>
                                    <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                        <div className="flex w-full items-center justify-end gap-2 text-right">
                                            {getLabelText('الرقم القومي لولي الأمر', 'Guardian National ID')}
                                            <CreditCard className={`w-5 h-5 text-islamic-emerald ${variant === 'v3' ? '!text-[#064e3b]' : ''}`} />
                                        </div>
                                    </label>
                                    <input
                                        type="text"
                                        {...register('guardianNationalId', {
                                            required: isGuardianRequired ? 'الرقم القومي لولي الأمر مطلوب • Guardian national ID is required' : false,
                                            pattern: {
                                                value: /^\d{14}$/,
                                                message: 'يجب أن يكون الرقم القومي 14 رقماً • National ID must be exactly 14 digits',
                                            },
                                        })}
                                        className={`input-field text-right ${errors.guardianNationalId ? 'border-red-500' : ''}`}
                                        placeholder="أدخل الرقم القومي (14 رقم) • Enter National ID (14 digits)"
                                        maxLength={14}
                                    />
                                    <AnimatePresence>
                                {errors.guardianNationalId && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: -10, height: 0 }}
                                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                                        exit={{ opacity: 0, y: -10, height: 0 }}
                                        className="text-red-500 text-sm mt-1 text-right"
                                    >
                                        {errors.guardianNationalId.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                                </div>

                                {/* Guardian Occupation */}
                                <div>
                                    <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                        <div className="flex w-full items-center justify-end gap-2 text-right">
                                            {getLabelText('الوظيفة / العمل', 'Occupation / Work')}
                                            <Briefcase className={`w-5 h-5 text-islamic-emerald ${variant === 'v3' ? '!text-[#064e3b]' : ''}`} />
                                        </div>
                                    </label>
                                    <input
                                        type="text"
                                        {...register('guardianOccupation', {
                                            required: isGuardianRequired ? 'الوظيفة مطلوبة • Occupation is required' : false,
                                            minLength: {
                                                value: 2,
                                                message: 'يجب أن يكون النص حرفين على الأقل • Must be at least 2 characters',
                                            },
                                        })}
                                        className={`input-field text-right ${errors.guardianOccupation ? 'border-red-500' : ''}`}
                                        placeholder="أدخل الوظيفة • Enter occupation"
                                    />
                                    <AnimatePresence>
                                {errors.guardianOccupation && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: -10, height: 0 }}
                                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                                        exit={{ opacity: 0, y: -10, height: 0 }}
                                        className="text-red-500 text-sm mt-1 text-right"
                                    >
                                        {errors.guardianOccupation.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                                </div>

                                {/* Guardian Address */}
                                <div>
                                    <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                        <div className="flex w-full items-center justify-end gap-2 text-right">
                                            {getLabelText('عنوان ومحل الإقامة (تفصيلي)', 'Detailed Residential Address')}
                                            <MapPin className={`w-5 h-5 text-islamic-emerald ${variant === 'v3' ? '!text-[#064e3b]' : ''}`} />
                                        </div>
                                    </label>
                                    <textarea
                                        {...register('guardianAddress', {
                                            required: isGuardianRequired ? 'العنوان مطلوب • Address is required' : false,
                                            minLength: {
                                                value: 10,
                                                message: 'يجب أن يكون العنوان 10 أحرف على الأقل • Address must be at least 10 characters',
                                            },
                                        })}
                                        rows={3}
                                        className={`input-field text-right ${errors.guardianAddress ? 'border-red-500' : ''}`}
                                        placeholder="أدخل العنوان التفصيلي • Enter detailed address"
                                    />
                                    <AnimatePresence>
                                {errors.guardianAddress && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: -10, height: 0 }}
                                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                                        exit={{ opacity: 0, y: -10, height: 0 }}
                                        className="text-red-500 text-sm mt-1 text-right"
                                    >
                                        {errors.guardianAddress.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                                </div>

                                {/* Guardian WhatsApp Number */}
                                <div>
                                    <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                        <div className="flex w-full items-center justify-end gap-2 text-right">
                                            {getLabelText('رقم تليفون ولي الأمر (واتساب)', 'Guardian WhatsApp Number')}
                                            <Phone className={`w-5 h-5 text-islamic-emerald ${variant === 'v3' ? '!text-[#064e3b]' : ''}`} />
                                        </div>
                                    </label>
                                    <input
                                        type="tel"
                                        {...register('guardianWhatsappNumber', {
                                            required: isGuardianRequired ? 'رقم الواتساب مطلوب • WhatsApp number is required' : false,
                                            pattern: {
                                                value: /^01[0-2,5]{1}[0-9]{8}$/,
                                                message: 'يرجى إدخال رقم موبايل صحيح (11 رقم يبدأ بـ 01) • Please enter a valid mobile number (11 digits starting with 01)',
                                            },
                                        })}
                                        className={`input-field text-right ${errors.guardianWhatsappNumber ? 'border-red-500' : ''}`}
                                        placeholder="01012345678"
                                    />
                                    <AnimatePresence>
                                {errors.guardianWhatsappNumber && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: -10, height: 0 }}
                                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                                        exit={{ opacity: 0, y: -10, height: 0 }}
                                        className="text-red-500 text-sm mt-1 text-right"
                                    >
                                        {errors.guardianWhatsappNumber.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                                </div>
                            </motion.div>
                        )}

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={submitState === 'loading'}
                            whileHover={{ scale: submitState === 'loading' ? 1 : 1.02 }}
                            whileTap={{ scale: submitState === 'loading' ? 1 : 0.98 }}
                            className={submitButtonClassName}
                        >
                            {submitState === 'loading' ? (
                                <>
                                    <Loader2 className="w-6 h-6 animate-spin" />
                                    <span>جاري التسجيل • Processing...</span>
                                </>
                            ) : (
                                <span>سجل الآن • Register Now</span>
                            )}
                        </motion.button>
                    </form>
                </div>
            </motion.div>

            {/* Success Modal */}
            <AnimatePresence>
                {submitState === 'success' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={() => setSubmitState('idle')}
                        role="dialog"
                        aria-modal="true"
                        aria-label="تم التسجيل بنجاح"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl p-8 sm:p-12 max-w-md w-full shadow-2xl text-center border-4 border-islamic-emerald"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring' }}
                            >
                                <CheckCircle className="w-20 h-20 text-islamic-emerald mx-auto mb-6" />
                            </motion.div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-arabic">
                                تم تسجيل بياناتك بنجاح
                            </h3>
                            <p className="text-xl text-gray-700 mb-2">Registration Successful!</p>
                            <p className="text-gray-600 mb-6 text-lg">
                                خطوة واحدة أخيرة: يرجى الانضمام لجروب الواتساب الرسمي لمتابعة مواعيد الاختبارات والدروس.
                                <br />
                                <span className="text-sm">One final step: Please join the official WhatsApp group to follow exam schedules and lessons.</span>
                            </p>

                            {/* Primary WhatsApp Group Button */}
                            <motion.a
                                href="https://chat.whatsapp.com/GFUNTrnPeYaG8ywIu4S6Ma"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-islamic-emerald hover:bg-emerald-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 mb-4 text-lg animate-pulse"
                            >
                                <MessageCircle className="w-6 h-6" />
                                <span>انضم إلى جروب الواتساب الآن</span>
                            </motion.a>

                            {/* Secondary OK Button */}
                            <button
                                type="button"
                                onClick={() => setSubmitState('idle')}
                                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                            >
                                حسناً • OK
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Error Modal */}
            <AnimatePresence>
                {submitState === 'error' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={() => setSubmitState('idle')}
                        role="dialog"
                        aria-modal="true"
                        aria-label="حدث خطأ في التسجيل"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl p-8 sm:p-12 max-w-md w-full shadow-2xl text-center"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring' }}
                            >
                                <XCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />
                            </motion.div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-arabic">
                                خطأ في التسجيل
                            </h3>
                            <p className="text-xl text-gray-700 mb-2">Registration Error</p>
                            <p className="text-gray-600 mb-6 text-sm">{errorMessage}</p>
                            <button
                                type="button"
                                onClick={() => setSubmitState('idle')}
                                className="btn-secondary"
                            >
                                حاول مرة أخرى • Try Again
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
