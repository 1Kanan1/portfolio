export const techIcons: Record<string, string> = {
	'typescript': 'devicon-typescript-plain',
	'javascript': 'devicon-javascript-plain',
	'python': 'devicon-python-plain',
	'html5': 'devicon-html5-plain',
	'react': 'devicon-react-original',
	'svelte': 'devicon-svelte-plain',
	'svelte 5': 'devicon-svelte-plain',
	'tailwindcss': 'devicon-tailwindcss-plain',
	'redux': 'devicon-redux-original',
	'next.js': 'devicon-nextjs-plain',
	'node.js': 'devicon-nodejs-plain',
	'bun': 'devicon-bun-plain',
	'postgresql': 'devicon-postgresql-plain',
	'mongodb': 'devicon-mongodb-plain',
	'prisma': 'devicon-prisma-original',
	'git': 'devicon-git-plain',
	'github': 'devicon-github-original',
	'docker': 'devicon-docker-plain',
	'figma': 'devicon-figma-plain'
};

export function getTechIcon(name: string): string | null {
	return techIcons[name.toLowerCase()] || null;
}
