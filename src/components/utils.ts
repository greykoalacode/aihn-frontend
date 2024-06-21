import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function convertToTitleCase(str: string) {
	if (!str) {
		return '';
	}
	return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export type Gist = {
	id: number;
	itemId: number;
	title: string;
	type: string;
	summary: string;
	categories: {
		id: number;
		name: string;
	}[];
	themes: {
		id: number;
		name: string;
	}[];
	description: string;
	url: string;
	by: string;
	descendants: number;
	time: number;
	storyURL: string;
};
