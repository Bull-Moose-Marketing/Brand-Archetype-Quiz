// Base archetype definitions with expanded characteristics
const archetypes = {
	innocent: {
		name: 'The Innocent',
		traits: 'Pure, optimistic, authentic',
		description:
			'Your destination embodies authenticity and simple pleasures, appealing to those seeking unspoiled experiences and genuine connections.',
		dmoPhrases: [
			'Pure and natural beauty',
			'Authentic local experiences',
			'Wholesome memories',
			'Genuine hospitality',
		],
		marketingTips:
			'Emphasize authenticity, natural beauty, and simple pleasures. Use clean, straightforward imagery and messaging.',
		img: './img/the-innocent.png',
	},
	sage: {
		name: 'The Sage',
		traits: 'Educational, cultural, enlightening',
		description:
			'Your destination is a center of learning and cultural enrichment, attracting visitors seeking knowledge and understanding.',
		dmoPhrases: [
			'Discover our heritage',
			'Immerse yourself in culture',
			'Educational experiences',
			'Historical significance',
		],
		marketingTips:
			'Focus on educational aspects, cultural depth, and opportunities for personal growth and learning.',
		img: './img/the-sage.png',
	},
	explorer: {
		name: 'The Explorer',
		traits: 'Adventurous, discovering, independent',
		description:
			'Your destination appeals to those seeking new experiences and adventures, offering opportunities for discovery and exploration.',
		dmoPhrases: ['Off the beaten path', 'Adventure awaits', 'Discover something new', 'Forge your own trail'],
		marketingTips: 'Highlight unique experiences, adventure opportunities, and the thrill of discovery.',
		img: './img/the-explorer.png',
	},
	rebel: {
		name: 'The Rebel',
		traits: 'Unconventional, unique, bold',
		description:
			'Your destination challenges conventions and attracts those seeking unique, alternative experiences.',
		dmoPhrases: ['Break free from ordinary', 'Challenge conventions', 'Uniquely different', 'Edge of experience'],
		marketingTips:
			'Emphasize your unique attributes and appeal to those seeking something different from mainstream tourism.',
		img: './img/the-rebel.png',
	},
	magician: {
		name: 'The Magician',
		traits: 'Transformative, magical, special',
		description:
			'Your destination offers transformative experiences that change perspectives and create magical moments.',
		dmoPhrases: [
			'Transform your perspective',
			'Experience the magic',
			'Extraordinary moments',
			'Life-changing experiences',
		],
		marketingTips: 'Focus on transformative experiences and the magical aspects of your destination.',
		img: './img/the-magician.png',
	},
	hero: {
		name: 'The Hero',
		traits: 'Inspiring, challenging, achievement',
		description:
			'Your destination attracts those seeking personal challenges and achievements, offering opportunities for triumph.',
		dmoPhrases: ['Conquer new heights', 'Challenge yourself', 'Achievement awaits', 'Push your limits'],
		marketingTips: 'Highlight opportunities for personal achievement and overcoming challenges.',
		img: './img/the-hero.png',
	},
	everyman: {
		name: 'The Everyman',
		traits: 'Welcoming, accessible, friendly',
		description:
			'Your destination emphasizes inclusivity and accessibility, making everyone feel welcome and at home.',
		dmoPhrases: ["Everyone's welcome", 'Feel at home', 'Your kind of place', 'Community spirit'],
		marketingTips: 'Emphasize accessibility, friendliness, and community aspects of your destination.',
		img: './img/the-everyman-regular-guy-girl.png',
	},
	lover: {
		name: 'The Lover',
		traits: 'Romantic, indulgent, intimate',
		description: 'Your destination specializes in romantic and sensual experiences, perfect for intimate getaways.',
		dmoPhrases: ['Romance awaits', 'Intimate escapes', 'Sensual experiences', 'Romantic moments'],
		marketingTips: 'Focus on romantic experiences, luxury amenities, and intimate moments.',
		img: './img/the-lover.png',
	},
	jester: {
		name: 'The Jester',
		traits: 'Fun, playful, entertaining',
		description: 'Your destination prioritizes fun and entertainment, creating joy and memorable experiences.',
		dmoPhrases: ['Fun for everyone', 'Entertainment capital', 'Where fun lives', 'Playful spirit'],
		marketingTips: 'Highlight entertainment options and the fun, playful aspects of your destination.',
		img: './img/the-jester.png',
	},
	caregiver: {
		name: 'The Caregiver',
		traits: 'Nurturing, safe, comfortable',
		description: "Your destination emphasizes comfort, safety, and taking care of visitors' needs.",
		dmoPhrases: ["We'll take care of you", 'Safe and welcoming', 'Comfort awaits', 'Peace of mind'],
		marketingTips: 'Emphasize safety, comfort, and your attention to visitor needs.',
		img: './img/the-caregiver.png',
	},
	creator: {
		name: 'The Creator',
		traits: 'Creative, artistic, innovative',
		description:
			'Your destination nurtures creativity and artistic expression, inspiring visitors to explore their creative side.',
		dmoPhrases: ['Inspire creativity', 'Artistic spirit', 'Creative energy', 'Innovative experiences'],
		marketingTips: 'Focus on artistic offerings, creative experiences, and opportunities for self-expression.',
		img: './img/the-creator.png',
	},
	ruler: {
		name: 'The Ruler',
		traits: 'Premium, exclusive, prestigious',
		description: 'Your destination represents the highest standards of quality and exclusivity.',
		dmoPhrases: ['World-class destination', 'Premium experiences', 'Exclusive access', 'Unparalleled luxury'],
		marketingTips: 'Emphasize premium experiences, exclusivity, and world-class offerings.',
		img: './img/the-ruler.png',
	},
};

const questions = [
	{
		id: 1,
		text: 'What values would residents most likely associate with your destination?',
		options: [
			{
				text: 'Authenticity and tradition',
				weights: {
					innocent: 3,
					everyman: 1,
				},
			},
			{
				text: 'Innovation and creativity',
				weights: {
					creator: 3,
					magician: 1,
				},
			},
			{
				text: 'Cultural heritage and wisdom',
				weights: {
					sage: 3,
					ruler: 1,
				},
			},
			{
				text: 'Freedom and adventure',
				weights: {
					explorer: 3,
					rebel: 1,
				},
			},
			{
				text: 'Fun and entertainment',
				weights: {
					jester: 3,
					lover: 1,
				},
			},
			{
				text: 'Community and caring',
				weights: {
					caregiver: 3,
					everyman: 1,
				},
			},
		],
	},
	{
		id: 2,
		text: "How would you primarily describe your destination's visitor experience?",
		options: [
			{
				text: 'Pure, natural, and authentic',
				weights: {
					innocent: 3,
					explorer: 1,
				},
			},
			{
				text: 'Cultural and educational',
				weights: {
					sage: 3,
					creator: 1,
				},
			},
			{
				text: 'Adventurous and discovering',
				weights: {
					explorer: 3,
					hero: 1,
				},
			},
			{
				text: 'Luxurious and prestigious',
				weights: {
					ruler: 3,
					lover: 1,
				},
			},
			{
				text: 'Creative and inspiring',
				weights: {
					creator: 3,
					magician: 1,
				},
			},
			{
				text: 'Playful and entertaining',
				weights: {
					jester: 3,
					everyman: 1,
				},
			},
		],
	},
	{
		id: 3,
		text: "After considering your destination's top amenities, which answer best describes the kind of experiences you can promise visitors?",
		options: [
			{
				text: 'Access to pristine nature and authentic local culture',
				weights: {
					innocent: 3,
					explorer: 1,
				},
			},
			{
				text: 'World-class luxury and exclusive experiences',
				weights: {
					ruler: 3,
					lover: 1,
				},
			},
			{
				text: 'Creative and artistic immersion',
				weights: {
					creator: 3,
					magician: 1,
				},
			},
			{
				text: 'Adventure and outdoor achievement',
				weights: {
					hero: 3,
					explorer: 1,
				},
			},
			{
				text: 'Entertainment and vibrant nightlife',
				weights: {
					jester: 3,
					rebel: 1,
				},
			},
			{
				text: 'Educational and cultural enlightenment',
				weights: {
					sage: 3,
					creator: 1,
				},
			},
		],
	},
	{
		id: 4,
		text: "What best describes your destination's marketing tone?",
		options: [
			{
				text: 'Sophisticated and exclusive',
				weights: {
					ruler: 3,
					lover: 1,
				},
			},
			{
				text: 'Friendly and welcoming',
				weights: {
					everyman: 3,
					caregiver: 1,
				},
			},
			{
				text: 'Bold and unconventional',
				weights: {
					rebel: 3,
					explorer: 1,
				},
			},
			{
				text: 'Mystical and transformative',
				weights: {
					magician: 3,
					creator: 1,
				},
			},
			{
				text: 'Playful and lighthearted',
				weights: {
					jester: 3,
					innocent: 1,
				},
			},
			{
				text: 'Inspiring and challenging',
				weights: {
					hero: 3,
					sage: 1,
				},
			},
		],
	},
	{
		id: 5,
		text: "How do most visitors interact with your destination's environment?",
		options: [
			{
				text: 'Seeking peaceful connection with nature',
				weights: {
					innocent: 3,
					caregiver: 1,
				},
			},
			{
				text: 'Pursuing outdoor adventures and challenges',
				weights: {
					hero: 3,
					explorer: 1,
				},
			},
			{
				text: 'Enjoying urban entertainment and culture',
				weights: {
					jester: 3,
					creator: 1,
				},
			},
			{
				text: 'Experiencing exclusive natural settings',
				weights: {
					ruler: 3,
					lover: 1,
				},
			},
			{
				text: 'Exploring off-beaten paths',
				weights: {
					explorer: 3,
					rebel: 1,
				},
			},
			{
				text: 'Learning about local ecosystems',
				weights: {
					sage: 3,
					magician: 1,
				},
			},
		],
	},
	{
		id: 6,
		text: 'What distinguishes your destination from competitors?',
		options: [
			{
				text: 'Unspoiled authenticity',
				weights: {
					innocent: 3,
					everyman: 1,
				},
			},
			{
				text: 'Unique, unconventional experiences',
				weights: {
					rebel: 3,
					creator: 1,
				},
			},
			{
				text: 'Premium, world-class offerings',
				weights: {
					ruler: 3,
					lover: 1,
				},
			},
			{
				text: 'Rich cultural heritage',
				weights: {
					sage: 3,
					magician: 1,
				},
			},
			{
				text: 'Exceptional entertainment',
				weights: {
					jester: 3,
					hero: 1,
				},
			},
			{
				text: 'Outstanding hospitality',
				weights: {
					caregiver: 3,
					everyman: 1,
				},
			},
		],
	},
	{
		id: 7,
		text: "How would you characterize your destination's approach to development?",
		options: [
			{
				text: 'Preserving natural and cultural authenticity',
				weights: {
					innocent: 3,
					sage: 1,
				},
			},
			{
				text: 'Pushing boundaries and innovation',
				weights: {
					rebel: 3,
					creator: 1,
				},
			},
			{
				text: 'Enhancing premium experiences',
				weights: {
					ruler: 3,
					magician: 1,
				},
			},
			{
				text: 'Expanding adventure opportunities',
				weights: {
					explorer: 3,
					hero: 1,
				},
			},
			{
				text: 'Growing entertainment options',
				weights: {
					jester: 3,
					lover: 1,
				},
			},
			{
				text: 'Improving visitor services',
				weights: {
					caregiver: 3,
					everyman: 1,
				},
			},
		],
	},
	{
		id: 8,
		text: 'What type of transformation do visitors typically experience?',
		options: [
			{
				text: 'Renewed connection with nature',
				weights: {
					innocent: 3,
					explorer: 1,
				},
			},
			{
				text: 'Personal growth and learning',
				weights: {
					sage: 3,
					hero: 1,
				},
			},
			{
				text: 'Creative inspiration',
				weights: {
					creator: 3,
					magician: 1,
				},
			},
			{
				text: 'Lifestyle elevation',
				weights: {
					ruler: 3,
					lover: 1,
				},
			},
			{
				text: 'Joy and rejuvenation',
				weights: {
					jester: 3,
					caregiver: 1,
				},
			},
			{
				text: 'Cultural enlightenment',
				weights: {
					magician: 3,
					sage: 1,
				},
			},
		],
	},
	{
		id: 9,
		text: 'How does your destination typically engage with the local community?',
		options: [
			{
				text: 'Preserving traditional values',
				weights: {
					innocent: 3,
					caregiver: 1,
				},
			},
			{
				text: 'Fostering artistic expression',
				weights: {
					creator: 3,
					rebel: 1,
				},
			},
			{
				text: 'Building educational opportunities',
				weights: {
					sage: 3,
					hero: 1,
				},
			},
			{
				text: 'Creating premium experiences',
				weights: {
					ruler: 3,
					magician: 1,
				},
			},
			{
				text: 'Developing entertainment venues',
				weights: {
					jester: 3,
					everyman: 1,
				},
			},
			{
				text: 'Supporting outdoor recreation',
				weights: {
					explorer: 3,
					hero: 1,
				},
			},
		],
	},
	{
		id: 10,
		text: "What best describes your destination's ideal visitor?",
		options: [
			{
				text: 'Nature and authenticity seekers',
				weights: {
					innocent: 3,
					explorer: 1,
				},
			},
			{
				text: 'Cultural enthusiasts and learners',
				weights: {
					sage: 3,
					creator: 1,
				},
			},
			{
				text: 'Adventure and thrill seekers',
				weights: {
					hero: 3,
					rebel: 1,
				},
			},
			{
				text: 'Luxury and comfort seekers',
				weights: {
					ruler: 3,
					lover: 1,
				},
			},
			{
				text: 'Entertainment enthusiasts',
				weights: {
					jester: 3,
					magician: 1,
				},
			},
			{
				text: 'Community and connection seekers',
				weights: {
					everyman: 3,
					caregiver: 1,
				},
			},
		],
	},
	{
		id: 11,
		text: "How would you describe your destination's vision for the future?",
		options: [
			{
				text: 'Preserving natural and cultural heritage',
				weights: {
					innocent: 3,
					sage: 1,
				},
			},
			{
				text: 'Leading in innovation and creativity',
				weights: {
					creator: 3,
					magician: 1,
				},
			},
			{
				text: 'Setting new standards in luxury',
				weights: {
					ruler: 3,
					lover: 1,
				},
			},
			{
				text: 'Expanding adventure opportunities',
				weights: {
					explorer: 3,
					hero: 1,
				},
			},
			{
				text: 'Growing entertainment offerings',
				weights: {
					jester: 3,
					rebel: 1,
				},
			},
			{
				text: 'Strengthening community connections',
				weights: {
					caregiver: 3,
					everyman: 1,
				},
			},
		],
	},
	{
		id: 12,
		text: 'What emotions do you most want visitors to feel during their stay?',
		options: [
			{
				text: 'Peace and contentment',
				weights: {
					innocent: 3,
					caregiver: 1,
				},
			},
			{
				text: 'Wonder and enlightenment',
				weights: {
					sage: 3,
					magician: 1,
				},
			},
			{
				text: 'Excitement and freedom',
				weights: {
					explorer: 3,
					rebel: 1,
				},
			},
			{
				text: 'Prestige and indulgence',
				weights: {
					ruler: 3,
					lover: 1,
				},
			},
			{
				text: 'Joy and entertainment',
				weights: {
					jester: 3,
					everyman: 1,
				},
			},
			{
				text: 'Achievement and inspiration',
				weights: {
					hero: 3,
					creator: 1,
				},
			},
		],
	},
];

// Scoring calculation function
function calculateArchetypeScores(answers) {
	const scores = {};

	// Initialize scores for all archetypes
	Object.keys(archetypes).forEach((archetype) => {
		scores[archetype] = 0;
	});

	// Calculate scores based on answers
	answers.forEach((answerIndex, questionIndex) => {
		const question = questions[questionIndex];
		const selectedOption = question.options[answerIndex];

		Object.entries(selectedOption.weights).forEach(([archetype, weight]) => {
			scores[archetype] += weight;
		});
	});

	return scores;
}

// Function to get primary and secondary archetypes
function getTopArchetypes(scores) {
	const sortedArchetypes = Object.entries(scores)
		.sort(([, a], [, b]) => b - a)
		.map(([archetype]) => archetypes[archetype]);

	return {
		primary: sortedArchetypes[0],
		secondary: sortedArchetypes[1],
	};
}

let currentQuestionIndex = 0;
const answers = new Array(questions.length).fill(null);

function showQuestion(index) {
	const question = questions[index];
	document.getElementById('question').textContent = question.text;
	document.getElementById('currentQuestion').textContent = index + 1;

	const optionsContainer = document.getElementById('options');
	optionsContainer.innerHTML = '';

	question.options.forEach((option, optionIndex) => {
		const optionElement = document.createElement('div');
		optionElement.className = `option ${answers[index] === optionIndex ? 'selected' : ''}`;
		optionElement.textContent = option.text;
		optionElement.onclick = () => selectOption(optionIndex);
		optionsContainer.appendChild(optionElement);
	});

	document.getElementById('prevButton').disabled = index === 0;
	document.getElementById('nextButton').textContent = index === questions.length - 1 ? 'See Results' : 'Next';
}

function selectOption(optionIndex) {
	answers[currentQuestionIndex] = optionIndex;
	const options = document.querySelectorAll('.option');
	options.forEach((option, index) => {
		option.classList.toggle('selected', index === optionIndex);
	});
}

function previousQuestion() {
	if (currentQuestionIndex > 0) {
		currentQuestionIndex--;
		showQuestion(currentQuestionIndex);
	}
}

function nextQuestion() {
	if (answers[currentQuestionIndex] === null) {
		alert('Please select an answer before continuing.');
		return;
	}

	if (currentQuestionIndex < questions.length - 1) {
		currentQuestionIndex++;
		showQuestion(currentQuestionIndex);
	} else {
		showResults();
	}
}

function showResults() {
	const scores = calculateArchetypeScores(answers);
	const results = getTopArchetypes(scores);

	document.getElementById('assessment').style.display = 'none';
	document.getElementById('results').style.display = 'block';

	document.getElementById('primaryArchetype').textContent = results.primary.name;
	document.getElementById('primaryDescription').textContent = results.primary.description;
	document.getElementById('primaryPhrases').textContent = results.primary.dmoPhrases.join(', ');
	document.getElementById('primaryTips').textContent = results.primary.marketingTips;
	document.getElementById('primaryImage').src = results.primary.img;

	document.getElementById('secondaryArchetype').textContent = results.secondary.name;
	document.getElementById('secondaryDescription').textContent = results.secondary.description;

	const breakdownContainer = document.getElementById('scoreBreakdown');
	breakdownContainer.innerHTML = '';
	Object.entries(scores)
		.sort(([, a], [, b]) => b - a)
		.forEach(([archetype, score]) => {
			const scoreElement = document.createElement('div');
			scoreElement.textContent = `${archetypes[archetype].name}: ${score}`;
			breakdownContainer.appendChild(scoreElement);
		});
}

function restartAssessment() {
	currentQuestionIndex = 0;
	answers.fill(null);
	document.getElementById('assessment').style.display = 'block';
	document.getElementById('results').style.display = 'none';
	showQuestion(0);
}

// Initialize the assessment
showQuestion(0);
