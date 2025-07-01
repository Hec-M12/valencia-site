'use client';
import { motion } from 'framer-motion';
import { FaUsers, FaBalanceScale, FaShieldAlt, FaHandshake } from 'react-icons/fa';

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const valores = [
	{
		icon: <FaShieldAlt />,
		title: 'Resiliencia',
		subtitle: 'Capacidad de superar desafíos con fortaleza.',
	},
	{
		icon: <FaUsers />,
		title: 'Respeto',
		subtitle: 'Trato digno y consideración mutua.',
	},
	{
		icon: <FaBalanceScale />,
		title: 'Honradez',
		subtitle: 'Integridad en pensamiento y acción.',
	},
	{
		icon: <FaHandshake />,
		title: 'Lealtad',
		subtitle: 'Compromiso firme con la comunidad.',
	},
];

export default function KeyValuesSection() {
	return (
		<section className="py-12 pb-24
    bg-[linear-gradient(to_bottom,_white_75%,_theme(colors.blue-gradient)_100%)]
    md:bg-[linear-gradient(to_bottom,_white_60%,_theme(colors.blue-gradient)_98%)] 
    lg:bg-[linear-gradient(to_bottom,_white_60%,_theme(colors.blue-gradient)_98%)]
    md:h-[100] lg:mx-auto">
			<div className="max-w-5xl mx-auto px-6 lg:max-w-6xl">
				<div className="relative text-center mb-24 sm:mb-20">
					<motion.h2
					  className="absolute inset-8 text-6xl md:text-8xl font-bold text-valencia-light-blue/25 uppercase leading-none"
					  variants={headingVariants}
					  initial="hidden"
					  whileInView="visible"
					  viewport={{ once: true, amount: 0.3 }}
					>
						Valores
					</motion.h2>
					<motion.h3
					  className="relative text-2xl md:text-4xl font-semibold text-valencia-blue/80"
					  variants={headingVariants}
					  initial="hidden"
					  whileInView="visible"
					  viewport={{ once: true, amount: 0.3 }}
					>
						Nuestros
					</motion.h3>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8 pt-6 md:pt-14">
					{valores.map(({ icon, title, subtitle }) => (
						<div
							key={title}
							className="w-[75vw] mx-auto md:w-full flex flex-col items-center text-center bg-valencia-light-blue rounded-lg p-6"
						>
							<div className="mb-4">
								<div className="bg-white/20 rounded-full p-4 inline-flex items-center justify-center">
									<div className="text-4xl text-white">{icon}</div>
								</div>
							</div>
							<h3 className="font-semibold text-xl mb-2 text-white">
								{title}
							</h3>
							<p className="text-gray-200">{subtitle}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}