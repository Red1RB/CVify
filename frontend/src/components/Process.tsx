'use client';
import Image from 'next/image';
import step1 from '../../assets/images/step1_upload_cv.png';
import step2 from '../../assets/images/step2_get_feedback.png';
import step3 from '../../assets/images/step3_apply_confidently.png';

export function Process() {
  const steps = [
    {
      title: 'Step 1: Upload Your CV',
      number: '1',
      description: 'Submit your resume and let our AI analyze it instantly.',
      image: step1,
      color: 'from-blue-900 to-blue-700',
    },
    {
      title: 'Step 2: Get Feedback',
      number: '2',
      description: 'Receive personalized suggestions to improve your CV.',
      image: step2,
      color: 'from-blue-700 to-blue-500',
    },
    {
      title: 'Step 3: Apply Confidently',
      number: '3',
      description: 'Enhance your chances of landing interviews and dream jobs.',
      image: step3,
      color: 'from-blue-500 to-blue-300',
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-950 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        How CVify Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br ${step.color} shadow-2xl transition-all duration-500 hover:-translate-y-2`}
          >
            <div className="absolute top-5 left-5 z-10 bg-white text-gray-900 font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-md text-lg">
              {step.number}
            </div>

            <div className="relative h-64 md:h-72 w-full overflow-hidden">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="transform group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            <div className="p-8 flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-200 text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
