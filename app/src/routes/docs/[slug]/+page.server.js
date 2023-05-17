import fs from 'fs';
import { error } from '@sveltejs/kit';

const base = '../docs';     // TODO change once is a library
// const base = '../../';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    for (const subdir of fs.readdirSync(base)) {
        console.log(subdir);
        console.log(params);
        if (!fs.statSync(`${base}/${subdir}`).isDirectory()) continue;

        for (const file of fs.readdirSync(`${base}/${subdir}`)) {
            if (file.slice(3, -3) === params.slug) {
                return {
                    page: "<h1>TEST</h1>"
                };
            }
        }
    }

    throw error(404);
}
