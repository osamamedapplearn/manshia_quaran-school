'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'
import { Loader2, CheckCircle, XCircle, User, CreditCard, Calendar, GraduationCap, Phone, School, Users, Briefcase, MapPin, BookOpen } from 'lucide-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

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

export default function RegistrationForm() {
    const [submitState, setSubmitState] = useState<SubmitState>('idle')
    const [errorMessage, setErrorMessage] = useState('')

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
            const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL

            if (!webhookUrl) {
                throw new Error('Webhook URL is not configured')
            }

            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true',
                },
                body: JSON.stringify({
                    fullName: data.fullName,
                    nationalId: data.nationalId,
                    birthDate: data.birthDate?.toISOString(),
                    currentMemorization: data.currentMemorization,
                    age: data.age,
                    educationType: data.educationType,
                    educationStage: data.educationStage,
                    gradeLevel: data.gradeLevel,
                    whatsappNumber: data.whatsappNumber,
                    ...(isGuardianRequired && {
                        guardianName: data.guardianName,
                        guardianNationalId: data.guardianNationalId,
                        guardianOccupation: data.guardianOccupation,
                        guardianAddress: data.guardianAddress,
                        guardianWhatsappNumber: data.guardianWhatsappNumber,
                    }),
                    timestamp: new Date().toISOString(),
                }),
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

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

    return (
        <section id="registration" className="section-container bg-white">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                    <span className="text-gradient">التسجيل</span>
                    <span className="block text-3xl sm:text-4xl mt-2 text-gray-700">Registration</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    انضم إلى عائلتنا وابدأ رحلتك في حفظ القرآن الكريم
                    <br />
                    <span className="text-base">Join our family and start your Quran memorization journey</span>
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
                <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 border-2 border-gray-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Full Name */}
                        <div>
                            <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                <div className="flex items-center justify-end gap-2">
                                    <span>الاسم الكامل • Full Name</span>
                                    <User className="w-5 h-5 text-islamic-emerald" />
                                </div>
                            </label>
                            <input
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
                            />
                            {errors.fullName && (
                                <p className="text-red-500 text-sm mt-1 text-right">{errors.fullName.message}</p>
                            )}
                        </div>

                        {/* National ID */}
                        <div>
                            <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                <div className="flex items-center justify-end gap-2">
                                    <span>الرقم القومي • National ID</span>
                                    <CreditCard className="w-5 h-5 text-islamic-emerald" />
                                </div>
                            </label>
                            <input
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
                            />
                            {errors.nationalId && (
                                <p className="text-red-500 text-sm mt-1 text-right">{errors.nationalId.message}</p>
                            )}
                        </div>

                        {/* Birth Date */}
                        <div>
                            <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                <div className="flex items-center justify-end gap-2">
                                    <span>تاريخ الميلاد • Date of Birth</span>
                                    <Calendar className="w-5 h-5 text-islamic-emerald" />
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
                                        onChange={(date) => field.onChange(date)}
                                        dateFormat="dd/MM/yyyy"
                                        maxDate={new Date()}
                                        showYearDropdown
                                        scrollableYearDropdown
                                        yearDropdownItemNumber={100}
                                        placeholderText="اختر تاريخ الميلاد • Select birth date"
                                        className={`input-field text-right w-full ${errors.birthDate ? 'border-red-500' : ''}`}
                                    />
                                )}
                            />
                            {errors.birthDate && (
                                <p className="text-red-500 text-sm mt-1 text-right">{errors.birthDate.message}</p>
                            )}
                        </div>

                        {/* Current Memorization */}
                        <div>
                            <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                <div className="flex items-center justify-end gap-2">
                                    <span>مقدار الحفظ الحالي • Current Memorization Amount</span>
                                    <BookOpen className="w-5 h-5 text-islamic-emerald" />
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
                            {errors.currentMemorization && (
                                <p className="text-red-500 text-sm mt-1 text-right">{errors.currentMemorization.message}</p>
                            )}
                        </div>

                        {/* Age */}
                        <div>
                            <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                <div className="flex items-center justify-end gap-2">
                                    <span>العمر • Age</span>
                                    <Calendar className="w-5 h-5 text-islamic-emerald" />
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
                            {errors.age && (
                                <p className="text-red-500 text-sm mt-1 text-right">{errors.age.message}</p>
                            )}
                        </div>

                        {/* Education Type */}
                        <div>
                            <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                <div className="flex items-center justify-end gap-2">
                                    <span>نوع التعليم • Education Type</span>
                                    <School className="w-5 h-5 text-islamic-emerald" />
                                </div>
                            </label>

                            <div className="grid grid-cols-2 gap-4">
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
                                    <div className="flex flex-col items-center justify-center p-4 border-2 border-gray-300 rounded-lg transition-all hover:border-islamic-emerald peer-checked:border-islamic-emerald peer-checked:bg-green-300 peer-checked:text-islamic-emerald">
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
                                    <div className="flex flex-col items-center justify-center p-4 border-2 border-gray-300 rounded-lg transition-all hover:border-islamic-emerald peer-checked:border-islamic-emerald peer-checked:bg-green-300 peer-checked:text-islamic-emerald">
                                        <div className="font-arabic text-lg font-bold">أزهري</div>
                                        <div className="text-sm font-semibold">Azhari</div>
                                    </div>
                                </label>
                            </div>

                            {errors.educationType && (
                                <p className="text-red-500 text-sm mt-1 text-right">{errors.educationType.message}</p>
                            )}
                        </div>

                        {/* Education Stage */}
                        <div>
                            <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                <div className="flex items-center justify-end gap-2">
                                    <span>المرحلة الدراسية • Education Stage</span>
                                    <GraduationCap className="w-5 h-5 text-islamic-emerald" />
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
                            {errors.educationStage && (
                                <p className="text-red-500 text-sm mt-1 text-right">{errors.educationStage.message}</p>
                            )}
                        </div>

                        {/* Grade Level - Hidden for university and graduated students */}
                        {selectedEducationStage &&
                            selectedEducationStage !== 'university' &&
                            selectedEducationStage !== 'graduated' && (
                                <div>
                                    <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                        <div className="flex items-center justify-end gap-2">
                                            <span>الصف الدراسي • Grade Level</span>
                                            <School className="w-5 h-5 text-islamic-emerald" />
                                        </div>
                                    </label>
                                    <select
                                        {...register('gradeLevel', {
                                            required: selectedEducationStage !== 'university' && selectedEducationStage !== 'graduated'
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
                                    {errors.gradeLevel && (
                                        <p className="text-red-500 text-sm mt-1 text-right">{errors.gradeLevel.message}</p>
                                    )}
                                </div>
                            )}

                        {/* WhatsApp Number */}
                        <div>
                            <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                <div className="flex items-center justify-end gap-2">
                                    <span>رقم الواتساب • WhatsApp Number</span>
                                    <Phone className="w-5 h-5 text-islamic-emerald" />
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
                            {errors.whatsappNumber && (
                                <p className="text-red-500 text-sm mt-1 text-right">{errors.whatsappNumber.message}</p>
                            )}
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
                                    <h3 className="text-2xl font-bold text-center mb-2 font-arabic text-islamic-emerald">
                                        بيانات ولي الأمر
                                    </h3>
                                    <p className="text-center text-gray-600 text-lg">
                                        Guardian Information
                                    </p>
                                    <div className="w-16 h-1 bg-gradient-to-r from-islamic-emerald to-islamic-gold mx-auto rounded-full mt-2" />
                                </div>

                                {/* Guardian Full Name */}
                                <div>
                                    <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                        <div className="flex items-center justify-end gap-2">
                                            <span>اسم ولي الأمر بالكامل • Guardian Full Name</span>
                                            <Users className="w-5 h-5 text-islamic-emerald" />
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
                                    {errors.guardianName && (
                                        <p className="text-red-500 text-sm mt-1 text-right">{errors.guardianName.message}</p>
                                    )}
                                </div>

                                {/* Guardian National ID */}
                                <div>
                                    <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                        <div className="flex items-center justify-end gap-2">
                                            <span>الرقم القومي لولي الأمر • Guardian National ID</span>
                                            <CreditCard className="w-5 h-5 text-islamic-emerald" />
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
                                    {errors.guardianNationalId && (
                                        <p className="text-red-500 text-sm mt-1 text-right">{errors.guardianNationalId.message}</p>
                                    )}
                                </div>

                                {/* Guardian Occupation */}
                                <div>
                                    <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                        <div className="flex items-center justify-end gap-2">
                                            <span>الوظيفة / العمل • Occupation / Work</span>
                                            <Briefcase className="w-5 h-5 text-islamic-emerald" />
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
                                    {errors.guardianOccupation && (
                                        <p className="text-red-500 text-sm mt-1 text-right">{errors.guardianOccupation.message}</p>
                                    )}
                                </div>

                                {/* Guardian Address */}
                                <div>
                                    <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                        <div className="flex items-center justify-end gap-2">
                                            <span>عنوان ومحل الإقامة (تفصيلي) • Detailed Residential Address</span>
                                            <MapPin className="w-5 h-5 text-islamic-emerald" />
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
                                    {errors.guardianAddress && (
                                        <p className="text-red-500 text-sm mt-1 text-right">{errors.guardianAddress.message}</p>
                                    )}
                                </div>

                                {/* Guardian WhatsApp Number */}
                                <div>
                                    <label className="block text-right mb-2 font-semibold text-gray-700 font-arabic">
                                        <div className="flex items-center justify-end gap-2">
                                            <span>رقم تليفون ولي الأمر (واتساب) • Guardian WhatsApp Number</span>
                                            <Phone className="w-5 h-5 text-islamic-emerald" />
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
                                    {errors.guardianWhatsappNumber && (
                                        <p className="text-red-500 text-sm mt-1 text-right">{errors.guardianWhatsappNumber.message}</p>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={submitState === 'loading'}
                            whileHover={{ scale: submitState === 'loading' ? 1 : 1.02 }}
                            whileTap={{ scale: submitState === 'loading' ? 1 : 0.98 }}
                            className="w-full btn-primary text-xl py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
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
                                <CheckCircle className="w-20 h-20 text-islamic-emerald mx-auto mb-6" />
                            </motion.div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-arabic">
                                تم التسجيل بنجاح!
                            </h3>
                            <p className="text-xl text-gray-700 mb-2">Registration Successful!</p>
                            <p className="text-gray-600 mb-6">
                                سنتواصل معك قريباً عبر الواتساب
                                <br />
                                We will contact you soon on WhatsApp
                            </p>
                            <button
                                onClick={() => setSubmitState('idle')}
                                className="btn-primary"
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
