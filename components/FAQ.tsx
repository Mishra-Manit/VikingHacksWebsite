"use client"
import { useState } from "react";

type FAQItem = {
	answer: string;
};

type FAQListProps = {
	FAQList: Record<string, FAQItem>;
};

export default function FAQSection({ FAQList }: FAQListProps) {
	const [openQuestion, setOpenQuestion] = useState<string | null>(null);

	const toggleQuestion = (question: string) => {
		setOpenQuestion((prev) => (prev === question ? null : question));
	};

	return (
		<div className="w-full mt-5 lg:mt-0 lg:w-[60%] border-y border-dashed border-y-blue-300 divide-y divide-dashed divide-blue-300 text-black">
			{Object.entries(FAQList).map(([question, { answer }]) => {
				const isOpen = openQuestion === question;

				return (
					<button
						key={question}
						className="p-5 flex flex-col gap-2 w-full py-10"
						onClick={() => toggleQuestion(question)}
					>
						<div className="flex items-start gap-2">
							<svg
								className={`transition-transform duration-100 mt-1 min-w-[20px] ${isOpen ? "rotate-90" : ""
									}`}
								fill="#000000"
								width="20px"
								height="20px"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<polygon
									fillRule="evenodd"
									points="17.586 13 3 13 3 11 17.586 11 11.293 4.707 12.707 3.293 21.414 12 12.707 20.707 11.293 19.293"
								/>
							</svg>
							<h1 className="text-lg font-medium -tracking-[0.05rem] text-left">
								{question}
							</h1>
						</div>
						<h2 className={`text-left transition-all ${isOpen ? "block" : "hidden"}`}>
							{answer}
						</h2>
					</button>
				);
			})}
		</div>
	);
}